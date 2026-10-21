"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { Font } from "opentype.js";
import {
  FONTS,
  IDEA_PATTERN,
  INDUSTRIES,
  LIMITS,
  PALETTE,
  STYLES,
  TEXT_PATTERN,
  getIndustry,
  getStyle,
  type FontId,
  type IndustryId,
  type StyleId,
} from "@/lib/logo-maker/options";
import type { VectorIcon } from "@/lib/logo-maker/vectorize";
import {
  composeLogo,
  downloadBlob,
  drawingToSvg,
  loadFont,
  svgToPngBlob,
  type Layout,
  type LogoDrawing,
} from "@/lib/logo-maker/compose";
import LeadModal from "./LeadModal";
import Turnstile from "./Turnstile";

type Phase = "idle" | "sketching" | "vectorizing" | "setting" | "ready";
type Problem = { message: string; code?: string };
type Variant = { id: string; icon: VectorIcon };

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";
const UNLOCK_KEY = "lc-logo-maker-unlocked";

const INK = "#1A1A1A";
const CREAM = "#F9F7F4";

const STEPS: { phase: Phase; label: string }[] = [
  { phase: "sketching", label: "Sketching four symbols with AI" },
  { phase: "vectorizing", label: "Converting them to clean vectors" },
  { phase: "setting", label: "Setting your name in real type" },
];

const fontFaceCss = FONTS.map(
  (f) =>
    `@font-face{font-family:"LM ${f.label}";src:url(${f.file}) format("woff");font-weight:${f.weight};font-display:swap}`,
).join("");

const sans = { fontFamily: "var(--font-secondary)" } as const;
const labelClass = "block text-[10px] tracking-[0.25em] uppercase text-muted mb-2";
const inputClass =
  "w-full bg-transparent border-b border-hairline py-3 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:border-foreground transition-colors duration-300";

function readUnlocked() {
  try {
    return typeof window !== "undefined" && window.localStorage.getItem(UNLOCK_KEY) === "1";
  } catch {
    return false;
  }
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "my";
}

