"use client";
import { useEffect, useRef, useState } from "react";

export type LeadContext = {
  business: string;
  tagline: string;
  industry: string;
  style: string;
  svg: string;
};

type Props = {
  open: boolean;
  context: LeadContext;
  onClose: () => void;
  onUnlocked: () => void;
};

const labelClass = "block text-[10px] tracking-[0.25em] uppercase text-muted mb-2";
const inputClass =
  "w-full bg-transparent border-b border-hairline py-3 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:border-foreground transition-colors duration-300";

export default function LeadModal({ open, context, onClose, onUnlocked }: Props) {
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "" });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const firstField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    const t = setTimeout(() => firstField.current?.focus(), 30);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      prev?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/logo/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, ...context }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      onUnlocked();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-foreground/60 px-4 py-6"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-title"
        className="relative w-full max-w-md bg-background border border-hairline p-8 sm:p-10"
        style={{ animation: "fadeUp 0.35s cubic-bezier(0.22,1,0.36,1)" }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-muted hover:text-foreground transition-colors"
        >
          <span aria-hidden className="text-xl leading-none">&times;</span>
        </button>

        <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-3" style={{ fontFamily: "var(--font-secondary)" }}>
          Almost there
        </p>
        <h2 id="lead-title" className="text-2xl sm:text-3xl italic text-foreground mb-3">
          Your logo is ready.
        </h2>
        <p className="text-sm text-muted leading-relaxed mb-8" style={{ fontFamily: "var(--font-secondary)" }}>
          Tell us where to reach you and your download starts right away. It&rsquo;s free, and you only do this once.
        </p>

        <form onSubmit={submit} className="space-y-6">
          <div>
            <label className={labelClass} htmlFor="lead-name" style={{ fontFamily: "var(--font-secondary)" }}>
              Your name
            </label>
            <input
              ref={firstField}
              id="lead-name"
              required
              maxLength={60}
              autoComplete="name"
              value={form.name}
              onChange={set("name")}
              placeholder="Full name"
              className={inputClass}
              style={{ fontFamily: "var(--font-secondary)" }}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="lead-email" style={{ fontFamily: "var(--font-secondary)" }}>
              Email
            </label>
            <input
              id="lead-email"
              type="email"
              required
              maxLength={120}
              autoComplete="email"
              value={form.email}
              onChange={set("email")}
              placeholder="you@business.com"
              className={inputClass}
              style={{ fontFamily: "var(--font-secondary)" }}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="lead-wa" style={{ fontFamily: "var(--font-secondary)" }}>
              WhatsApp <span className="normal-case tracking-normal">(optional)</span>
            </label>
            <input
              id="lead-wa"
              type="tel"
              maxLength={20}
              autoComplete="tel"
              value={form.whatsapp}
              onChange={set("whatsapp")}
              placeholder="+91 98765 43210"
              className={inputClass}
              style={{ fontFamily: "var(--font-secondary)" }}
            />
          </div>

          {error && (
            <p role="alert" className="text-sm text-red-600" style={{ fontFamily: "var(--font-secondary)" }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={sending}
            className="w-full px-8 py-4 bg-foreground text-background text-[10px] tracking-[0.25em] uppercase hover:bg-brand-green transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-wait"
          >
            {sending ? "Unlocking…" : "Unlock my download →"}
          </button>
          <p className="text-[11px] text-muted leading-relaxed text-center" style={{ fontFamily: "var(--font-secondary)" }}>
            We&rsquo;ll only use this to follow up about your logo. No spam, ever.
          </p>
        </form>
      </div>
    </div>
  );
}
