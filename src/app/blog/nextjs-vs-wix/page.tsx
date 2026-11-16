import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/nextjs-vs-wix`;

export const metadata: Metadata = {
  title: "Next.js vs Wix: When to Outgrow a Website Builder",
  description:
    "Wix gets small businesses online fast. Here's when that's enough, when a custom Next.js site pays off, and what moving away from Wix really involves.",
  keywords: [
    "next.js vs wix",
    "wix alternatives",
    "move from wix",
    "wix vs custom website",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Next.js vs Wix: When to Outgrow a Website Builder | LaunchCraft",
    description:
      "Wix gets small businesses online fast. Here's when that's enough, when a custom Next.js site pays off, and what moving away from Wix really involves.",
    url,
    type: "article",
    publishedTime: "2026-11-17",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js vs Wix: When to Outgrow a Website Builder",
    description:
      "Wix gets small businesses online fast. Here's when that's enough, when a custom Next.js site pays off, and what moving away from Wix really involves.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "Next.js vs Wix: When to Outgrow a Website Builder", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Next.js vs Wix: When to Outgrow a Website Builder",
  description:
    "Wix gets small businesses online fast. Here's when that's enough, when a custom Next.js site pays off, and what moving away from Wix really involves.",
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
          <Link href="/blog" className="inline-block text-[10px] tracking-[0.2em] uppercase text-muted hover:text-brand-orange transition-colors duration-300 mb-8" style={sans}>&larr; Blog</Link>
          <div className="flex items-center justify-center gap-3 flex-wrap mb-4">
            <span className="text-[10px] tracking-[0.2em] uppercase text-muted" style={sans}>17 November 2026</span>
            <span className="text-hairline">&middot;</span>
            {["Next.js", "Platform Comparison"].map((tag) => (
              <span key={tag} className="text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 border border-hairline text-muted" style={sans}>{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl italic text-foreground max-w-3xl mx-auto leading-[1.2]">Next.js vs Wix: When to Outgrow a Website Builder</h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">

          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Wix built its reputation on simplicity. You drag, you drop, you publish. For millions of small businesses that needed an online presence without a developer and without a budget, it delivered exactly that. The question is not whether Wix is good at what it does — it is — but whether what it does is still enough for where your business is now.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            This is a comparison written for people who are already on Wix and wondering whether to stay, and for those evaluating it as a starting point. It covers where Wix genuinely shines, the specific signals that suggest you have outgrown it, the realities of trying to leave, and what a move to Next.js actually involves.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">At a Glance</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-muted border-collapse" style={sans}>
              <thead>
                <tr className="border-b border-hairline">
                  <th className="text-left py-2 pr-4 text-foreground font-normal italic">Factor</th>
                  <th className="text-left py-2 pr-4 text-foreground font-normal italic">Wix</th>
                  <th className="text-left py-2 text-foreground font-normal italic">Next.js</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 text-foreground">Setup speed</td>
                  <td className="py-2 pr-4">Hours to days</td>
                  <td className="py-2">Weeks to months</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 text-foreground">Developer needed</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">Yes</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 text-foreground">Performance</td>
                  <td className="py-2 pr-4">Variable, platform-controlled</td>
                  <td className="py-2">Excellent, fully controlled</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 text-foreground">Code ownership</td>
                  <td className="py-2 pr-4">None</td>
                  <td className="py-2">Complete</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 text-foreground">Monthly cost (hosting)</td>
                  <td className="py-2 pr-4">$17–$159+</td>
                  <td className="py-2">$0–$20 on Vercel for most sites</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 text-foreground">Export / portability</td>
                  <td className="py-2 pr-4">None (pages cannot be exported)</td>
                  <td className="py-2">Full — you own all the code</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Where Wix Shines</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Getting online with zero technical knowledge.</strong> Wix's drag-and-drop editor, its AI site builder, and its large library of templates mean that a business owner with no design or development experience can have a credible website published in an afternoon. For businesses at the very beginning — a local service provider, a freelancer, a pop-up store — this is a genuine and meaningful advantage.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">All-in-one convenience.</strong> Hosting, domain management, SSL, email marketing, booking tools, and basic e-commerce are all available within a single Wix account. There is no need to stitch together multiple providers. For small businesses that want simplicity above all else, this is a real benefit.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Low initial cost.</strong> Wix's pricing starts at around $17 per month for a business plan. The upfront investment is a fraction of what a custom Next.js site costs to build. If your business is new and cash-sensitive, this matters.</span>
            </li>

          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Six Signs You Have Outgrown Wix</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Your site is slow and you cannot fix it.</strong> Wix's performance is managed by Wix, not by you. You cannot change how scripts are loaded, how images are served, or how pages are rendered. If your Core Web Vitals scores are poor, your options for improvement are limited to removing content — not improving the underlying architecture.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">You need functionality the Wix App Market does not offer.</strong> Third-party Wix apps are limited in what they can access and do. If you need a custom booking flow, a specific CRM integration, real-time inventory management, or any logic that goes beyond what a pre-built app provides, Wix becomes an obstacle rather than a foundation.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">You are paying for multiple Wix apps that duplicate features you need natively.</strong> Wix's core product is relatively limited; meaningful functionality often requires paid third-party apps. It is not uncommon for a Wix site to cost ₹5,000–₹10,000 per month when you add up the platform plan and the apps it depends on.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Your SEO is hitting a ceiling.</strong> Wix has improved its SEO capabilities significantly but it still cannot match the control a custom Next.js site provides — particularly around structured data, rendering strategies for large blogs, programmatic page generation, and hreflang implementation for multilingual sites.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Your design is constrained by the template.</strong> Wix templates are good starting points but not blank canvases. Achieving a truly custom design — one that precisely matches your brand — becomes increasingly difficult as your requirements grow more specific. You end up working around the template rather than designing freely.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">You are concerned about vendor dependency.</strong> Wix is a private company. Its pricing has increased over time and will continue to. Its feature decisions are made in Wix's interests. Everything you have built lives in their system, not yours. If that feels uncomfortable as your business grows, it probably should.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Can You Take Your Wix Site With You?</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            This is the question that matters most for anyone already on Wix, and the answer is essentially no — not in any useful sense. Wix does not provide a code export function. You cannot download your pages as HTML files or as any kind of structured data. Your design, layout, and pages exist exclusively within Wix's proprietary system.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            What you can export from Wix: blog posts (as a CSV with text content and metadata, without formatting or images), contact form submissions, and product listings if you are using Wix eCommerce. Your images can be downloaded individually. Everything else — your page layouts, your navigation, your design choices, your Wix app configurations — stays in Wix.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Wix Studio, the company's newer platform aimed at professional designers, introduced a feature called "Studio Two" in alpha that allows partial design export — but as of late 2026 this is not available to standard Wix users and exports design tokens rather than deployable code. It does not change the fundamental portability situation for most Wix sites.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            The practical implication is that moving from Wix to Next.js is a rebuild, not a migration. You are starting the design and development from scratch on a new codebase, using your existing Wix site as a visual and content reference. This is not as painful as it sounds — the content can be restructured, and rebuilding typically produces a better result than attempting to faithfully recreate what Wix generated — but it is worth knowing before you start.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">What a Move to Next.js Involves</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Moving from Wix to Next.js is a project with six distinct phases. The goal throughout is to replicate or improve your existing site while protecting the search rankings you have already earned. Full detail is in our guide to <Link href="/blog/website-redesign-without-losing-seo" className="text-brand-green hover:underline">website redesign without losing SEO</Link>.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Audit existing rankings and content.</strong> Before writing a line of new code, document every URL that receives organic traffic or has earned backlinks. These pages must be preserved. Use Google Search Console to get this data.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Export content.</strong> Download blog post CSVs, copy product data, save images. Decide whether you will use a headless CMS for the new site or manage content directly in code (Markdown files, for example).</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Design and build on Next.js.</strong> This is the main development phase. The URL structure of the new site should match the old site wherever possible. Where URLs change, document every change for the next step.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Implement 301 redirects.</strong> Every Wix URL that changes must have a corresponding 301 redirect in your next.config file. Missing redirects cause permanent ranking loss for the affected pages.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Test thoroughly before launch.</strong> Check all redirects, all internal links, all meta tags, your sitemap, and your robots.txt on a staging environment before switching the DNS to point to your new site.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Monitor after launch.</strong> Submit your new sitemap to Google Search Console. Monitor for crawl errors and ranking changes in the first four weeks. Most post-migration ranking movements settle within six to eight weeks.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Is Wix Bad for SEO?</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            No — not categorically. Wix has significantly improved its SEO tooling over the past few years. You can edit meta titles and descriptions, add alt text to images, create redirects, submit sitemaps, and add basic structured data. For a local business targeting a handful of non-competitive keywords, Wix's SEO capabilities are entirely sufficient.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            The limitations appear at scale and in competitive situations. Wix's JavaScript-heavy rendering can negatively affect crawl efficiency for large sites. Its structured data options are limited compared to what you can implement in code. Programmatic page generation — creating hundreds of location or service pages from a data source — is not something Wix supports in any meaningful way. For a business with serious SEO ambitions in a competitive category, these limitations matter.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Total Cost Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-muted border-collapse" style={sans}>
              <thead>
                <tr className="border-b border-hairline">
                  <th className="text-left py-2 pr-4 text-foreground font-normal italic">Cost item</th>
                  <th className="text-left py-2 pr-4 text-foreground font-normal italic">Wix (3 years)</th>
                  <th className="text-left py-2 text-foreground font-normal italic">Next.js (3 years)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 text-foreground">Initial build / setup</td>
                  <td className="py-2 pr-4">₹0–₹60,000 (DIY to freelancer)</td>
                  <td className="py-2">₹80,000–₹2,50,000</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 text-foreground">Platform subscription</td>
                  <td className="py-2 pr-4">₹37,000–₹1,70,000</td>
                  <td className="py-2">₹0–₹18,000 (Vercel)</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 text-foreground">Third-party apps</td>
                  <td className="py-2 pr-4">₹0–₹1,20,000+</td>
                  <td className="py-2">Varies by feature set</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 text-foreground">Future flexibility</td>
                  <td className="py-2 pr-4">Limited to Wix ecosystem</td>
                  <td className="py-2">Unlimited</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            For a full picture of what a custom website costs in India, see our guide to <Link href="/blog/website-cost-india" className="text-brand-green hover:underline">website cost in India</Link>.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Frequently Asked Questions</h3>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">Can I use WhatsApp integration on a Wix site?</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Yes — there are Wix apps that add a WhatsApp chat button to your site. However, the automation and lead qualification capabilities available in a custom Next.js site with a properly configured WhatsApp Business API integration are significantly more powerful. See our guide on <Link href="/blog/whatsapp-automation-local-business" className="text-brand-green hover:underline">WhatsApp automation for local businesses</Link> for what is possible when you are not constrained by an app market.
          </p>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">How long does a migration from Wix to Next.js take?</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            For a typical small business site with up to twenty pages and a blog, four to eight weeks is a realistic timeline from kick-off to launch. Larger sites with e-commerce, custom functionality, or significant content volumes take longer. The timeline is driven primarily by design decisions and content migration, not by development complexity.
          </p>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">How does Wix compare to Webflow and Squarespace?</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Wix is generally the most accessible and affordable of the three for non-technical users. Webflow offers more design precision and is more developer-friendly. Squarespace sits between them, with a stronger emphasis on visual polish. For detailed comparisons with the other platforms, see <Link href="/blog/nextjs-vs-webflow" className="text-brand-green hover:underline">Next.js vs Webflow</Link> and <Link href="/blog/nextjs-vs-squarespace" className="text-brand-green hover:underline">Next.js vs Squarespace</Link>.
          </p>

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
