import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/core-web-vitals-explained`;

export const metadata: Metadata = {
  title: "Core Web Vitals Explained: How to Fix LCP, INP and CLS",
  description: "LCP, INP and CLS in plain English: what each Core Web Vital measures, the scores you need to pass, and the fixes that move the numbers.",
  keywords: [
    "core web vitals",
    "improve lcp",
    "inp score",
    "cls fix",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Core Web Vitals Explained: How to Fix LCP, INP and CLS | LaunchCraft",
    description: "LCP, INP and CLS in plain English: what each Core Web Vital measures, the scores you need to pass, and the fixes that move the numbers.",
    url,
    type: "article",
    publishedTime: "2026-11-15",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Core Web Vitals Explained: How to Fix LCP, INP and CLS",
    description: "LCP, INP and CLS in plain English: what each Core Web Vital measures, the scores you need to pass, and the fixes that move the numbers.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "Core Web Vitals Explained: How to Fix LCP, INP and CLS", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Core Web Vitals Explained: How to Fix LCP, INP and CLS",
  description: "LCP, INP and CLS in plain English: what each Core Web Vital measures, the scores you need to pass, and the fixes that move the numbers.",
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
            {["Core Web Vitals", "Improve Lcp", "Inp Score", "Cls Fix"].map((tag) => (
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
            Core Web Vitals Explained: How to Fix LCP, INP and CLS
          </h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
            <p className="text-sm text-muted leading-relaxed" style={sans}>Core Web Vitals are three numbers Google uses to judge how a page feels to real visitors: how fast it loads, how quickly it responds and how steady it stays. A site passes when at least 75% of real visits score "good" on all three. Here is what each one means and how to fix it.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">The three metrics and the scores to aim for</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Thresholds from Google’s web.dev guide. INP replaced the older First Input Delay metric in March 2024, so ignore any advice that still talks about FID.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">How to fix a slow LCP</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>LCP is usually your hero image or main heading. To speed it up:</p>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Compress the hero image and serve it as WebP or AVIF</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Tell the browser to load it first (fetchpriority="high", or priority on next/image)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Never lazy-load the hero image</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Cut server response time with caching or a CDN</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Remove render-blocking CSS and scripts from the top of the page</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">How to fix a poor INP</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>INP gets worse when the browser is busy running JavaScript and cannot respond to a tap. Common culprits are chat widgets, heavy analytics, sliders and big frameworks loaded on every page.</p>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Remove scripts you do not use, especially old tracking tags</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Load third-party widgets after the page is interactive</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Break long JavaScript tasks into smaller pieces</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Show instant feedback on buttons (a pressed state or spinner) before heavy work runs</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">How to fix a high CLS</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>CLS is the annoying jump that makes you tap the wrong button. Fix it by reserving space:</p>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Set width and height on every image and video</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Give ad slots, embeds and banners a fixed height</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Load fonts so text does not resize when they arrive</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Never insert content above what the visitor is already reading</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Where to check your scores</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">PageSpeed Insights: paste any URL to see real-user data (if Google has enough) and lab tests</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Search Console → Core Web Vitals: shows which groups of pages pass or fail across your whole site</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Chrome DevTools → Performance: for developers tracking down exactly which script or image is slow</span>
                </li>
            </ul>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Lab scores (like a Lighthouse test) are useful for debugging, but Google judges your site on field data from real Chrome users.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Do Core Web Vitals affect rankings?</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>They are one part of Google’s page experience signals. Great content on a slow page can still rank, and a fast page with thin content will not. But when two pages are close, speed can tip the balance, and it always affects whether visitors stay. [Add your own data point: e.g. "After we cut [client]’s LCP from X s to Y s, enquiries rose Z%."]</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">FAQs</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>What is a good PageSpeed score? Aim for 90+ in lab tests, but focus on passing the three Core Web Vitals with real-user data. That is what Google uses.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Why is my mobile score worse than desktop? Phones have slower processors and networks. Heavy JavaScript hurts INP far more on a mid-range Android phone than on a laptop.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>How long until fixes show in Search Console? Field data covers the last 28 days, so allow about a month to see the full effect.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Next step</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Failing Core Web Vitals? We rebuild slow sites on Next.js and fix performance on existing ones. Talk to us.</p>
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
