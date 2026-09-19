import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LoadingScreen from "@/components/LoadingScreen";
import FadeIn from "@/components/FadeIn";
import { projectsByDivision } from "@/data/projects";

const baseUrl = "https://launchcrafts.in";

export const metadata: Metadata = {
  title: "LaunchCraft — Web Development, AI Automation & Brand Identity",
  description:
    "LaunchCraft delivers custom web development, AI automation, and brand identity services. 4+ years of experience, 40+ projects delivered across India and the UK.",
  keywords: [
    "web development company",
    "AI automation services",
    "brand identity design",
    "Next.js developer",
    "React developer India",
    "custom website development",
    "digital agency",
    "LaunchCraft",
  ],
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "LaunchCraft — Web Development, AI Automation & Brand Identity",
    description:
      "Custom web development, AI automation, and brand identity services. 40+ projects delivered across India and the UK.",
    url: baseUrl,
    type: "website",
  },
};

const marqueeItems = [
  "Web Development",
  "AI Automation",
  "Brand Identity",
  "40+ Projects Built",
  "4+ Years Experience",
  "India & UK",
  "Next.js",
  "React",
  "Tailwind CSS",
];

const services = [
  {
    symbol: "\u25C8",
    title: "Web Development",
    description:
      "Custom Next.js & React websites — mobile-first, SEO-optimized, and built to convert.",
    features: ["Next.js / React", "Mobile-First", "SEO Optimized", "Performance-First"],
  },
  {
    symbol: "\u25C9",
    title: "AI Automation",
    description:
      "Intelligent chatbots, workflows, and data pipelines that scale your operations automatically.",
    features: ["Custom Chatbots", "Workflow Automation", "API Integrations", "Data Processing"],
  },
  {
    symbol: "\u25CE",
    title: "Brand Identity",
    description:
      "Strategic logos, color systems, and brand guidelines that make you unforgettable.",
    features: ["Logo Design", "Brand Guidelines", "Color Systems", "Typography"],
  },
];

const process = [
  { step: "01", title: "Discover", description: "Deep-dive into your brand, goals, and audience." },
  { step: "02", title: "Design", description: "Wireframes, visual direction, and a complete design system." },
  { step: "03", title: "Build", description: "Clean code with regular previews — no surprises." },
  { step: "04", title: "Launch", description: "Deploy, test, go live — then we stay on hand for support." },
];

// Show international projects first, then fill with other official domains
const galleryProjects = [
  ...projectsByDivision.international,
  ...projectsByDivision.otherOfficial,
].slice(0, 9);

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LaunchCraft",
  url: baseUrl,
  logo: `${baseUrl}/assets/logo.PNG`,
  description:
    "LaunchCraft is a boutique digital agency delivering custom web development, AI automation, and brand identity services across India and the UK. Founded in 2021, with 4+ years of experience and 40+ projects delivered.",
  foundingDate: "2021",
  founders: [
    {
      "@type": "Person",
      name: "Madhu Sudhan",
      jobTitle: "Founder & Lead Developer",
    },
    {
      "@type": "Person",
      name: "Durga Jaya Ram",
      jobTitle: "Co-Founder & AI Developer",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@launchcrafts.in",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi", "Telugu"],
  },
  sameAs: [
    "https://www.instagram.com/launchcrafts.in/",
  ],
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  knowsAbout: [
    "Web Development",
    "AI Automation",
    "Brand Identity",
    "Next.js",
    "React",
    "SEO",
    "Logo Design",
    "Custom Chatbots",
    "Tailwind CSS",
  ],
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 2,
    maxValue: 10,
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "LaunchCraft",
  url: baseUrl,
  description:
    "LaunchCraft delivers custom web development, AI automation, and brand identity services across India and the UK.",
  publisher: {
    "@type": "Organization",
    name: "LaunchCraft",
    url: baseUrl,
  },
};

