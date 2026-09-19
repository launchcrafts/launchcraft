"use client";
import { useState } from "react";

const serviceOptions = [
  "Web Development",
  "AI Automation",
  "Brand Identity",
  "Full Package",
  "Other / Not Sure",
];

type FormState = {
  name: string;
  email: string;
  service: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setSending(false);
    }
  }

  const labelClass =
    "block text-[10px] tracking-[0.25em] uppercase text-muted mb-2";
  const inputClass =
    "w-full bg-transparent border-b border-hairline py-3 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:border-foreground transition-colors duration-300";

  if (submitted) {
    return (
      <div className="flex flex-col items-start justify-center py-16">
        <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-4">
          Message Sent
        </p>
        <h3 className="text-2xl sm:text-3xl italic text-foreground mb-4">
          Thank you, {form.name}.
        </h3>
        <div className="w-8 h-px bg-hairline mb-4" />
        <p
          className="text-sm text-muted leading-relaxed"
          style={{ fontFamily: "var(--font-secondary)" }}
        >
          We'll review your project and get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label className={labelClass} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            style={{ fontFamily: "var(--font-secondary)" }}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            style={{ fontFamily: "var(--font-secondary)" }}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="service">
          Service
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className={`${inputClass} cursor-pointer`}
          style={{ fontFamily: "var(--font-secondary)" }}
        >
          <option value="">Select a service</option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell us about your project — goals, timeline, anything relevant."
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
          style={{ fontFamily: "var(--font-secondary)" }}
        />
      </div>

      {error && (
        <p
          className="text-sm text-red-500"
          style={{ fontFamily: "var(--font-secondary)" }}
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="px-8 py-3 bg-foreground text-background text-[10px] tracking-[0.25em] uppercase hover:bg-brand-green transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {sending ? "Sending..." : "Send Message \u2192"}
      </button>
    </form>
  );
}
