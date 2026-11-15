import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/what-is-llms-txt`;

export const metadata: Metadata = {
  title: "What Is llms.txt, and Does Your Business Actually Need One?",
  description: "llms.txt is a plain-text file meant to guide AI tools around your site. Here is what it does, what Google says about it, and when it is worth adding.",
  keywords: [
    "llms.txt",
    "llms.txt seo",
    "llms.txt google",
    "ai text file for websites",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "What Is llms.txt, and Does Your Business Actually Need One? | LaunchCraft",
    description: "llms.txt is a plain-text file meant to guide AI tools around your site. Here is what it does, what Google says about it, and when it is worth adding.",
    url,
    type: "article",
    publishedTime: "2026-11-15",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is llms.txt, and Does Your Business Actually Need One?",
    description: "llms.txt is a plain-text file meant to guide AI tools around your site. Here is what it does, what Google says about it, and when it is worth adding.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "What Is llms.txt, and Does Your Business Actually Need One?", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is llms.txt, and Does Your Business Actually Need One?",
  description: "llms.txt is a plain-text file meant to guide AI tools around your site. Here is what it does, what Google says about it, and when it is worth adding.",
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
            {["Llms.Txt", "Llms.Txt Seo", "Llms.Txt Google", "Ai Text File For Websites"].map((tag) => (
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
            What Is llms.txt, and Does Your Business Actually Need One?
          </h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
            <p className="text-sm text-muted leading-relaxed" style={sans}>llms.txt is a small Markdown file placed at the root of a website (yoursite.com/llms.txt). It gives AI tools a short summary of the site and a list of the most useful pages. It was proposed in 2024 as a way to help large language models read websites without wading through menus, ads and scripts. The honest answer for most small businesses: it is optional, and it will not boost your Google rankings.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">What an llms.txt file looks like</h3>

            <pre className="text-sm text-muted leading-relaxed bg-black/5 p-4 overflow-x-auto rounded" style={sans}>{`# LaunchCraft

> Web design and development studio building fast Next.js websites, AI automation and brand identities.

## Services
- [Web development](https://launchcrafts.in/services): Custom Next.js and React websites
- [AI automation](https://launchcrafts.in/services): Chatbots and workflow automation
- [Brand identity](https://launchcrafts.in/services): Logos, colours and typography

## Guides
- [Next.js SEO guide](https://launchcrafts.in/articles/nextjs-seo-guide)`}</pre>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">What Google says</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Google’s position is clear. Its Search team says it does not use llms.txt, and that keeping one "won’t harm (nor help)" your visibility in Google Search, while it is fine to keep one for other services that use it (Search Engine Roundtable). So if your goal is better Google rankings, llms.txt is not the lever.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Who does use it</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">AI coding tools reading developer documentation are the clearest real use case today</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Some AI agents and crawlers fetch the file, though few have confirmed they use it in answers</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Chrome’s Lighthouse includes an agentic-browsing check that looks for the file (TechWyse)</span>
                </li>
            </ul>

            <p className="text-sm text-muted leading-relaxed" style={sans}>That makes it more useful for SaaS products and documentation sites than for a local clinic or shop.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Should you add one?</h3>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">What helps AI visibility more</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Clear answer pages for the questions customers ask ([Post 9])</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Consistent business details across your site, Google Business Profile and directories</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Server-rendered, fast, crawlable pages ([Post 1])</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Schema markup that describes your business ([Post 11])</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Real reviews and mentions on other trusted sites</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">How to add llms.txt in Next.js</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Place a file named llms.txt in the public folder, or create a route that builds it from your CMS so it stays up to date. Keep it short, accurate and limited to your most important pages.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">FAQs</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Is llms.txt like robots.txt? No. robots.txt tells crawlers what they may access. llms.txt is a voluntary summary for AI tools and does not block or allow anything.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Can llms.txt hurt my SEO? Google says it neither helps nor harms rankings in Search.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Will ChatGPT read my llms.txt? There is no public confirmation that ChatGPT uses it in answers. Do not rely on it for AI visibility.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Next step</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Want a real plan for showing up in AI search, not just a file? Talk to us about AI visibility.</p>
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
