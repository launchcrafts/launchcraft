import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/website-cost-india`;

export const metadata: Metadata = {
  title: "How Much Does a Business Website Cost in India? What Really Drives the Price",
  description: "Why one website costs a few thousand rupees and another costs lakhs: the 8 factors that set the price, the running costs people forget, and how to budget well.",
  keywords: [
    "website cost in india",
    "website development cost",
    "website price for small business",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "How Much Does a Business Website Cost in India? What Really Drives the Price | LaunchCraft",
    description: "Why one website costs a few thousand rupees and another costs lakhs: the 8 factors that set the price, the running costs people forget, and how to budget well.",
    url,
    type: "article",
    publishedTime: "2026-11-15",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Much Does a Business Website Cost in India? What Really Drives the Price",
    description: "Why one website costs a few thousand rupees and another costs lakhs: the 8 factors that set the price, the running costs people forget, and how to budget well.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "How Much Does a Business Website Cost in India? What Really Drives the Price", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Does a Business Website Cost in India? What Really Drives the Price",
  description: "Why one website costs a few thousand rupees and another costs lakhs: the 8 factors that set the price, the running costs people forget, and how to budget well.",
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
            {["Website Cost In India", "Website Development Cost", "Website Price For Small Business"].map((tag) => (
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
            How Much Does a Business Website Cost in India? What Really Drives the Price
          </h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
            <p className="text-sm text-muted leading-relaxed" style={sans}>A business website in India can cost anything from a few thousand rupees to several lakhs. The gap is not random. It comes down to eight factors, and once you know them you can compare quotes properly and avoid paying twice.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">The 8 factors that set the price</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Number of pages and templates. A 5-page brochure site is quicker than a 40-page site with service, location and blog templates.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Custom design or a template. A ready-made theme is cheap but looks like thousands of other sites. Custom design takes research, wireframes and revisions.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">How it is built. A drag-and-drop builder is fast to launch. A custom Next.js build costs more up front but loads faster, ranks better and does not need plugin updates.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Content. Writing, photography and video are often the biggest hidden cost. If you supply finished copy and photos, the price drops.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Features. Booking systems, payments, logins, multiple languages, calculators and CRM connections each add work.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Integrations and automation. Connecting forms to WhatsApp, Google Sheets or a CRM, or adding an AI chatbot, adds setup and testing time.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">SEO setup. Basic SEO (titles, sitemap, speed) should be included. Keyword research, schema and content planning are extra but pay off.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Who builds it. A freelancer, a small studio and a large agency price very differently, and include different levels of strategy, testing and support.</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Example package table</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Prices for services are usually quoted before 18% GST, so check whether a quote includes it.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">The running costs people forget</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Domain name: renewed every year</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Hosting: monthly or yearly, depending on traffic and setup</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Business email: per user, per month</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Maintenance: updates, backups, security fixes and small edits</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Content and SEO: new pages and posts keep traffic growing</span>
                </li>
            </ul>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Ask every agency for a first-year total, not just the build price.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Red flags in a cheap quote</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">The domain or hosting is registered in the agency’s name, not yours</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">No mention of mobile design, speed or SEO basics</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">No written scope or number of revision rounds</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">You cannot edit the site yourself without paying them each time</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">How to get an accurate quote</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Send a short brief with: your goal (calls, bookings, sales), the pages you need, two or three sites you like, the features you need and your deadline. Clear briefs get tighter quotes. [Link to a downloadable brief template if you create one.]</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">FAQs</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Is a cheap website a bad idea? Not always. A simple, fast site is better than none. The risk is a site that is slow, hard to update or owned by someone else.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>How long does a website take to build? A small site can take 2–4 weeks. Custom builds with features often take 6–12 weeks, depending on how quickly content and feedback arrive.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Should I pay the full amount up front? Most agencies work in stages, such as an advance, a payment on design approval and the balance at launch.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Next step</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Want a clear, itemised quote? Tell us about your project and we will reply with a fixed scope and price.</p>
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
