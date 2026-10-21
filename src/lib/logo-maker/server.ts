// Server-only helpers for the AI Logo Maker: prompt building, content
// filtering, rate limiting, Turnstile verification and the Cloudflare call.
import { VARIANT_HINTS, getIndustry, getStyle, type IndustryId, type StyleId } from "./options";

/* ───────────────────────── Prompt ───────────────────────── */

export function buildPrompt(industry: IndustryId, style: StyleId, idea: string, variant: number) {
  const ind = getIndustry(industry);
  const sty = getStyle(style);
  const hint = VARIANT_HINTS[variant % VARIANT_HINTS.length];
  const subject = idea ? `, the symbol depicts ${idea}` : "";

  // The AI only draws the symbol. The business name is set later in real
  // fonts, so we never send it to the model (models misspell text).
  return [
    `Flat vector logo symbol for a ${ind.prompt}${subject}.`,
    `Design it as ${hint}; ${sty.prompt}.`,
    "Solid black shapes on a plain pure white background, one single isolated emblem, centered with generous empty margin,",
    "crisp clean edges, high contrast, flat 2D, simple enough to read at small sizes.",
    "No text, no letters, no words, no typography, no gradients, no shadows, no 3D, no mockup, no frame, no border.",
  ].join(" ");
}

/* ───────────────────── Content filter ───────────────────── */

// Distinctive brand names only — common words (apple, amazon, hero…) are
// left out so real small businesses with those words aren't blocked.
const BLOCKED_BRANDS = [
  "nike", "adidas", "reebok", "gucci", "chanel", "prada", "versace", "rolex", "louis vuitton",
  "starbucks", "mcdonalds", "mcdonald's", "coca cola", "coca-cola", "cocacola", "pepsi",
  "google", "microsoft", "facebook", "instagram", "whatsapp", "youtube", "tiktok", "netflix",
  "spotify", "ferrari", "lamborghini", "porsche", "bmw", "mercedes benz", "disney",
  "pokemon", "pikachu", "pixar", "lego", "samsung", "swiggy", "zomato", "flipkart", "paytm",
  "infosys", "playstation", "xbox", "nintendo", "red bull", "harley davidson",
];

const BLOCKED_WORDS = [
  "nude", "naked", "porn", "porno", "sex", "sexy", "nsfw", "xxx", "erotic", "fetish", "boob", "boobs",
  "penis", "vagina", "dick", "cock", "pussy", "fuck", "shit", "bitch", "nazi", "swastika", "kkk",
  "terrorist", "rape", "cocaine", "heroin",
];

function toPattern(words: string[]) {
  const escaped = words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/[ -]/g, "[\\s-]?"));
  return new RegExp(`(^|[^a-z])(${escaped.join("|")})([^a-z]|$)`, "i");
}

const BRAND_RE = toPattern(BLOCKED_BRANDS);
const WORD_RE = toPattern(BLOCKED_WORDS);

export function contentProblem(...texts: string[]): string | null {
  const all = texts.join(" | ");
  if (WORD_RE.test(all)) return "Please keep it family-friendly — that word isn't allowed.";
  if (BRAND_RE.test(all)) {
    return "Please use your own business name and idea — famous brands and trademarks can't be recreated.";
  }
  return null;
}

/* ──────────────────────── Rate limit ─────────────────────── */
// In-memory, per server instance. Good enough to stop casual overuse; for a
// hard global cap also set "Rate limiting" on a Cloudflare AI Gateway.

type Counter = { day: string; count: number };
const perKey = new Map<string, Counter>();
const global: Counter = { day: "", count: 0 };

function today() {
  return new Date().toISOString().slice(0, 10); // resets at 00:00 UTC, same as Cloudflare's free quota
}

function read(map: Map<string, Counter>, key: string) {
  const d = today();
  const c = map.get(key);
  if (!c || c.day !== d) return 0;
  return c.count;
}

function bump(map: Map<string, Counter>, key: string) {
  const d = today();
  const c = map.get(key);
  if (!c || c.day !== d) map.set(key, { day: d, count: 1 });
  else c.count += 1;
  // keep the map small
  if (map.size > 5000) {
    for (const [k, v] of map) if (v.day !== d) map.delete(k);
  }
}

export const limits = {
  perIp: Math.max(1, Number(process.env.LOGO_DAILY_LIMIT_PER_IP) || 4),
  global: Math.max(1, Number(process.env.LOGO_DAILY_LIMIT_GLOBAL) || 40),
};

export function remainingFor(ip: string) {
  return Math.max(0, limits.perIp - read(perKey, `gen:${ip}`));
}

export function globalExhausted() {
  const d = today();
  return global.day === d && global.count >= limits.global;
}

export function recordGeneration(ip: string) {
  bump(perKey, `gen:${ip}`);
  const d = today();
  if (global.day !== d) {
    global.day = d;
    global.count = 0;
  }
  global.count += 1;
}

export function allowLead(ip: string) {
  const key = `lead:${ip}`;
  if (read(perKey, key) >= 12) return false;
  bump(perKey, key);
  return true;
}

export function clientIp(req: Request) {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip")?.trim() || "unknown";
}

/* ──────────────────────── Turnstile ──────────────────────── */

export async function verifyTurnstile(token: unknown, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // captcha is optional
  if (typeof token !== "string" || !token) return false;
  try {
    const form = new URLSearchParams({ secret, response: token });
    if (ip !== "unknown") form.set("remoteip", ip);
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: form,
      signal: AbortSignal.timeout(8000),
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch (e) {
    console.error("[logo-maker] Turnstile verification failed:", e);
    return false;
  }
}

/* ─────────────────── Cloudflare Workers AI ────────────────── */

export const MODEL = "@cf/black-forest-labs/flux-1-schnell";

export class AiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly quota: boolean,
  ) {
    super(message);
  }
}

export function aiConfig() {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const token = process.env.CLOUDFLARE_API_TOKEN;
  if (!accountId || !token) return null;
  // Optional: route through a Cloudflare AI Gateway for caching, analytics and
  // rate limiting, e.g. https://gateway.ai.cloudflare.com/v1/<account>/<gateway>/workers-ai
  const base = (
    process.env.CLOUDFLARE_AI_BASE_URL || `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run`
  ).replace(/\/+$/, "");
  const steps = Math.min(8, Math.max(1, Number(process.env.LOGO_STEPS) || 4));
  return { url: `${base}/${MODEL}`, token, steps };
}

export async function generateImage(
  cfg: NonNullable<ReturnType<typeof aiConfig>>,
  prompt: string,
): Promise<string> {
  const res = await fetch(cfg.url, {
    method: "POST",
    headers: { Authorization: `Bearer ${cfg.token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ prompt, steps: cfg.steps }),
    signal: AbortSignal.timeout(45_000),
  });

  let data: {
    success?: boolean;
    result?: { image?: string };
    errors?: { code?: number; message?: string }[];
  } = {};
  try {
    data = await res.json();
  } catch {
    // non-JSON error page
  }

  const image = data.result?.image;
  if (res.ok && image) return image;

  const message = data.errors?.map((e) => `${e.code ?? ""} ${e.message ?? ""}`.trim()).join("; ") || res.statusText;
  const quota =
    res.status === 429 || /allocation|neurons|quota|limit|capacity|4006/i.test(message);
  throw new AiError(message || "Image generation failed", res.status, quota);
}
