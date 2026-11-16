import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description:
    "LaunchCraft is a boutique digital agency combining 4+ years of web development and AI/ML expertise. 40+ projects delivered across India and the UK.",
  keywords: [
    "about LaunchCraft",
    "web development team",
    "digital agency India",
    "AI web development agency",
    "India web development agency",
  ],
  alternates: {
    canonical: "https://launchcrafts.in/about",
  },
  openGraph: {
    title: "About LaunchCraft — Boutique Digital Agency",
    description:
      "LaunchCraft is a boutique digital agency combining 4+ years of web development and AI/ML expertise. 40+ projects delivered across India and the UK.",
    url: "https://launchcrafts.in/about",
    type: "website",
    images: [{ url: "https://launchcrafts.in/assets/logo.PNG", width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About LaunchCraft — Boutique Digital Agency",
    description: "LaunchCraft — a boutique digital agency with 4+ years of web development and AI/ML expertise.",
    images: ["https://launchcrafts.in/assets/logo.PNG"],
  },
};

const skills = [
  "TypeScript", "Next.js", "React", "Node.js",
  "Python", "TensorFlow", "Machine Learning", "Computer Vision",
  "Tailwind CSS", "Framer Motion", "PostgreSQL", "C# / .NET",
  "OpenAI API", "SEO & Schema", "Vercel / CI-CD", "UI / UX Design",
];

const values = [
  {
    title: "Craft Over Speed",
    description:
      "We'd rather take an extra day to get it right. Every pixel, every line of code is deliberate — because your users will notice.",
  },
  {
    title: "Radical Transparency",
    description:
      "Regular updates, zero surprises. You'll always know the status of your project, what's next, and why decisions are being made.",
  },
  {
    title: "Results-First",
    description:
      "Every design decision is backed by a business reason. We're not building art — we're building tools that grow your revenue.",
  },
];

const timeline = [
  { year: "2021", event: "Started freelancing — first client website delivered." },
  { year: "2022", event: "Expanded into UI/UX design and brand identity work." },
  { year: "2023", event: "Integrated AI automation into client workflows; 25+ projects completed." },
  { year: "2024", event: "Founded LaunchCraft. Grew to serve clients across India and the UK." },
  { year: "2025", event: "40+ projects delivered. Full-service digital agency, fully operational." },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://launchcrafts.in" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://launchcrafts.in/about" },
  ],
};

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ── Page Header ────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-6 text-center border-b border-hairline">
        <FadeIn>
          <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-4">
            Who We Are
          </p>
          <h1 className="text-3xl sm:text-5xl italic text-foreground mb-6">
            Built by developers.<br />Driven by results.
          </h1>
          <div className="w-12 h-px bg-hairline mx-auto mb-6" />
          <p
            className="text-sm text-muted max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            LaunchCraft is a boutique digital agency built by two developers — combining
            web development expertise, AI engineering, and 4+ years of real-world project experience.
          </p>
        </FadeIn>
      </section>

      {/* ── Timeline ───────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-6 border-t border-hairline">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-4">
              The Journey
            </p>
            <h2 className="text-3xl sm:text-4xl italic text-foreground">4 Years in the Making</h2>
          </FadeIn>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <FadeIn key={item.year} delay={i * 80} className="flex gap-6 sm:gap-8 py-6 border-b border-hairline last:border-0">
                <span className="text-lg italic text-brand-green flex-shrink-0 w-12">{item.year}</span>
                <p
                  className="text-sm text-muted leading-relaxed"
                  style={{ fontFamily: "var(--font-secondary)" }}
                >
                  {item.event}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ─────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-6 border-t border-hairline">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-4">
              Technical Stack
            </p>
            <h2 className="text-3xl sm:text-4xl italic text-foreground">Skills &amp; Tools</h2>
          </FadeIn>
          <FadeIn delay={100} className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 border border-hairline text-[10px] tracking-[0.2em] uppercase text-muted hover:border-brand-green hover:text-brand-green transition-colors duration-300"
                style={{ fontFamily: "var(--font-secondary)" }}
              >
                {skill}
              </span>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* ── Values ─────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-6 border-t border-hairline bg-foreground">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-4">
              What We Stand For
            </p>
            <h2 className="text-3xl sm:text-4xl italic text-background">Our Values</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-px bg-[#2a2a2a] border border-[#2a2a2a]">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 120} className="bg-foreground p-6 sm:p-8">
                <h3 className="text-lg italic text-background mb-4">{v.title}</h3>
                <div className="w-6 h-px bg-brand-green mb-4" />
                <p
                  className="text-sm text-muted leading-relaxed"
                  style={{ fontFamily: "var(--font-secondary)" }}
                >
                  {v.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 px-6 border-t border-hairline text-center">
        <FadeIn>
          <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-6">
            Work With Us
          </p>
          <h2 className="text-3xl sm:text-4xl italic text-foreground mb-8">
            Ready to start your project?
          </h2>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-foreground text-background text-[10px] tracking-[0.3em] uppercase hover:bg-brand-green transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </FadeIn>
      </section>

    </main>
  );
}
