import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, AI automation, and brand identity by LaunchCraft. Custom solutions built for businesses ready to grow.",
};

const services = [
  {
    num: "01",
    title: "Web Development",
    tagline: "Fast. Beautiful. Built to convert.",
    description:
      "We build custom websites and web applications using Next.js and React — the same stack trusted by the world's fastest-growing companies. Every site we deliver is mobile-first, SEO-optimized, and engineered for speed.",
    features: [
      { title: "Custom Next.js / React Websites", desc: "Tailored to your brand, not from a template." },
      { title: "Mobile-First Responsive Design", desc: "Looks and works perfectly on every screen." },
      { title: "SEO & Schema Markup", desc: "Ranked, crawlable, and structured for search engines." },
      { title: "Performance Optimization", desc: "Core Web Vitals tuned for sub-2s load times." },
      { title: "CMS Integration", desc: "Headless CMS setups so you own your content." },
      { title: "E-Commerce Solutions", desc: "Product pages, carts, and checkout flows." },
    ],
    deliverables: ["Responsive Website", "SEO Setup", "Analytics Integration", "3 Rounds of Revisions", "30-Day Post-Launch Support"],
  },
  {
    num: "02",
    title: "AI Automation",
    tagline: "Work smarter. Scale faster.",
    description:
      "We design and deploy custom AI-powered systems that handle the repetitive work — so your team can focus on what actually matters. From intelligent chatbots to complex data pipelines, we build automation that compounds over time.",
    features: [
      { title: "Custom AI Chatbots", desc: "Trained on your business data, deployed on your site." },
      { title: "Workflow Automation", desc: "Connect your tools and eliminate manual steps." },
      { title: "Data Extraction & Processing", desc: "Structured insights from unstructured sources." },
      { title: "API Integrations", desc: "Bridge your existing tools with new AI capabilities." },
      { title: "OpenAI / LangChain Pipelines", desc: "State-of-the-art models, production-ready." },
      { title: "Business Process Optimization", desc: "Audit, redesign, and automate your operations." },
    ],
    deliverables: ["Automation Blueprint", "Custom AI Model / Bot", "Integration Documentation", "Testing & QA", "Handoff Training"],
  },
  {
    num: "03",
    title: "Brand Identity",
    tagline: "Look like you mean it.",
    description:
      "A brand is more than a logo — it's the full system of trust that makes people choose you over a competitor. We design logos, color systems, typography, and guidelines that hold up across every touchpoint.",
    features: [
      { title: "Logo Design", desc: "Distinctive marks built from a clear brand strategy." },
      { title: "Color System", desc: "Primary, secondary, and accessible color palettes." },
      { title: "Typography Selection", desc: "Paired typefaces that match your tone and audience." },
      { title: "Brand Guidelines", desc: "A rulebook your team and vendors can actually use." },
      { title: "Business Card & Stationery", desc: "Print-ready files at any scale." },
      { title: "Social Media Kit", desc: "Profile images, banners, and post templates." },
    ],
    deliverables: ["Logo (All Formats)", "Brand Style Guide", "Color & Type System", "Social Media Kit", "Print-Ready Files"],
  },
];

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Web projects typically take 2–6 weeks depending on scope. Brand identity takes 1–3 weeks. AI automation varies from 1 week to 2 months based on complexity.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We work with clients across India and the UK, with async communication to accommodate different time zones.",
  },
  {
    q: "Can I get a custom package combining multiple services?",
    a: "Absolutely. Most of our clients combine web development with brand identity or AI automation. We build packages around your specific needs.",
  },
  {
    q: "What happens after the project is delivered?",
    a: "Every project includes 30 days of post-launch support. We also offer ongoing retainers for updates, maintenance, and new features.",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex flex-col">

      {/* ── Page Header ────────────────────────────────── */}
      <section className="py-20 px-6 text-center border-b border-hairline">
        <FadeIn>
          <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-4">
            What We Do
          </p>
          <h1 className="text-4xl sm:text-5xl italic text-foreground mb-6">Services</h1>
          <div className="w-12 h-px bg-hairline mx-auto mb-6" />
          <p
            className="text-sm text-muted max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            Three focused services — each built around measurable outcomes for your business.
          </p>
        </FadeIn>
      </section>

      {/* ── Service Sections ───────────────────────────── */}
      {services.map((s, i) => (
        <section
          key={s.num}
          className={`py-20 px-6 border-b border-hairline ${i % 2 === 1 ? "bg-foreground" : ""}`}
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-[1fr_1.4fr] gap-12 items-start">

              <FadeIn from="left">
                <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-3">{s.num}</p>
                <h2 className={`text-3xl sm:text-4xl italic mb-4 ${i % 2 === 1 ? "text-background" : "text-foreground"}`}>
                  {s.title}
                </h2>
                <p
                  className="text-xs tracking-[0.15em] uppercase text-muted mb-6"
                  style={{ fontFamily: "var(--font-secondary)" }}
                >
                  {s.tagline}
                </p>
                <div className={`w-8 h-px mb-6 ${i % 2 === 1 ? "bg-[#2a2a2a]" : "bg-hairline"}`} />
                <p
                  className="text-sm text-muted leading-relaxed mb-8"
                  style={{ fontFamily: "var(--font-secondary)" }}
                >
                  {s.description}
                </p>
                <div>
                  <p
                    className={`text-[10px] tracking-[0.25em] uppercase mb-4 ${i % 2 === 1 ? "text-background" : "text-foreground"}`}
                  >
                    What&rsquo;s Included
                  </p>
                  <ul className="space-y-2">
                    {s.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-center gap-3 text-xs text-muted"
                        style={{ fontFamily: "var(--font-secondary)" }}
                      >
                        <span className="w-4 h-px bg-brand-green flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={150} className={`grid grid-cols-2 gap-px ${i % 2 === 1 ? "bg-[#2a2a2a]" : "bg-hairline"} border ${i % 2 === 1 ? "border-[#2a2a2a]" : "border-hairline"}`}>
                {s.features.map((f) => (
                  <div
                    key={f.title}
                    className={`p-5 ${i % 2 === 1 ? "bg-foreground" : "bg-background"}`}
                  >
                    <p className={`text-xs italic mb-2 ${i % 2 === 1 ? "text-background" : "text-foreground"}`}>
                      {f.title}
                    </p>
                    <p
                      className="text-xs text-muted leading-relaxed"
                      style={{ fontFamily: "var(--font-secondary)" }}
                    >
                      {f.desc}
                    </p>
                  </div>
                ))}
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      {/* ── FAQ ────────────────────────────────────────── */}
      <section className="py-20 px-6 border-b border-hairline">
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-4">
              Common Questions
            </p>
            <h2 className="text-3xl sm:text-4xl italic text-foreground">FAQ</h2>
          </FadeIn>
          <div className="divide-y divide-hairline">
            {faqs.map((faq, i) => (
              <FadeIn key={faq.q} delay={i * 80} className="py-7">
                <p className="text-base italic text-foreground mb-3">{faq.q}</p>
                <p
                  className="text-sm text-muted leading-relaxed"
                  style={{ fontFamily: "var(--font-secondary)" }}
                >
                  {faq.a}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section className="py-24 px-6 text-center">
        <FadeIn>
          <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-6">
            Let&rsquo;s Get Started
          </p>
          <h2 className="text-3xl sm:text-4xl italic text-foreground mb-8">
            Which service fits your needs?
          </h2>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-foreground text-background text-[10px] tracking-[0.3em] uppercase hover:bg-brand-green transition-colors duration-300"
          >
            Discuss Your Project
          </Link>
        </FadeIn>
      </section>

    </main>
  );
}
