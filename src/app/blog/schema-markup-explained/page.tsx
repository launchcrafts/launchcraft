import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/schema-markup-explained`;

export const metadata: Metadata = {
  title: "Schema Markup Explained for Small Businesses (2026 Update)",
  description: "Schema markup tells Google exactly who you are and what each page is about. Here is what still works in 2026, what changed, and a copy-ready example.",
  keywords: [
    "schema markup",
    "local business schema",
    "json-ld",
    "structured data for seo",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Schema Markup Explained for Small Businesses (2026 Update) | LaunchCraft",
    description: "Schema markup tells Google exactly who you are and what each page is about. Here is what still works in 2026, what changed, and a copy-ready example.",
    url,
    type: "article",
    publishedTime: "2026-11-15",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schema Markup Explained for Small Businesses (2026 Update)",
    description: "Schema markup tells Google exactly who you are and what each page is about. Here is what still works in 2026, what changed, and a copy-ready example.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "Schema Markup Explained for Small Businesses (2026 Update)", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Schema Markup Explained for Small Businesses (2026 Update)",
  description: "Schema markup tells Google exactly who you are and what each page is about. Here is what still works in 2026, what changed, and a copy-ready example.",
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
            {["Schema Markup", "Local Business Schema", "Json-Ld", "Structured Data For Seo"].map((tag) => (
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
            Schema Markup Explained for Small Businesses (2026 Update)
          </h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
            <p className="text-sm text-muted leading-relaxed" style={sans}>Schema markup is a small block of code that describes your page in a language search engines understand: this is a business, here is its address, these are its opening hours, this is an article and here is its author. Visitors never see it, but it helps Google and other systems read your site correctly. Some types can also unlock richer listings in search.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">What changed recently</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Google has been retiring some rich results. HowTo rich results went in 2023, and as of 7 May 2026 FAQ rich results no longer appear in Google Search (Google’s FAQPage documentation). The FAQPage type is still valid, and leaving it on your pages does no harm, but it will not create FAQ dropdowns in Google any more. Google also says there is no special schema you need for its AI features (TechWyse).</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>So the goal of schema in 2026 is accuracy and clarity, not tricks for extra space in the results.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">The schema types most small businesses need</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Use the most specific subtype you can. Schema.org has types such as Dentist, MedicalClinic, VeterinaryCare and Restaurant.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">A copy-ready LocalBusiness example</h3>

            <pre className="text-sm text-muted leading-relaxed bg-black/5 p-4 overflow-x-auto rounded" style={sans}>{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Your Business Name",
  "url": "https://www.yourbusiness.in",
  "telephone": "+91-00000-00000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Street and building",
    "addressLocality": "Vijayawada",
    "addressRegion": "Andhra Pradesh",
    "postalCode": "520001",
    "addressCountry": "IN"
  },
  "openingHours": "Mo-Sa 09:00-19:00",
  "sameAs": ["https://www.instagram.com/yourbusiness"]
}`}</pre>

            <p className="text-sm text-muted leading-relaxed" style={sans}>{`Place it inside a <script type="application/ld+json"> tag in the page. In Next.js, add it in the page or layout component. Replace every value with your real details.`}</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Rules to follow</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Only mark up what is visible on the page. Hidden or invented details can lead to a manual action.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Keep details consistent with your Google Business Profile and directories.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Do not fake reviews or ratings in your markup. Review schema must reflect genuine reviews shown on the page.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Update it when things change, such as new hours, a new phone number or a new address.</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">How to test your schema</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Run the page through Google’s Rich Results Test to see which rich results it is eligible for.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Use the Schema Markup Validator (validator.schema.org) to check the code itself.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Watch the Enhancements reports in Search Console for errors after launch.</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">FAQs</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Does schema markup improve rankings? Not directly. It helps search engines understand your pages and can make listings richer, which can lift clicks.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Should I remove my FAQ schema? You do not have to. It is still valid and harmless, but do not expect FAQ dropdowns in Google.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Do I need a developer to add schema? Basic schema can be pasted into most sites. On a Next.js site it is best added in code so it updates with your content.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Next step</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Want schema set up correctly across your whole site? Contact LaunchCraft.</p>
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