function LogoSvg({ drawing, className }: { drawing: LogoDrawing; className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${drawing.width} ${drawing.height}`}
      className={className}
      role="img"
      aria-label={`${drawing.title} logo`}
      preserveAspectRatio="xMidYMid meet"
    >
      {drawing.paths.map((p, i) => (
        <path key={i} d={p.d} fill={p.fill} transform={p.transform} />
      ))}
    </svg>
  );
}

function Segmented<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
}) {
  return (
    <div>
      <p className={labelClass} style={sans}>
        {label}
      </p>
      <div className="inline-flex border border-hairline" role="radiogroup" aria-label={label}>
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={value === o.value}
            onClick={() => onChange(o.value)}
            className={`px-4 py-2 text-[10px] tracking-[0.2em] uppercase transition-colors duration-200 cursor-pointer ${
              value === o.value ? "bg-foreground text-background" : "text-muted hover:text-foreground"
            }`}
            style={sans}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function LogoMaker() {
  const [form, setForm] = useState({
    name: "",
    tagline: "",
    industry: "healthcare" as IndustryId,
    style: "minimal" as StyleId,
    idea: "",
  });
  const [phase, setPhase] = useState<Phase>("idle");
  const [problem, setProblem] = useState<Problem | null>(null);
  const [variants, setVariants] = useState<Variant[]>([]);
  const [selected, setSelected] = useState(0);
  const [look, setLook] = useState({
    color: PALETTE[0].hex as string,
    fontId: "manrope" as FontId,
    layout: "stacked" as Layout,
    uppercase: false,
    dark: false,
  });
  const [fonts, setFonts] = useState<Partial<Record<FontId, Font>>>({});
  const [quota, setQuota] = useState<{ remaining: number; limit: number; enabled: boolean } | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [captchaReset, setCaptchaReset] = useState(0);
  const [unlocked, setUnlocked] = useState(readUnlocked);
  const [lead, setLead] = useState<{ open: boolean; pending: "svg" | "png" | null }>({ open: false, pending: null });
  const [downloading, setDownloading] = useState<"svg" | "png" | null>(null);
  const studioRef = useRef<HTMLDivElement>(null);

  const busy = phase === "sketching" || phase === "vectorizing" || phase === "setting";

  // how many free generations are left today
  useEffect(() => {
    let cancelled = false;
    fetch("/api/logo", { cache: "no-store" })
      .then((r) => r.json())
      .then((d) => {
        if (!cancelled && typeof d.remaining === "number") {
          setQuota({ remaining: d.remaining, limit: d.limit, enabled: d.enabled !== false });
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  // load the chosen typeface (parsed with opentype.js so text can become outlines)
  useEffect(() => {
    if (fonts[look.fontId]) return;
    let cancelled = false;
    const file = FONTS.find((f) => f.id === look.fontId)!.file;
    loadFont(file)
      .then((f) => {
        if (!cancelled) setFonts((prev) => ({ ...prev, [look.fontId]: f }));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [look.fontId, fonts]);

  const font = fonts[look.fontId];
  const tracking = look.uppercase ? (look.fontId === "cormorant" ? 0.16 : 0.08) : 0;

  const drawings = useMemo(() => {
    if (!font) return [];
    const inkColor = look.dark ? CREAM : INK;
    return variants.map((v) =>
      composeLogo({
        icon: v.icon,
        name: form.name,
        tagline: form.tagline,
        font,
        uppercase: look.uppercase,
        tracking,
        layout: look.layout,
        iconColor: look.dark && look.color === INK ? CREAM : look.color,
        nameColor: inkColor,
        taglineColor: look.dark ? "#B5B3A8" : "#6B6B63",
      }),
    );
  }, [variants, font, form.name, form.tagline, look, tracking]);

  const current = drawings[selected] ?? drawings[0];

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate(): string | null {
    const name = form.name.trim();
    if (!name) return "Please enter your business name.";
    if (!TEXT_PATTERN.test(name) || !TEXT_PATTERN.test(form.tagline)) {
      return "Please use English letters, numbers and simple punctuation for the name and tagline.";
    }
    if (!IDEA_PATTERN.test(form.idea)) return "Symbol idea: words only, please.";
    return null;
  }

  async function generate(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;
    const invalid = validate();
    if (invalid) {
      setProblem({ message: invalid });
      return;
    }
    if (SITE_KEY && !token) {
      setProblem({ message: "Please complete the quick human check below the form.", code: "captcha" });
      return;
    }

    setProblem(null);
    setPhase("sketching");
    const style = getStyle(form.style);

    try {
      const res = await fetch("/api/logo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, turnstileToken: token }),
      });
      const data = await res.json().catch(() => ({}));
      if (typeof data.remaining === "number") {
        setQuota((q) => ({ remaining: data.remaining, limit: q?.limit ?? data.remaining, enabled: true }));
      }
      if (!res.ok || !Array.isArray(data.images)) {
        throw Object.assign(new Error(data.error || "Something went wrong. Please try again."), { code: data.code });
      }

      setPhase("vectorizing");
      const { vectorizeDataUrl } = await import("@/lib/logo-maker/vectorize");
      const icons: VectorIcon[] = [];
      for (const img of data.images as string[]) {
        await new Promise((r) => setTimeout(r, 16)); // let the UI breathe between traces
        try {
          const icon = await vectorizeDataUrl(img);
          if (icon) icons.push(icon);
        } catch {
          // skip this one
        }
      }
      if (!icons.length) {
        throw Object.assign(
          new Error("We couldn't turn those sketches into clean logos. Try another style or symbol idea."),
          { code: "trace_failed" },
        );
      }

      setPhase("setting");
      const styleFont = FONTS.find((f) => f.id === style.font)!;
      const parsed = await loadFont(styleFont.file);
      setFonts((prev) => ({ ...prev, [style.font]: parsed }));
      setLook((l) => ({ ...l, fontId: style.font, uppercase: style.uppercase }));
      setVariants(icons.map((icon, i) => ({ id: `${Date.now()}-${i}`, icon })));
      setSelected(0);
      setPhase("ready");

      if (window.innerWidth < 1024) {
        requestAnimationFrame(() => studioRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
      }
    } catch (err) {
      const code = (err as { code?: string }).code;
      setProblem({
        message: err instanceof Error ? err.message : "Something went wrong. Please try again.",
        code,
      });
      setPhase(variants.length ? "ready" : "idle");
    } finally {
      if (SITE_KEY) {
        setToken(null);
        setCaptchaReset((n) => n + 1);
      }
    }
  }

  const runDownload = useCallback(
    async (kind: "svg" | "png") => {
      if (!current) return;
      setDownloading(kind);
      try {
        const svg = drawingToSvg(current);
        const base = `${slug(form.name)}-logo${look.dark ? "-for-dark-backgrounds" : ""}`;
        if (kind === "svg") {
          downloadBlob(new Blob([svg], { type: "image/svg+xml" }), `${base}.svg`);
        } else {
          downloadBlob(await svgToPngBlob(svg, current.width, current.height), `${base}.png`);
        }
      } catch {
        setProblem({ message: "Download failed. Please try again." });
      } finally {
        setDownloading(null);
      }
    },
    [current, form.name, look.dark],
  );

  function requestDownload(kind: "svg" | "png") {
    if (unlocked) runDownload(kind);
    else setLead({ open: true, pending: kind });
  }

  const closeLead = useCallback(() => setLead({ open: false, pending: null }), []);

  const onUnlocked = useCallback(() => {
    try {
      window.localStorage.setItem(UNLOCK_KEY, "1");
    } catch {
      // private mode — unlock for this visit only
    }
    setUnlocked(true);
    const pending = lead.pending;
    setLead({ open: false, pending: null });
    if (pending) runDownload(pending);
  }, [lead.pending, runDownload]);

  const limitReached = quota !== null && quota.remaining <= 0;
  const notReady = quota !== null && !quota.enabled;
  const selectedStyle = getStyle(form.style);
  const stepIndex = STEPS.findIndex((s) => s.phase === phase);

  return (
    <>
      <style>{fontFaceCss}</style>

      <section className="px-6 py-16 sm:py-20" aria-label="AI logo maker">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.25fr)] gap-14 lg:gap-16 items-start">
          {/* ── 01 · Describe ─────────────────────────── */}
          <form onSubmit={generate} className="space-y-8 lg:sticky lg:top-8" noValidate>
            <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green" style={sans}>
              01 &nbsp;&middot;&nbsp; Describe your business
            </p>

            <div>
              <label className={labelClass} htmlFor="lm-name" style={sans}>
                Business name
              </label>
              <input
                id="lm-name"
                required
                maxLength={LIMITS.name}
                autoComplete="organization"
                placeholder="e.g. Lotus Dental Care"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className={inputClass}
                style={sans}
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="lm-tagline" style={sans}>
                Tagline <span className="normal-case tracking-normal">(optional)</span>
              </label>
              <input
                id="lm-tagline"
                maxLength={LIMITS.tagline}
                placeholder="e.g. Gentle care, bright smiles"
                value={form.tagline}
                onChange={(e) => update("tagline", e.target.value)}
                className={inputClass}
                style={sans}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label className={labelClass} htmlFor="lm-industry" style={sans}>
                  Industry
                </label>
                <select
                  id="lm-industry"
                  value={form.industry}
                  onChange={(e) => update("industry", e.target.value as IndustryId)}
                  className={`${inputClass} cursor-pointer`}
                  style={sans}
                >
                  {INDUSTRIES.map((i) => (
                    <option key={i.id} value={i.id}>
                      {i.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass} htmlFor="lm-idea" style={sans}>
                  Symbol idea <span className="normal-case tracking-normal">(optional)</span>
                </label>
                <input
                  id="lm-idea"
                  maxLength={LIMITS.idea}
                  placeholder="e.g. a lotus, a tooth"
                  value={form.idea}
                  onChange={(e) => update("idea", e.target.value)}
                  className={inputClass}
                  style={sans}
                />
              </div>
            </div>

            <div>
              <p className={labelClass} style={sans} id="lm-style-label">
                Style
              </p>
              <div className="flex flex-wrap gap-2" role="radiogroup" aria-labelledby="lm-style-label">
                {STYLES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    role="radio"
                    aria-checked={form.style === s.id}
                    onClick={() => update("style", s.id)}
                    className={`px-4 py-2.5 border text-sm italic transition-colors duration-200 cursor-pointer ${
                      form.style === s.id
                        ? "bg-foreground text-background border-foreground"
                        : "border-hairline text-foreground hover:border-foreground"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
              <p className="mt-3 text-[10px] tracking-[0.2em] uppercase text-muted" style={sans}>
                {selectedStyle.hint}
              </p>
            </div>

            {SITE_KEY && <Turnstile siteKey={SITE_KEY} onToken={setToken} resetSignal={captchaReset} />}

            <div className="space-y-3">
              <button
                type="submit"
                disabled={busy || limitReached || notReady}
                className="w-full px-8 py-4 bg-foreground text-background text-[10px] tracking-[0.3em] uppercase hover:bg-brand-green transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {busy ? "Creating your logos…" : variants.length ? "Generate 4 new ideas →" : "Generate 4 logos →"}
              </button>
              <p className="text-[11px] text-muted text-center" style={sans} aria-live="polite">
                {notReady
                  ? "The logo maker is being set up. Please check back soon."
                  : quota
                    ? limitReached
                      ? "You've used today's free generations. Come back tomorrow."
                      : `${quota.remaining} of ${quota.limit} free generations left today`
                    : "Free. No sign-up needed to try."}
              </p>
            </div>

            {problem && (
              <div role="alert" className="border-l-2 border-brand-orange pl-4 py-1">
                <p className="text-sm text-foreground leading-relaxed" style={sans}>
                  {problem.message}
                </p>
                {(problem.code === "ip_limit" || problem.code === "busy" || problem.code === "trace_failed") && (
                  <Link
                    href="/contact"
                    className="inline-block mt-2 text-[10px] tracking-[0.25em] uppercase text-brand-orange hover:text-foreground transition-colors"
                    style={sans}
                  >
                    Get a logo designed by our team &rarr;
                  </Link>
                )}
              </div>
            )}
          </form>

          {/* ── 02 · Studio ──────────────────────────── */}
          <div ref={studioRef} className="scroll-mt-6 min-w-0">
            <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-8" style={sans}>
              02 &nbsp;&middot;&nbsp; Pick, personalise &amp; download
            </p>

            {/* Main canvas */}
            <div
              className={`relative aspect-[4/3] border flex items-center justify-center p-8 sm:p-14 transition-colors duration-300 ${
                look.dark && current ? "bg-foreground border-foreground" : "bg-white border-hairline"
              }`}
            >
              {current && !busy && (
                <div
                  className={`absolute top-3 right-3 inline-flex border text-[9px] tracking-[0.2em] uppercase ${
                    look.dark ? "border-[#3a3a3a]" : "border-hairline"
                  }`}
                  role="radiogroup"
                  aria-label="Preview background"
                  style={sans}
                >
                  {(["light", "dark"] as const).map((mode) => {
                    const on = (mode === "dark") === look.dark;
                    return (
                      <button
                        key={mode}
                        type="button"
                        role="radio"
                        aria-checked={on}
                        onClick={() => setLook((l) => ({ ...l, dark: mode === "dark" }))}
                        className={`px-3 py-1.5 cursor-pointer transition-colors duration-200 ${
                          on
                            ? look.dark
                              ? "bg-background text-foreground"
                              : "bg-foreground text-background"
                            : "text-muted hover:text-brand-orange"
                        }`}
                      >
                        {mode === "light" ? "On light" : "On dark"}
                      </button>
                    );
                  })}
                </div>
              )}
              {current ? (
                <LogoSvg
                  drawing={current}
                  className={`w-full h-full transition-opacity duration-300 ${busy ? "opacity-15" : "opacity-100"}`}
                />
              ) : (
                !busy && (
                  <div className="text-center">
                    <span className="block text-3xl text-brand-orange mb-4" aria-hidden>
                      &#9678;
                    </span>
                    <p className="text-xl sm:text-2xl italic text-foreground mb-2">Your logo appears here</p>
                    <p className="text-xs text-muted max-w-xs mx-auto leading-relaxed" style={sans}>
                      Four AI-sketched symbols, set with your name in real type. Ready in about 20 seconds.
                    </p>
                  </div>
                )
              )}

              {busy && (
                <div className="absolute inset-0 flex items-center justify-center p-6" aria-live="polite">
                  <ol className="space-y-4">
                    {STEPS.map((s, i) => {
                      const done = i < stepIndex;
                      const active = i === stepIndex;
                      return (
                        <li
                          key={s.phase}
                          className={`flex items-center gap-4 text-sm transition-colors duration-300 ${
                            active ? "text-foreground" : done ? "text-brand-green" : "text-muted/60"
                          }`}
                          style={sans}
                        >
                          <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                            {active && (
                              <span className="absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-60 animate-ping" />
                            )}
                            <span
                              className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                                active ? "bg-brand-orange" : done ? "bg-brand-green" : "bg-hairline"
                              }`}
                            />
                          </span>
                          {s.label}
                          {done && <span aria-hidden>&#10003;</span>}
                        </li>
                      );
                    })}
                  </ol>
                </div>
              )}
            </div>

            {/* Variants */}
            <div className="grid grid-cols-4 gap-2 mt-2">
              {[0, 1, 2, 3].map((i) => {
                const d = drawings[i];
                return d ? (
                  <button
                    key={variants[i].id}
                    type="button"
                    onClick={() => setSelected(i)}
                    aria-label={`Logo option ${i + 1}`}
                    aria-pressed={selected === i}
                    className={`aspect-square p-3 border transition-colors duration-200 cursor-pointer ${
                      look.dark ? "bg-foreground" : "bg-white"
                    } ${selected === i ? "border-brand-orange" : look.dark ? "border-foreground hover:border-muted" : "border-hairline hover:border-foreground"}`}
                  >
                    <LogoSvg drawing={d} className="w-full h-full" />
                  </button>
                ) : (
                  <div
                    key={`empty-${i}`}
                    className={`aspect-square border border-dashed border-hairline ${busy ? "animate-pulse bg-hairline/30" : ""}`}
                  />
                );
              })}
            </div>

            {current && (
              <>
                {/* Personalise */}
                <div className="grid sm:grid-cols-2 gap-8 mt-10">
                  <div>
                    <p className={labelClass} style={sans} id="lm-colour-label">
                      Colour
                    </p>
                    <div className="flex flex-wrap gap-2" role="radiogroup" aria-labelledby="lm-colour-label">
                      {PALETTE.map((c) => (
                        <button
                          key={c.id}
                          type="button"
                          role="radio"
                          aria-checked={look.color === c.hex}
                          aria-label={c.label}
                          title={c.label}
                          onClick={() => setLook((l) => ({ ...l, color: c.hex }))}
                          className={`w-7 h-7 rounded-full cursor-pointer transition-transform duration-200 hover:scale-110 ${
                            look.color === c.hex ? "ring-2 ring-offset-2 ring-foreground ring-offset-background" : ""
                          }`}
                          style={{ background: c.hex }}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className={labelClass} style={sans} id="lm-font-label">
                      Typeface
                    </p>
                    <div className="grid grid-cols-3 gap-px bg-hairline border border-hairline" role="radiogroup" aria-labelledby="lm-font-label">
                      {FONTS.map((f) => (
                        <button
                          key={f.id}
                          type="button"
                          role="radio"
                          aria-checked={look.fontId === f.id}
                          onClick={() => setLook((l) => ({ ...l, fontId: f.id }))}
                          className={`px-2 py-2.5 flex flex-col items-center gap-0.5 cursor-pointer transition-colors duration-200 ${
                            look.fontId === f.id ? "bg-foreground text-background" : "bg-background text-foreground hover:bg-white"
                          }`}
                        >
                          <span className="text-lg leading-none" style={{ fontFamily: `"LM ${f.label}", serif`, fontWeight: f.weight }}>
                            Aa
                          </span>
                          <span className="text-[9px] tracking-[0.12em] uppercase opacity-70" style={sans}>
                            {f.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <Segmented
                    label="Layout"
                    value={look.layout}
                    options={[
                      { value: "stacked", label: "Stacked" },
                      { value: "inline", label: "Side by side" },
                    ]}
                    onChange={(v) => setLook((l) => ({ ...l, layout: v }))}
                  />

                  <Segmented
                    label="Lettering"
                    value={look.uppercase ? "upper" : "as-typed"}
                    options={[
                      { value: "as-typed", label: "As typed" },
                      { value: "upper", label: "All caps" },
                    ]}
                    onChange={(v) => setLook((l) => ({ ...l, uppercase: v === "upper" }))}
                  />
                </div>

                <p className="mt-6 text-[11px] text-muted" style={sans}>
                  Tip: edit your name or tagline on the left. Your logos update instantly, without using a generation.
                </p>

                {/* Download */}
                <div className="mt-10 pt-8 border-t border-hairline">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={() => requestDownload("svg")}
                      disabled={downloading !== null}
                      className="flex-1 px-6 py-4 bg-foreground text-background text-[10px] tracking-[0.25em] uppercase hover:bg-brand-green transition-colors duration-300 cursor-pointer disabled:opacity-50"
                    >
                      {downloading === "svg" ? "Preparing…" : "Download SVG · vector"}
                    </button>
                    <button
                      type="button"
                      onClick={() => requestDownload("png")}
                      disabled={downloading !== null}
                      className="flex-1 px-6 py-4 border border-foreground text-foreground text-[10px] tracking-[0.25em] uppercase hover:border-brand-orange hover:text-brand-orange transition-colors duration-300 cursor-pointer disabled:opacity-50"
                    >
                      {downloading === "png" ? "Preparing…" : "Download PNG · HD"}
                    </button>
                  </div>
                  <p className="mt-3 text-[11px] text-muted leading-relaxed" style={sans}>
                    Transparent background. Free for personal and commercial use. Fonts are licensed under the SIL Open Font License.
                  </p>
                </div>

                {/* Upsell */}
                <div className="mt-8 p-6 sm:p-8 border border-hairline flex flex-col sm:flex-row sm:items-center gap-5 justify-between">
                  <div>
                    <p className="text-lg italic text-foreground mb-1">Like where this is going?</p>
                    <p className="text-xs text-muted leading-relaxed max-w-sm" style={sans}>
                      Our designers can refine it into a one-of-a-kind mark, plus colours, type, business cards and a social media kit.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="flex-shrink-0 px-6 py-3 bg-brand-green text-background text-[10px] tracking-[0.25em] uppercase hover:bg-brand-orange transition-colors duration-300 text-center"
                  >
                    Get a brand kit &rarr;
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <LeadModal
        open={lead.open}
        onClose={closeLead}
        onUnlocked={onUnlocked}
        context={{
          business: form.name,
          tagline: form.tagline,
          industry: getIndustry(form.industry).label,
          style: selectedStyle.label,
          svg: current && lead.open ? drawingToSvg(current) : "",
        }}
      />
    </>
  );
}
