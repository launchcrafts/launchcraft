import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/website-redesign-without-losing-seo`;

export const metadata: Metadata = {
  title: "How to Redesign Your Website Without Losing SEO: A 12-Step Checklist",
  description: "A redesign can wipe out years of Google rankings overnight. Follow these 12 steps before, during and after launch to keep your traffic and grow it.",
  keywords: [
    "website redesign seo",
    "website migration checklist",
    "redesign without losing rankings",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "How to Redesign Your Website Without Losing SEO: A 12-Step Checklist | LaunchCraft",
    description: "A redesign can wipe out years of Google rankings overnight. Follow these 12 steps before, during and after launch to keep your traffic and grow it.",
    url,
    type: "article",
    publishedTime: "2026-11-15",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Redesign Your Website Without Losing SEO: A 12-Step Checklist",
    description: "A redesign can wipe out years of Google rankings overnight. Follow these 12 steps before, during and after launch to keep your traffic and grow it.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "How to Redesign Your Website Without Losing SEO: A 12-Step Checklist", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Redesign Your Website Without Losing SEO: A 12-Step Checklist",
  description: "A redesign can wipe out years of Google rankings overnight. Follow these 12 steps before, during and after launch to keep your traffic and grow it.",
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
            {["Website Redesign Seo", "Website Migration Checklist", "Redesign Without Losing Rankings"].map((tag) => (
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
            How to Redesign Your Website Without Losing SEO: A 12-Step Checklist
          </h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
            <p className="text-sm text-muted leading-relaxed" style={sans}>A new website should bring more enquiries, not fewer. Yet many redesigns lose a big share of search traffic in the first weeks, because old URLs break, content gets cut and Google has to relearn the site. The fix is a simple process. Follow these 12 steps and your rankings carry over to the new design.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Before you redesign</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Benchmark your traffic. Export the last 12 months of clicks, top pages and top queries from Google Search Console and your analytics tool. You need a "before" picture to compare against.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Crawl the old site. Use a crawler such as Screaming Frog to list every URL, title, description and heading. This is your inventory.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Find your money pages. Mark the pages that bring the most traffic, links and leads. These must keep their content and rankings.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Decide what happens to every URL. Keep, merge, or remove. Every removed or renamed page needs a new home.</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">During the build</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Keep URLs the same where you can. The safest migration is one where the best pages keep their exact address.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Write a redirect map. In a spreadsheet, list each old URL and the closest new URL. Use permanent (301) redirects. Do not send everything to the homepage.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Carry over the content that ranks. A cleaner design is fine; deleting the paragraphs Google ranked you for is not. Improve them, do not strip them.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Keep the on-page SEO. Titles, descriptions, headings, alt text, internal links and schema should be at least as good as before.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Block the staging site. Password-protect the test version so Google never indexes a duplicate of your new site.</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">At launch and after</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Launch on a quiet day. Then test redirects straight away: every old URL should land on the right new page in one hop.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Tell Google. Submit the new XML sitemap in Search Console and use the URL inspection tool on your key pages. If the domain changed, use the Change of Address tool.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Watch for 4–6 weeks. Check Search Console daily for 404 errors and drops in clicks. Small dips are normal while Google re-crawls; big drops on key pages usually mean a missing redirect.</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Common redesign mistakes</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Launching without any redirects "because the old site was bad anyway"</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Moving service content into tabs, sliders or images Google cannot read well</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Swapping keyword-rich page titles for vague ones like "Welcome"</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Forgetting the noindex tag from the staging site on the live site</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Changing domain, design and content all at once, so nobody knows what caused a drop</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">FAQs</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Will my rankings drop after a redesign? A small, short dip is common while Google re-crawls. With redirects and the same content, most sites recover within a few weeks and then grow.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>How long should I keep redirects? At least a year, and ideally for good. They cost almost nothing to keep.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Is it better to redesign or start a new domain? Keep your domain unless there is a strong brand reason. A domain change adds risk on top of the redesign.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Next step</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Planning a redesign? We handle the design, the Next.js build and the SEO migration together. Start a project.</p>
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
