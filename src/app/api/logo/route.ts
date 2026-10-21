import { NextResponse } from "next/server";
import {
  IDEA_PATTERN,
  LIMITS,
  TEXT_PATTERN,
  VARIANT_HINTS,
  isIndustryId,
  isStyleId,
} from "@/lib/logo-maker/options";
import {
  AiError,
  aiConfig,
  buildPrompt,
  clientIp,
  contentProblem,
  generateImage,
  globalExhausted,
  limits,
  recordGeneration,
  remainingFor,
  verifyTurnstile,
} from "@/lib/logo-maker/server";

// Four images are generated in parallel; give slow cold starts some room.
export const maxDuration = 60;

function fail(status: number, code: string, error: string, extra: Record<string, unknown> = {}) {
  return NextResponse.json({ error, code, ...extra }, { status });
}

/** How many free generations this visitor has left today. */
export async function GET(req: Request) {
  const ip = clientIp(req);
  return NextResponse.json(
    { remaining: remainingFor(ip), limit: limits.perIp, enabled: aiConfig() !== null },
    { headers: { "Cache-Control": "no-store" } },
  );
}

export async function POST(req: Request) {
  const cfg = aiConfig();
  if (!cfg) {
    console.error("[logo-maker] CLOUDFLARE_ACCOUNT_ID / CLOUDFLARE_API_TOKEN are not set.");
    return fail(503, "not_configured", "The logo maker is being set up. Please check back soon.");
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return fail(400, "invalid", "Invalid request.");
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const tagline = typeof body.tagline === "string" ? body.tagline.trim() : "";
  const idea = typeof body.idea === "string" ? body.idea.trim().replace(/\s+/g, " ") : "";
  const { industry, style, turnstileToken } = body;

  if (!name) return fail(400, "invalid", "Please enter your business name.");
  if (name.length > LIMITS.name || !TEXT_PATTERN.test(name)) {
    return fail(400, "invalid", `Business name: up to ${LIMITS.name} English letters, numbers or simple punctuation.`);
  }
  if (tagline.length > LIMITS.tagline || !TEXT_PATTERN.test(tagline)) {
    return fail(400, "invalid", `Tagline: up to ${LIMITS.tagline} English letters, numbers or simple punctuation.`);
  }
  if (idea.length > LIMITS.idea || !IDEA_PATTERN.test(idea)) {
    return fail(400, "invalid", `Symbol idea: up to ${LIMITS.idea} characters, words only.`);
  }
  if (!isIndustryId(industry) || !isStyleId(style)) {
    return fail(400, "invalid", "Please choose an industry and a style.");
  }

  const problem = contentProblem(name, tagline, idea);
  if (problem) return fail(400, "blocked", problem);

  const ip = clientIp(req);

  if (!(await verifyTurnstile(turnstileToken, ip))) {
    return fail(403, "captcha", "Please complete the quick human check and try again.");
  }

  const remaining = remainingFor(ip);
  if (remaining <= 0) {
    return fail(429, "ip_limit", "You've used today's free logo generations.", { remaining: 0 });
  }
  if (globalExhausted()) {
    return fail(503, "busy", "Our AI studio has reached today's free limit.", { remaining });
  }

  const results = await Promise.allSettled(
    VARIANT_HINTS.map((_, i) => generateImage(cfg, buildPrompt(industry, style, idea, i))),
  );

  const images = results
    .filter((r): r is PromiseFulfilledResult<string> => r.status === "fulfilled")
    .map((r) => `data:image/jpeg;base64,${r.value}`);

  const errors = results
    .filter((r): r is PromiseRejectedResult => r.status === "rejected")
    .map((r) => r.reason);
  if (errors.length) {
    console.error(
      "[logo-maker] Some generations failed:",
      errors.map((e) => (e instanceof Error ? e.message : String(e))),
    );
  }

  if (images.length === 0) {
    const quota = errors.some((e) => e instanceof AiError && e.quota);
    return quota
      ? fail(503, "busy", "Our AI studio has reached today's free limit.", { remaining })
      : fail(502, "ai_error", "Something went wrong while sketching your logo. Please try again.", { remaining });
  }

  recordGeneration(ip);
  return NextResponse.json(
    { images, remaining: remainingFor(ip) },
    { headers: { "Cache-Control": "no-store" } },
  );
}
