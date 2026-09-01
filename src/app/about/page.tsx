import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the founders of LaunchCraft — Madhu Sudhan (full-stack developer) and Durga Jaya Ram (AI developer) — combining 4+ years of web development and AI/ML expertise.",
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

const madhuStats = [
  { label: "Experience", value: "4+ Years" },
  { label: "Projects", value: "40+ Delivered" },
  { label: "Location", value: "India" },
  { label: "Speciality", value: "Web Dev / AI Automation" },
];

const durgaStats = [
  { label: "Background", value: "AI / ML / Full-Stack" },
  { label: "Current", value: "Cognizant (AV Systems)" },
  { label: "Location", value: "Hyderabad, India" },
  { label: "Speciality", value: "Machine Learning / CV" },
];

export default function AboutPage() {
  return (
    <main className="flex flex-col">

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

      {/* ── Founders ───────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-4">
              The Team
            </p>
            <h2 className="text-3xl sm:text-4xl italic text-foreground">Meet the Founders</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline">

            {/* ── Madhu Sudhan ── */}
            <FadeIn from="left" className="bg-background p-6 sm:p-8 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
                  <span className="text-xl italic text-background">MS</span>
                </div>
                <div>
                  <h2 className="text-xl italic text-foreground">Madhu Sudhan</h2>
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase text-brand-green mt-0.5"
                    style={{ fontFamily: "var(--font-secondary)" }}
                  >
                    Founder &amp; Lead Developer
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-0">
                {madhuStats.map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-3 border-b border-hairline">
                    <span
                      className="text-[10px] tracking-[0.2em] uppercase text-muted"
                      style={{ fontFamily: "var(--font-secondary)" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-xs text-foreground"
                      style={{ fontFamily: "var(--font-secondary)" }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <p
                  className="text-sm text-muted leading-relaxed"
                  style={{ fontFamily: "var(--font-secondary)" }}
                >
                  I started coding in 2021 with a single goal: build things that actually work for businesses.
                  Over four years, I&rsquo;ve delivered more than 40 projects — from pediatric healthcare centers
                  in Vijayawada to doctor-led aesthetic clinics in Newcastle, UK.
                </p>
                <p
                  className="text-sm text-muted leading-relaxed"
                  style={{ fontFamily: "var(--font-secondary)" }}
                >
                  LaunchCraft was founded on the belief that small and mid-sized businesses deserve agency-quality
                  digital products — without the agency bureaucracy.
                </p>
              </div>

              <Link
                href="/portfolio"
                className="text-[10px] tracking-[0.25em] uppercase text-brand-orange hover:text-foreground transition-colors duration-300"
                style={{ fontFamily: "var(--font-secondary)" }}
              >
                View Portfolio &rarr;
              </Link>
            </FadeIn>

            {/* ── Durga Jaya Ram ── */}
            <FadeIn delay={150} className="bg-background p-6 sm:p-8 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
                  <span className="text-xl italic text-background">DJ</span>
                </div>
                <div>
                  <h2 className="text-xl italic text-foreground">Durga Jaya Ram</h2>
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase text-brand-green mt-0.5"
                    style={{ fontFamily: "var(--font-secondary)" }}
                  >
                    Co-Founder &amp; AI Developer
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-0">
                {durgaStats.map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-3 border-b border-hairline">
                    <span
                      className="text-[10px] tracking-[0.2em] uppercase text-muted"
                      style={{ fontFamily: "var(--font-secondary)" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-xs text-foreground"
                      style={{ fontFamily: "var(--font-secondary)" }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <p
                  className="text-sm text-muted leading-relaxed"
                  style={{ fontFamily: "var(--font-secondary)" }}
                >
                  AI and software developer with expertise in machine learning, computer vision, and
                  full-stack systems. From building real-time sign language detection on Raspberry Pi
                  to working on autonomous vehicle algorithms at Cognizant, Durga brings deep AI/ML
                  engineering capability to LaunchCraft&rsquo;s client solutions.
                </p>
                <p
                  className="text-sm text-muted leading-relaxed"
                  style={{ fontFamily: "var(--font-secondary)" }}
                >
                  His background in intelligent systems, IoT, and data-driven development gives
                  LaunchCraft an edge in building automation and AI-powered products that actually work.
                </p>
              </div>

              <a
                href="https://linkedin.com/in/durgajayaram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-[0.25em] uppercase text-brand-orange hover:text-foreground transition-colors duration-300"
                style={{ fontFamily: "var(--font-secondary)" }}
              >
                LinkedIn Profile &rarr;
              </a>
            </FadeIn>

          </div>
        </div>
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
