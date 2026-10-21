import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import LogoMaker from "@/components/logo-maker/LogoMaker";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/logo-maker`;

export const metadata: Metadata = {
  title: "Free AI Logo Maker — Create a Logo in Seconds",
  description:
    "Create a professional logo for free with LaunchCraft's AI Logo Maker. Describe your business, pick a style, and download a vector SVG or HD PNG in seconds. No design skills needed.",
  keywords: [
    "free logo maker",
    "AI logo generator",
    "logo maker India",
    "free logo design",
    "create logo online",
    "SVG logo download",
    "business logo maker",
    "LaunchCraft logo maker",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Free AI Logo Maker — LaunchCraft",
    description:
      "Describe your business, pick a style, and get four AI-designed logo ideas. Download vector SVG or HD PNG free.",
    url,
    type: "website",
  },
};

const steps = [
  {
    step: "01",
    title: "Describe",
    description: "Your business name, industry and the feel you want: minimal, luxury, playful, bold or organic.",
  },
  {
    step: "02",
    title: "AI sketches",
    description: "Our AI draws four unique symbols. We trace them into crisp vectors and set your name in real type.",
  },
  {
    step: "03",
    title: "Personalise",
    description: "Switch colours, typefaces and layouts instantly. Then download a vector SVG or HD PNG.",
  },
];

const faqs = [
  {
    q: "Is the logo maker really free?",
    a: "Yes. You get a few free generations every day, and downloading your logo as SVG or PNG is free for personal and commercial use.",
  },
  {
    q: "What file formats do I get?",
    a: "A vector SVG that scales to any size without losing quality (great for printing and signage) and a high-resolution transparent PNG for websites and social media.",
  },
  {
    q: "Can I trademark an AI-generated logo?",
    a: "Rules differ by country, and purely AI-generated artwork may not qualify for copyright or trademark protection everywhere. If you need a fully original, protectable mark, our designers can create one for you.",
  },
  {
    q: "Can LaunchCraft refine my logo?",
    a: "Absolutely. Send us your favourite result and we'll turn it into a polished, one-of-a-kind mark with a full brand identity: colour system, typography, business cards and a social media kit.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "LaunchCraft AI Logo Maker",
    url,
    applicationCategory: "DesignApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    publisher: { "@type": "Organization", name: "LaunchCraft", url: baseUrl },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "AI Logo Maker", item: url },
    ],
  },
];

export default function LogoMakerPage() {
  return (
    <main className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Page Header ────────────────────────────────── */}
      <section className="pt-20 pb-16 px-6 text-center border-b border-hairline">
        <FadeIn>
          <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-4">Free AI Tool</p>
          <h1 className="text-4xl sm:text-5xl italic text-foreground mb-6">Logo Maker</h1>
          <div className="w-12 h-px bg-hairline mx-auto mb-6" />
          <p
            className="text-sm text-muted max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            Describe your business. Our AI sketches the symbol, then we set your name in real type. Vector-ready in
            seconds.
          </p>
        </FadeIn>
      </section>

      <LogoMaker />

      {/* ── How it works ───────────────────────────────── */}
      <section className="py-24 px-6 border-t border-hairline">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-4">How It Works</p>
            <h2 className="text-4xl sm:text-5xl italic text-foreground">Three steps to a logo</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-px bg-hairline border border-hairline">
            {steps.map((s, i) => (
              <FadeIn key={s.step} delay={i * 100} className="bg-background p-8">
                <p className="text-5xl italic text-hairline mb-5 leading-none">{s.step}</p>
                <h3 className="text-lg italic text-foreground mb-3">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed" style={{ fontFamily: "var(--font-secondary)" }}>
                  {s.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-hairline">
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-4">Common Questions</p>
            <h2 className="text-3xl sm:text-4xl italic text-foreground">FAQ</h2>
          </FadeIn>
          <div className="divide-y divide-hairline">
            {faqs.map((faq, i) => (
              <FadeIn key={faq.q} delay={i * 80} className="py-7">
                <h3 className="text-base italic text-foreground mb-3">{faq.q}</h3>
                <p className="text-sm text-muted leading-relaxed" style={{ fontFamily: "var(--font-secondary)" }}>
                  {faq.a}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section className="py-28 px-6 text-center bg-brand-green">
        <FadeIn>
          <p
            className="text-[10px] tracking-[0.35em] uppercase text-background/60 mb-6"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            Beyond the Logo
          </p>
          <h2 className="text-4xl sm:text-5xl italic text-background mb-8 leading-[1.2]">
            Ready for a brand
            <br />
            people remember?
          </h2>
          <div className="w-12 h-px bg-background/30 mx-auto mb-10" />
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-background text-foreground text-[10px] tracking-[0.3em] uppercase hover:bg-brand-orange hover:text-background transition-colors duration-300"
          >
            Start Your Brand Identity
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
