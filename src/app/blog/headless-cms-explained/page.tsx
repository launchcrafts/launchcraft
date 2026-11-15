import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/headless-cms-explained`;

export const metadata: Metadata = {
  title: "Headless CMS Explained: Is It Right for Your Business Website?",
  description: "A headless CMS lets your team edit content while developers build a faster front end. Here is how it works, the pros and cons, and who should use one.",
  keywords: [
    "headless cms",
    "headless cms for business",
    "headless vs traditional cms",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Headless CMS Explained: Is It Right for Your Business Website? | LaunchCraft",
    description: "A headless CMS lets your team edit content while developers build a faster front end. Here is how it works, the pros and cons, and who should use one.",
    url,
    type: "article",
    publishedTime: "2026-11-15",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Headless CMS Explained: Is It Right for Your Business Website?",
    description: "A headless CMS lets your team edit content while developers build a faster front end. Here is how it works, the pros and cons, and who should use one.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "Headless CMS Explained: Is It Right for Your Business Website?", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Headless CMS Explained: Is It Right for Your Business Website?",
  description: "A headless CMS lets your team edit content while developers build a faster front end. Here is how it works, the pros and cons, and who should use one.",
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
            {["Headless Cms", "Headless Cms For Business", "Headless Vs Traditional Cms"].map((tag) => (
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
            Headless CMS Explained: Is It Right for Your Business Website?
          </h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
            <p className="text-sm text-muted leading-relaxed" style={sans}>A headless CMS is a content system with no built-in website attached. Your team writes and edits content in a clean dashboard, and the website pulls that content in through an API. The "head" (the design people see) is built separately, often in Next.js. That split is why headless sites are usually faster, safer and easier to grow.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Traditional CMS vs headless CMS</h3>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">How a headless site works, step by step</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Your team adds a blog post or updates a service page in the CMS dashboard.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">The CMS stores it as structured content: title, summary, body, images, author.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">The Next.js site requests that content through the CMS’s API.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Next.js builds the page as fast static HTML, or refreshes it when content changes.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Visitors get a quick page from a CDN, while editors never touch code.</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Popular headless CMS options</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Sanity: flexible content models and a customisable editing studio</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Contentful: widely used by larger teams, strong roles and workflows</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Strapi: open source, can be self-hosted</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Payload: open source and built in TypeScript, fits well with Next.js</span>
                </li>
            </ul>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Pick based on who will edit the content, how many people need access and your budget, not on hype.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">When headless is a good fit</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">You care about speed and SEO and want top Core Web Vitals</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">You publish often and want non-technical staff to manage content</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">You need the same content in more than one place (website, app, landing pages)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">You have outgrown a template or builder and keep fighting its limits</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">When it is overkill</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">A 5-page site that changes twice a year</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">No budget for a developer to build and maintain the front end</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">You need a ready-made plugin for every feature and want to install them yourself</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">FAQs</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Can I still edit my site without a developer? Yes. Editors update text, images and posts in the CMS. A developer is only needed for new layouts or features.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Is headless better for SEO? It can be, because pages are faster and the code is cleaner. You still need good content, metadata and schema.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Is a headless CMS expensive? Many have free tiers for small teams. The bigger cost is the custom front end, which is a one-time build.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Next step</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>We build headless sites with Next.js and a CMS your team will actually enjoy using. See our web development work or book a call.</p>
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
