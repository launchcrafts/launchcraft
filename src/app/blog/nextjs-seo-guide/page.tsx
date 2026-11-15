import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/nextjs-seo-guide`;

export const metadata: Metadata = {
  title: "How to Make a Next.js Website SEO-Friendly: 10 Steps That Actually Matter",
  description: "Next.js can rank brilliantly or not at all. Here are the 10 setup steps we use on every LaunchCraft build to make Google read, trust and rank the site.",
  keywords: [
    "next.js seo",
    "next.js metadata",
    "next.js sitemap",
    "react seo",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "How to Make a Next.js Website SEO-Friendly: 10 Steps That Actually Matter | LaunchCraft",
    description: "Next.js can rank brilliantly or not at all. Here are the 10 setup steps we use on every LaunchCraft build to make Google read, trust and rank the site.",
    url,
    type: "article",
    publishedTime: "2026-11-15",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Make a Next.js Website SEO-Friendly: 10 Steps That Actually Matter",
    description: "Next.js can rank brilliantly or not at all. Here are the 10 setup steps we use on every LaunchCraft build to make Google read, trust and rank the site.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "How to Make a Next.js Website SEO-Friendly: 10 Steps That Actually Matter", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Make a Next.js Website SEO-Friendly: 10 Steps That Actually Matter",
  description: "Next.js can rank brilliantly or not at all. Here are the 10 setup steps we use on every LaunchCraft build to make Google read, trust and rank the site.",
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
            {["Next.Js Seo", "Next.Js Metadata", "Next.Js Sitemap", "React Seo"].map((tag) => (
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
            How to Make a Next.js Website SEO-Friendly: 10 Steps That Actually Matter
          </h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
            <p className="text-sm text-muted leading-relaxed" style={sans}>Next.js is one of the best frameworks for SEO, but only if it is set up right. Out of the box it can render real HTML on the server, which search engines love. Skip a few steps, though, and you get missing titles, duplicate URLs and pages Google never finds. These are the 10 steps we follow on every build.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">1. Render content on the server, not in the browser</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Google can run JavaScript, but it does so later and less reliably than it reads plain HTML. In the App Router, pages are Server Components by default, so your headings, text and links arrive as finished HTML. Keep it that way. Only mark a component "use client" when it truly needs interaction, such as a form or a slider, and never load your main content after a client-side fetch.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">2. Give every page its own title and description</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Use the Metadata API. Static pages export a metadata object; dynamic pages such as blog posts use generateMetadata() to build the title and description from the post itself. Keep titles under about 60 characters and lead with the keyword. Write descriptions as a reason to click, not a list of keywords.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">3. Set a canonical URL on every page</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>{`The same page can often load at several URLs: with and without a trailing slash, with tracking parameters, or on a preview domain. Add alternates: { canonical: ‘...’ } in your metadata so Google knows which version to rank. Also block or password-protect preview deployments so they never get indexed.`}</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">4. Generate a sitemap and robots file from code</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Create app/sitemap.ts and app/robots.ts. Next.js turns them into /sitemap.xml and /robots.txt automatically. Pull blog posts and service pages into the sitemap from your CMS or file system, so every new page is listed the moment it is published. Then submit the sitemap in Google Search Console.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">5. Use next/image for every image</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>The next/image component serves modern formats like WebP and AVIF, resizes for each screen and lazy-loads images below the fold. Always set width and height (or fill with a sized parent) to stop layout shift. Give your hero image the priority prop so it loads first, and write real alt text that describes the picture.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">6. Load fonts with next/font</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Web fonts are a common cause of slow, jumpy pages. next/font self-hosts the font files, removes the extra request to Google Fonts and reserves space so text does not jump when the font arrives. It is a one-line change with a visible speed gain.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">7. Add structured data as JSON-LD</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>{`Add a <script type="application/ld+json"> block to your layout or page with schema for your business (Organization or LocalBusiness), articles (Article) and page trails (BreadcrumbList). This helps Google understand who you are and what each page is about. We cover the details in [Post 11: Schema markup explained].`}</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">8. Make social previews look right</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Set Open Graph and Twitter tags in your metadata, or add an opengraph-image file to a route. When someone shares your page on WhatsApp, LinkedIn or X, it shows a proper title, description and image instead of a blank card. That does not change rankings directly, but it lifts clicks and shares.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">9. Handle redirects and 404s properly</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>When you move or rename a page, add a permanent redirect in next.config.js so the old URL passes its ranking to the new one. Create a helpful not-found.tsx page with links to your main sections. Never redirect every missing page to the homepage; Google treats that as a soft 404.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">10. Watch Core Web Vitals after launch</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Speed is part of the page experience Google measures. Check the Core Web Vitals report in Search Console every month and fix any page marked "Poor". See [Post 2: Core Web Vitals explained] for what each metric means and how to fix it.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Quick checklist</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Main content renders on the server</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Unique title and description on every page</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Canonical URL set</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">sitemap.xml and robots.txt live and submitted</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">All images use next/image with alt text</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Fonts loaded with next/font</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">JSON-LD schema on key pages</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Open Graph image set</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Old URLs redirected</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Core Web Vitals passing</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">FAQs</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Is Next.js better for SEO than plain React? Yes, for most business sites. A plain React app often sends an empty page and builds it in the browser. Next.js sends finished HTML, which is faster to crawl and index.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Do I need a plugin for Next.js SEO? No. The Metadata API, sitemap and robots files are built in. You only need a CMS if non-developers will add content.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>How long until a new Next.js site ranks? Usually a few weeks to be indexed and a few months to rank for competitive terms. Good content and links matter more than the framework.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Next step</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Want a Next.js site that is fast and search-ready from day one? See our web development services or start a project.</p>
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
