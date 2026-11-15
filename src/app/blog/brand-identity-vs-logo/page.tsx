import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/brand-identity-vs-logo`;

export const metadata: Metadata = {
  title: "Brand Identity vs Logo: What Your Business Actually Needs",
  description: "A logo is one piece. A brand identity is the whole system that makes you instantly recognisable. Here is the difference and what to invest in first.",
  keywords: [
    "brand identity vs logo",
    "what is brand identity",
    "brand identity design",
    "logo design for small business",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Brand Identity vs Logo: What Your Business Actually Needs | LaunchCraft",
    description: "A logo is one piece. A brand identity is the whole system that makes you instantly recognisable. Here is the difference and what to invest in first.",
    url,
    type: "article",
    publishedTime: "2026-11-15",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Identity vs Logo: What Your Business Actually Needs",
    description: "A logo is one piece. A brand identity is the whole system that makes you instantly recognisable. Here is the difference and what to invest in first.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "Brand Identity vs Logo: What Your Business Actually Needs", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Brand Identity vs Logo: What Your Business Actually Needs",
  description: "A logo is one piece. A brand identity is the whole system that makes you instantly recognisable. Here is the difference and what to invest in first.",
  datePublished: "2026-11-15",
  dateModified: "2026-11-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": url },
  author: { "@type": "Organization", name: "LaunchCraft", url: baseUrl },
  publisher: {
    "@type": "Organization",
    name: "LaunchCraft",
    url: baseUrl,
    logo: { "@type": "ImageObject", url: `${baseUrl}/assets/logo.PNG` },
  },
  inLanguage: "en",
};

const sans = { fontFamily: "var(--font-secondary)" } as const;

export default function BlogPost() {
  return (
    <main className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      {/* Header */}
      <section className="py-20 px-6 text-center border-b border-hairline">
        <FadeIn>
          <Link
            href="/blog"
            className="inline-block text-[10px] tracking-[0.2em] uppercase text-muted hover:text-brand-orange transition-colors duration-300 mb-8"
            style={sans}
          >
            &larr; Blog
          </Link>
          <div className="flex items-center justify-center gap-3 flex-wrap mb-4">
            <span className="text-[10px] tracking-[0.2em] uppercase text-muted" style={sans}>
              15 November 2026
            </span>
            <span className="text-hairline">&middot;</span>
            {["Brand Identity Vs Logo", "What Is Brand Identity", "Brand Identity Design", "Logo Design For Small Business"].map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 border border-hairline text-muted"
                style={sans}
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl italic text-foreground max-w-3xl mx-auto leading-[1.2]">
            Brand Identity vs Logo: What Your Business Actually Needs
          </h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
            <p className="text-sm text-muted leading-relaxed" style={sans}>A logo is the mark that sits on your signboard. A brand identity is everything that makes people recognise you even when the logo is not there: your colours, fonts, photos, tone of voice and the way your website and posts look together. Many businesses pay for a logo and then wonder why their brand still looks inconsistent. Here is the difference, and what you actually need at each stage.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Logo vs brand identity vs brand</h3>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">What a complete brand identity includes</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Logo suite: main logo, stacked and horizontal versions, an icon for small spaces, and black and white versions</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Colour palette: one or two main colours, supporting colours and clear rules on where each is used</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Typography: a heading font and a body font that work on screen and in print</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Imagery style: what your photos look like, from lighting to the kind of people shown</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Graphic elements: patterns, icons and shapes that tie everything together</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Tone of voice: how you write, from formal to friendly, with a few example phrases</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Brand guidelines: a short document so your team, printer and agency all use the brand the same way</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">What you need at each stage</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Just starting: a clean logo, two colours and two fonts. Keep it simple and consistent.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Growing (hiring, advertising, opening a second branch): a full identity with guidelines, so every new person and supplier gets it right.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Established, but looks dated: a refresh that keeps what people recognise and modernises the rest. A full rebrand only if your business has truly changed.</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Signs your brand identity needs work</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Your website, Instagram and signboard all look like different businesses</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Staff make posters in whatever colours and fonts they like</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Your logo becomes unreadable when it is small, such as on a phone screen</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Customers struggle to remember your name, or confuse you with a competitor</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Can you start with an AI logo maker?</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Yes, as a starting point. Our free AI logo maker can help you explore directions and download an SVG in minutes. For a business you plan to grow, have a designer refine the chosen idea into a full identity, and check that the name and mark are not too close to an existing brand before you print anything.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">FAQs</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>How long does a brand identity project take? A focused project often takes 2–4 weeks, including research, concepts and revisions. [Adjust to your process.]</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Should my logo explain what I do? Not necessarily. Many strong logos are simple. Your name, tagline and website explain what you do.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>How many colours should a brand have? Usually one or two main colours and a few supporting shades. More than that gets hard to keep consistent.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Next step</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Ready for a brand that looks the same everywhere? See our brand identity work or start a branding project.</p>
        </article>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-hairline text-center">
        <FadeIn>
          <Link
            href="/blog"
            className="inline-block px-8 py-3 border border-hairline text-[10px] tracking-[0.2em] uppercase text-foreground hover:border-brand-green hover:text-brand-green transition-colors duration-300 mr-4"
            style={sans}
          >
            More Articles
          </Link>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-foreground text-background text-[10px] tracking-[0.2em] uppercase hover:bg-brand-green transition-colors duration-300"
            style={sans}
          >
            Start a Project
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
