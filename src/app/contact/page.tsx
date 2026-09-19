import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with LaunchCraft to discuss your web development, AI automation, or brand identity project. Response within 24 hours. Serving India and the UK.",
  keywords: [
    "contact LaunchCraft",
    "hire web developer",
    "web development quote",
    "AI automation inquiry",
    "brand identity project",
    "LaunchCraft contact",
  ],
  alternates: {
    canonical: "https://launchcrafts.in/contact",
  },
  openGraph: {
    title: "Contact LaunchCraft — Start Your Project",
    description:
      "Get in touch to discuss your web development, AI automation, or brand identity project. Response within 24 hours.",
    url: "https://launchcrafts.in/contact",
    type: "website",
  },
};

const details = [
  { label: "Email", value: "launchcrafts.in@gmail.com", href: "mailto:launchcrafts.in@gmail.com" },
  { label: "Instagram", value: "@launchcrafts.in", href: "https://www.instagram.com/launchcrafts.in/" },
  { label: "Response Time", value: "Within 24 hours", href: null },
  { label: "Location", value: "India (Serving Globally)", href: null },
  { label: "Availability", value: "Open to New Projects", href: null },
];

const services = ["Web Development", "AI Automation", "Brand Identity", "Full Package"];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://launchcrafts.in" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://launchcrafts.in/contact" },
  ],
};

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ── Page Header ────────────────────────────────── */}
      <section className="py-20 px-6 text-center border-b border-hairline">
        <FadeIn>
          <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-4">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl italic text-foreground mb-6">Contact</h1>
          <div className="w-12 h-px bg-hairline mx-auto mb-6" />
          <p
            className="text-sm text-muted max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            Tell us about your project. We&rsquo;ll get back to you within 24 hours with a clear path forward.
          </p>
        </FadeIn>
      </section>

      {/* ── Form + Info ────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-[1.5fr_1fr] gap-16">

          <FadeIn from="left">
            <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-8">
              Project Inquiry
            </p>
            <ContactForm />
          </FadeIn>

          <FadeIn delay={150} className="flex flex-col gap-10">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-8">
                Contact Details
              </p>
              <div className="space-y-0">
                {details.map((d) => (
                  <div key={d.label} className="flex justify-between items-center py-5 border-b border-hairline">
                    <span
                      className="text-[10px] tracking-[0.2em] uppercase text-muted"
                      style={{ fontFamily: "var(--font-secondary)" }}
                    >
                      {d.label}
                    </span>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="text-xs text-brand-orange hover:text-foreground transition-colors duration-300"
                        style={{ fontFamily: "var(--font-secondary)" }}
                      >
                        {d.value}
                      </a>
                    ) : (
                      <span
                        className="text-xs text-foreground"
                        style={{ fontFamily: "var(--font-secondary)" }}
                      >
                        {d.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-6">
                Services We Offer
              </p>
              <div className="flex flex-col gap-0">
                {services.map((s) => (
                  <div
                    key={s}
                    className="flex items-center gap-3 text-xs text-muted py-3 border-b border-hairline last:border-0"
                    style={{ fontFamily: "var(--font-secondary)" }}
                  >
                    <span className="w-4 h-px bg-brand-green flex-shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 border border-hairline">
              <p className="text-[10px] tracking-[0.25em] uppercase text-foreground mb-3">
                Not sure where to start?
              </p>
              <p
                className="text-xs text-muted leading-relaxed"
                style={{ fontFamily: "var(--font-secondary)" }}
              >
                Just describe your business and what you&rsquo;re trying to achieve. We&rsquo;ll figure out the best approach together.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Credibility strip ──────────────────────────── */}
      <section className="border-t border-hairline py-12 px-6 bg-foreground">
        <FadeIn className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { num: "4+", label: "Years of Experience" },
            { num: "40+", label: "Projects Delivered" },
            { num: "24h", label: "Response Time" },
            { num: "5★", label: "Client Rating" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <span className="text-3xl sm:text-4xl italic text-background">{s.num}</span>
              <span
                className="text-[10px] tracking-[0.2em] uppercase text-muted"
                style={{ fontFamily: "var(--font-secondary)" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </FadeIn>
      </section>

    </main>
  );
}
