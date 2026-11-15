import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/aeo-vs-seo`;

export const metadata: Metadata = {
  title: "AEO vs SEO: How to Get Your Business Into AI Answers",
  description: "People now ask ChatGPT, Gemini and Google's AI Overviews before they click. Here is how AEO differs from SEO, and the steps that get you cited.",
  keywords: [
    "aeo vs seo",
    "answer engine optimization",
    "generative engine optimization",
    "ai search visibility",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "AEO vs SEO: How to Get Your Business Into AI Answers | LaunchCraft",
    description: "People now ask ChatGPT, Gemini and Google's AI Overviews before they click. Here is how AEO differs from SEO, and the steps that get you cited.",
    url,
    type: "article",
    publishedTime: "2026-11-15",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AEO vs SEO: How to Get Your Business Into AI Answers",
    description: "People now ask ChatGPT, Gemini and Google's AI Overviews before they click. Here is how AEO differs from SEO, and the steps that get you cited.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "AEO vs SEO: How to Get Your Business Into AI Answers", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AEO vs SEO: How to Get Your Business Into AI Answers",
  description: "People now ask ChatGPT, Gemini and Google's AI Overviews before they click. Here is how AEO differs from SEO, and the steps that get you cited.",
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
            {["Aeo Vs Seo", "Answer Engine Optimization", "Generative Engine Optimization", "Ai Search Visibility"].map((tag) => (
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
            AEO vs SEO: How to Get Your Business Into AI Answers
          </h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
            <p className="text-sm text-muted leading-relaxed" style={sans}>More customers now get their first answer from an AI: Google’s AI Overviews, ChatGPT, Gemini or Perplexity. Answer Engine Optimization (AEO), also called Generative Engine Optimization (GEO), is the work of making your business the source those tools quote. It is not a replacement for SEO. It is SEO with a sharper focus on clear answers and trust.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">SEO vs AEO at a glance</h3>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">What Google itself says</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Google’s own guide to its AI features says content must be crawlable to be used, and that there is no special schema you need to add for AI Overviews or AI Mode (TechWyse summary of Google’s guide). In other words, there is no secret AI tag. The basics still decide who gets used.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">7 steps to show up in AI answers</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Answer the question in the first two sentences. Then explain. AI tools pull short, direct answers, so lead with the answer, not the history.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Write one page per real question. "How much does physiotherapy cost in Vijayawada?" deserves its own clear answer, not a line buried on the homepage.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Use clear headings that match how people ask. Questions as subheadings help both readers and machines find the right section.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Show who is behind the content. Add author names, qualifications and real experience. AI systems and Google both lean on signs of expertise.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Keep your facts consistent everywhere. Your name, address, phone, services and prices should match on your site, Google Business Profile, directories and social pages.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Earn mentions on other sites. Reviews, local news, industry directories and partner pages all tell AI tools that real people trust you.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Keep the technical basics clean. Fast pages, server-rendered HTML, a sitemap and schema for your business help every search system read your site. See [Post 1] and [Post 11].</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">How to check if AI mentions you</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Ask ChatGPT, Gemini and Perplexity the questions your customers ask, such as "best [service] in [city]". Note who they name.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Check whether Google shows an AI Overview for your key searches and which sites it links.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Track branded searches in Search Console. If more people search your name, AI mentions are often part of the reason.</span>
                </li>
            </ul>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Repeat the checks every month, because answers change often.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">What not to do</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Do not publish hundreds of thin AI-written pages. Google treats mass-produced, low-value pages as spam.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Do not rely on special files or hidden text to "talk to AI". See [Post 10] on llms.txt.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Do not stuff the same question into every page. One strong answer beats ten weak ones.</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">FAQs</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Is SEO dead because of AI? No. AI tools still rely on web pages, and Google still sends most search traffic. AEO builds on SEO, it does not replace it.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>How long does AEO take? Like SEO, it takes months. The fastest wins are clear answer pages and fixing inconsistent business details.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Can a small business compete with big brands in AI answers? Yes, especially for local and specialist questions, where a clear, expert local page often beats a generic national one.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Next step</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Want to know how AI tools describe your business today? Ask us for an AI visibility check.</p>
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