export default function Home() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      <LoadingScreen />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-85px)] px-6 text-center">
        <div className="max-w-2xl w-full">
          <p
            className="text-[10px] tracking-[0.4em] uppercase text-brand-green mb-8"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            Est. 2021 &nbsp;&middot;&nbsp; 4+ Years &nbsp;&middot;&nbsp; 40+ Projects
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.15] text-foreground italic mb-6">
            We craft digital<br />experiences that last.
          </h1>
          <p
            className="text-sm text-muted max-w-md mx-auto leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            Web development, AI automation, and brand identity — for businesses ready to lead their market.
          </p>
          <div className="w-12 h-px bg-hairline mx-auto mb-10" />
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/portfolio"
              className="px-7 py-3 bg-foreground text-background text-[10px] tracking-[0.25em] uppercase hover:bg-brand-green transition-colors duration-300"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3 border border-foreground text-foreground text-[10px] tracking-[0.25em] uppercase hover:border-brand-orange hover:text-brand-orange transition-colors duration-300"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      {/* ── Marquee Ticker ───────────────────────────────── */}
      <div className="border-y border-hairline overflow-hidden bg-foreground py-5 select-none">
        <div
          className="flex gap-0 whitespace-nowrap"
          style={{ animation: "marqueeScroll 30s linear infinite" }}
        >
          {doubled.map((item, i) => (
            <span
              key={i}
              className="text-[10px] tracking-[0.25em] uppercase text-muted inline-flex items-center gap-6"
              style={{ fontFamily: "var(--font-secondary)" }}
            >
              <span className="text-brand-green text-base leading-none">&middot;</span>
              &nbsp;&nbsp;{item}&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── Work Gallery ─────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-3">
                Selected Projects
              </p>
              <h2 className="text-4xl sm:text-5xl italic text-foreground">Our Work</h2>
            </div>
            <Link
              href="/portfolio"
              className="hidden sm:inline text-[10px] tracking-[0.25em] uppercase text-muted hover:text-brand-orange transition-colors duration-300 mb-2"
              style={{ fontFamily: "var(--font-secondary)" }}
            >
              See All 40+ &rarr;
            </Link>
          </FadeIn>

          {/* 3×3 grid — aspect-[16/10] shows the full top of each screenshot */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {galleryProjects.map((project, i) => (
              <FadeIn key={project.id} delay={i * 75}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="relative overflow-hidden aspect-[16/10] bg-foreground">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} — website designed by LaunchCraft`}
                        fill
                        sizes="(max-width: 640px) 50vw, 33vw"
                        className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-700"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs italic text-muted text-center px-3" style={{ fontFamily: "var(--font-secondary)" }}>
                          {project.title}
                        </span>
                      </div>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-400" />
                    {/* Hover label */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span
                        className="text-[10px] tracking-[0.2em] uppercase text-background"
                        style={{ fontFamily: "var(--font-secondary)" }}
                      >
                        {project.title} &rarr;
                      </span>
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-10 sm:hidden">
            <Link
              href="/portfolio"
              className="text-[10px] tracking-[0.25em] uppercase text-brand-orange"
              style={{ fontFamily: "var(--font-secondary)" }}
            >
              See All 40+ Projects &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-hairline bg-foreground">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-4">
              What We Do
            </p>
            <h2 className="text-4xl sm:text-5xl italic text-background">Services</h2>
          </FadeIn>

          <div className="grid sm:grid-cols-3 gap-px bg-[#2a2a2a] border border-[#2a2a2a]">
            {services.map((s, i) => (
              <FadeIn
                key={s.title}
                delay={i * 120}
                className="bg-foreground p-8 flex flex-col gap-6"
              >
                <span className="text-2xl text-brand-orange">{s.symbol}</span>
                <div className="flex-1">
                  <h3 className="text-xl italic text-background mb-3">{s.title}</h3>
                  <p
                    className="text-sm text-muted leading-relaxed"
                    style={{ fontFamily: "var(--font-secondary)" }}
                  >
                    {s.description}
                  </p>
                </div>
                <ul className="space-y-2 pt-4 border-t border-[#2a2a2a]">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase text-muted"
                      style={{ fontFamily: "var(--font-secondary)" }}
                    >
                      <span className="w-3 h-px bg-brand-green flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-10">
            <Link
              href="/services"
              className="text-[10px] tracking-[0.25em] uppercase text-brand-orange hover:text-background transition-colors duration-300"
              style={{ fontFamily: "var(--font-secondary)" }}
            >
              Explore All Services &rarr;
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-hairline">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-4">
              How We Work
            </p>
            <h2 className="text-4xl sm:text-5xl italic text-foreground">Our Process</h2>
          </FadeIn>

          <div className="grid sm:grid-cols-4 gap-px bg-hairline border border-hairline">
            {process.map((p, i) => (
              <FadeIn
                key={p.step}
                delay={i * 100}
                className="bg-background p-8"
              >
                <p className="text-5xl italic text-hairline mb-5 leading-none">{p.step}</p>
                <h3 className="text-lg italic text-foreground mb-3">{p.title}</h3>
                <p
                  className="text-sm text-muted leading-relaxed"
                  style={{ fontFamily: "var(--font-secondary)" }}
                >
                  {p.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest Articles ───────────────────────────────── */}
      <section className="py-24 px-6 border-t border-hairline">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-3">
                Insights
              </p>
              <h2 className="text-4xl sm:text-5xl italic text-foreground">Latest Articles</h2>
            </div>
            <Link
              href="/articles"
              className="hidden sm:inline text-[10px] tracking-[0.25em] uppercase text-muted hover:text-brand-orange transition-colors duration-300 mb-2"
              style={{ fontFamily: "var(--font-secondary)" }}
            >
              View All &rarr;
            </Link>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-px bg-hairline border border-hairline">
            {[
              { title: "Best Websites in the World 2026", slug: "best-websites-in-the-world", tag: "Design" },
              { title: "Next.js vs WordPress", slug: "nextjs-vs-wordpress-for-business-websites", tag: "Web Dev" },
              { title: "7 Local SEO Tips for India", slug: "local-seo-tips-for-small-businesses-india", tag: "SEO" },
            ].map((a, i) => (
              <FadeIn key={a.slug} delay={i * 100} className="bg-background p-8">
                <span
                  className="text-[10px] tracking-[0.15em] uppercase text-brand-green mb-4 block"
                  style={{ fontFamily: "var(--font-secondary)" }}
                >
                  {a.tag}
                </span>
                <Link
                  href={`/articles/${a.slug}`}
                  className="group"
                >
                  <h3 className="text-lg italic text-foreground group-hover:text-brand-green transition-colors duration-300 mb-4">
                    {a.title}
                  </h3>
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase text-muted group-hover:text-brand-orange transition-colors duration-300"
                    style={{ fontFamily: "var(--font-secondary)" }}
                  >
                    Read &rarr;
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
          <div className="text-center mt-10 sm:hidden">
            <Link
              href="/articles"
              className="text-[10px] tracking-[0.25em] uppercase text-brand-orange"
              style={{ fontFamily: "var(--font-secondary)" }}
            >
              View All Articles &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-28 px-6 border-t border-hairline text-center bg-brand-green">
        <FadeIn>
          <p
            className="text-[10px] tracking-[0.35em] uppercase text-background/60 mb-6"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            Ready to Launch?
          </p>
          <h2 className="text-4xl sm:text-5xl italic text-background mb-8 leading-[1.2]">
            Let&rsquo;s build something<br />remarkable together.
          </h2>
          <div className="w-12 h-px bg-background/30 mx-auto mb-10" />
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-background text-foreground text-[10px] tracking-[0.3em] uppercase hover:bg-brand-orange hover:text-background transition-colors duration-300"
          >
            Start Your Project
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
