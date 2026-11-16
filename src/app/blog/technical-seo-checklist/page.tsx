import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/technical-seo-checklist`;

export const metadata: Metadata = {
  title: "Technical SEO Checklist: 20 Checks for Small Business Websites",
  description: "Great content can't rank if Google can't crawl, render or index it. Run these 20 technical SEO checks every quarter to keep your site visible.",
  keywords: ["technical seo checklist", "technical seo audit", "indexing issues", "crawlability"],
  alternates: { canonical: url },
  openGraph: {
    title: "Technical SEO Checklist: 20 Checks for Small Business Websites | LaunchCraft",
    description: "Great content can't rank if Google can't crawl, render or index it. Run these 20 technical SEO checks every quarter to keep your site visible.",
    url,
    type: "article",
    publishedTime: "2026-11-17",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical SEO Checklist: 20 Checks for Small Business Websites",
    description: "Great content can't rank if Google can't crawl, render or index it. Run these 20 technical SEO checks every quarter to keep your site visible.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "Technical SEO Checklist: 20 Checks for Small Business Websites", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Technical SEO Checklist: 20 Checks for Small Business Websites",
  description: "Great content can't rank if Google can't crawl, render or index it. Run these 20 technical SEO checks every quarter to keep your site visible.",
  datePublished: "2026-11-17",
  dateModified: "2026-11-17",
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
          <Link href="/blog" className="inline-block text-[10px] tracking-[0.2em] uppercase text-muted hover:text-brand-orange transition-colors duration-300 mb-8" style={sans}>
            &larr; Blog
          </Link>
          <div className="flex items-center justify-center gap-3 flex-wrap mb-4">
            <span className="text-[10px] tracking-[0.2em] uppercase text-muted" style={sans}>17 November 2026</span>
            <span className="text-hairline">&middot;</span>
            {["Technical SEO", "Website Audit"].map((tag) => (
              <span key={tag} className="text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 border border-hairline text-muted" style={sans}>{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl italic text-foreground max-w-3xl mx-auto leading-[1.2]">Technical SEO Checklist: 20 Checks for Small Business Websites</h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
          <p className="text-sm text-muted leading-relaxed" style={sans}>You can write excellent content and still rank on page four if Google cannot crawl your pages, render your JavaScript or confirm that your site is secure. Technical SEO is the foundation. Without it, every piece of content you publish is fighting with one hand tied behind its back. This checklist covers 20 checks grouped into five areas. Run through it every quarter or after any major site change.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>For a broader view of on-page optimisation, read our <Link href="/blog/nextjs-seo-guide" className="text-brand-green hover:underline">Next.js SEO guide</Link>. For the speed checks in this list, see the detail in <Link href="/blog/core-web-vitals-explained" className="text-brand-green hover:underline">Core Web Vitals explained</Link>.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Section 1: Crawlability (checks 1–5)</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Googlebot must be able to reach and follow your pages. If anything blocks it, your content will not be indexed no matter how good it is.</p>

          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Check 1 — robots.txt is correct.</strong> Visit yourdomain.com/robots.txt. Confirm it does not accidentally disallow important directories like /blog/ or /services/. A single misplaced Disallow line can wipe an entire section from Google&apos;s index.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Check 2 — sitemap.xml exists and is submitted.</strong> Generate a sitemap that lists every public URL you want indexed. Submit it in Google Search Console under Sitemaps. For Next.js sites, the sitemap can be generated automatically at build time.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Check 3 — no broken internal links.</strong> Use a tool like Screaming Frog, Ahrefs or the free Check My Links Chrome extension. Every 404 error wastes crawl budget and frustrates visitors.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Check 4 — redirect chains are short.</strong> A redirect chain of three or more hops loses PageRank at each step. If you moved pages, make sure old URLs redirect directly to the final destination with a single 301.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Check 5 — crawl budget is not being wasted.</strong> Block session IDs, search result pages and other infinite-URL patterns from being crawled. Use Google Search Console&apos;s crawl stats report to spot anomalies.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Section 2: Indexing (checks 6–10)</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Crawling and indexing are different. Google may crawl a page but choose not to index it. These checks ensure your important pages make it into the index.</p>

          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Check 6 — no unintended noindex tags.</strong> Search your codebase for noindex. Check that staging-environment settings were not shipped to production. Use the URL Inspection tool in Search Console to verify individual pages.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Check 7 — canonical tags are correct.</strong> Every page should either declare itself canonical or point to the preferred version. Misconfigured canonicals tell Google to index the wrong URL, often causing duplicate content to outrank the page you care about.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Check 8 — thin and duplicate pages are managed.</strong> Pages with fewer than 200 words of unique content are unlikely to rank and can drag down the overall quality score Google assigns to your site. Either expand, merge or noindex them.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Check 9 — www and non-www resolve to one version.</strong> Both should return a 301 to your chosen canonical domain. The same applies to HTTP vs HTTPS. Four versions of your homepage dilutes authority.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Check 10 — Search Console shows no indexing errors.</strong> Log in to Search Console, open the Pages report and filter for Not Indexed. Work through the most common reasons — Server error, Crawl anomaly, Discovered but not indexed — and fix or accept each one.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Section 3: Rendering (checks 11–13)</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Modern frameworks render some content in the browser using JavaScript. Google can run JavaScript, but it may take days or weeks to do so. Server-rendered HTML is indexed immediately.</p>

          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Check 11 — key content is in the server-rendered HTML.</strong> Use View Source (not Inspect) to confirm your headings, body copy and links are present in the raw HTML, not injected by client-side JavaScript after page load.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Check 12 — rich results are rendering correctly.</strong> Use Google&apos;s Rich Results Test to confirm that schema markup (FAQ, Article, Breadcrumb, Product) renders without errors. Broken schema earns no rich snippet. See our <Link href="/blog/schema-markup-explained" className="text-brand-green hover:underline">schema markup guide</Link> for the full implementation.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Check 13 — JavaScript errors are not hiding content.</strong> Open the browser console on key pages and confirm there are no uncaught errors. A JS error early in the render cycle can prevent entire sections from appearing.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Section 4: Page experience (checks 14–16)</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Google uses page experience signals as a tiebreaker between pages with similar content quality. Speed and stability matter.</p>

          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Check 14 — Core Web Vitals pass for real users.</strong> In Search Console, open the Core Web Vitals report and confirm LCP, INP and CLS are in the Good range based on field data (not just lab scores). See our <Link href="/blog/core-web-vitals-explained" className="text-brand-green hover:underline">Core Web Vitals guide</Link> for how to fix each metric.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Check 15 — HTTPS is enforced everywhere.</strong> All pages, including images, fonts, scripts and stylesheets, must load over HTTPS. Mixed content warnings downgrade trust and can trigger browser security errors. Use a tool like Why No Padlock to find mixed content.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Check 16 — mobile usability has no errors.</strong> Open the Mobile Usability report in Search Console. Common issues include clickable elements too close together, text too small to read and content wider than the screen. All are fixable with responsive CSS.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Section 5: Structure and signals (checks 17–20)</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>These checks improve how Google understands and trusts your site as a whole.</p>

          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Check 17 — every page has a unique title and meta description.</strong> Duplicate titles confuse Google about which page should rank. Meta descriptions do not directly affect ranking but affect click-through rate. Use 50–60 characters for titles and 140–160 for descriptions.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Check 18 — heading hierarchy is clean.</strong> Each page should have exactly one H1. Use H2 for major sections and H3 for subsections. Screen readers and crawlers both use this hierarchy. Skipping levels or using multiple H1 tags sends mixed signals.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Check 19 — images have descriptive alt text.</strong> Alt text tells Google what an image shows. It also helps visually impaired visitors using screen readers. Avoid keyword stuffing; a plain English description of what is in the photo is enough.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Check 20 — internal linking is intentional.</strong> Every important page should be reachable in three clicks from the homepage. Orphan pages with no internal links receive less crawl budget and no PageRank. Build a logical link structure where related content points to each other.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">How often to run each check</h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-muted border-collapse" style={sans}>
              <thead>
                <tr className="border-b border-hairline">
                  <th className="text-left py-2 pr-4 text-foreground font-normal italic">Frequency</th>
                  <th className="text-left py-2 pr-4 text-foreground font-normal italic">Checks</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4">After every deployment</td>
                  <td className="py-2 pr-4">6 (noindex), 11 (server HTML), 15 (HTTPS)</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4">Monthly</td>
                  <td className="py-2 pr-4">3 (broken links), 10 (Search Console errors), 14 (Core Web Vitals)</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4">Quarterly</td>
                  <td className="py-2 pr-4">All 20 checks as a full audit</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4">After major content changes</td>
                  <td className="py-2 pr-4">2 (sitemap), 7 (canonicals), 17 (titles), 18 (headings)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Tools that make this faster</h3>

          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Google Search Console</strong> — free, uses real Google data, covers indexing errors, Core Web Vitals field data, mobile usability and crawl stats. This is the most important tool on the list.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Screaming Frog SEO Spider</strong> — free for up to 500 URLs, crawls your site and flags broken links, redirect chains, duplicate titles, missing alt text and much more in a single run.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">PageSpeed Insights</strong> — Google&apos;s free lab and field speed tool. Run it on your homepage, your most important service page and a blog post to get a representative picture.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Google Rich Results Test</strong> — paste any URL to see which schema types are detected and whether there are errors. Free.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Ahrefs Webmaster Tools</strong> — free tier includes a full site audit, broken link checker and backlink overview. More comprehensive than Screaming Frog for ongoing monitoring.</span>
            </li>
          </ul>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Pair this checklist with the <Link href="/blog/website-maintenance-checklist" className="text-brand-green hover:underline">website maintenance checklist</Link> so technical and content tasks are both covered on a regular schedule.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">FAQs</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong className="text-foreground font-normal">How is a technical SEO audit different from an on-page audit?</strong> On-page SEO covers content quality, keywords and headings on individual pages. Technical SEO covers the infrastructure those pages sit on — crawlability, indexability, speed, security and structure. Both matter, but technical issues can silently block all your on-page work from reaching Google.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong className="text-foreground font-normal">My site is small — do I really need all 20 checks?</strong> Yes, but many will pass in seconds. For a small site the whole audit takes about 90 minutes. The checks most likely to reveal hidden problems on small sites are 6 (noindex), 7 (canonicals) and 10 (Search Console errors).</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong className="text-foreground font-normal">Can I do this audit myself or do I need an agency?</strong> You can run most checks yourself using the free tools above. Where you may need help is interpreting the results and implementing fixes, particularly if your site uses a complex JavaScript framework. If you want a full audit with recommendations, <Link href="/contact" className="text-brand-green hover:underline">get in touch</Link>.</p>
        </article>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-hairline text-center">
        <FadeIn>
          <Link href="/blog" className="inline-block px-8 py-3 border border-hairline text-[10px] tracking-[0.2em] uppercase text-foreground hover:border-brand-green hover:text-brand-green transition-colors duration-300 mr-4" style={sans}>More Articles</Link>
          <Link href="/contact" className="inline-block px-8 py-3 bg-foreground text-background text-[10px] tracking-[0.2em] uppercase hover:bg-brand-green transition-colors duration-300" style={sans}>Start a Project</Link>
        </FadeIn>
      </section>
    </main>
  );
}
