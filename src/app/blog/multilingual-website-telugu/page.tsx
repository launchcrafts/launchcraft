import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/multilingual-website-telugu`;

export const metadata: Metadata = {
  title: "How to Build a Multilingual Website in Telugu, Hindi and English",
  description: "Serving customers in Telugu or Hindi can widen your reach. Here's how to plan, build and rank a multilingual website without duplicate-content problems.",
  keywords: ["multilingual website", "telugu website design", "hreflang tags", "next.js internationalization"],
  alternates: { canonical: url },
  openGraph: {
    title: "How to Build a Multilingual Website in Telugu, Hindi and English | LaunchCraft",
    description: "Serving customers in Telugu or Hindi can widen your reach. Here's how to plan, build and rank a multilingual website without duplicate-content problems.",
    url,
    type: "article",
    publishedTime: "2026-11-17",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Build a Multilingual Website in Telugu, Hindi and English",
    description: "Serving customers in Telugu or Hindi can widen your reach. Here's how to plan, build and rank a multilingual website without duplicate-content problems.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "How to Build a Multilingual Website in Telugu, Hindi and English", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Build a Multilingual Website in Telugu, Hindi and English",
  description: "Serving customers in Telugu or Hindi can widen your reach. Here's how to plan, build and rank a multilingual website without duplicate-content problems.",
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
            {["Multilingual", "SEO"].map((tag) => (
              <span key={tag} className="text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 border border-hairline text-muted" style={sans}>{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl italic text-foreground max-w-3xl mx-auto leading-[1.2]">How to Build a Multilingual Website in Telugu, Hindi and English</h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
          <p className="text-sm text-muted leading-relaxed" style={sans}>Telugu is the official language of Andhra Pradesh and Telangana and is spoken natively by over 80 million people. Hindi reaches another 500 million. Many of your potential customers are more comfortable reading in their native language, particularly for decisions involving money, health or education. A multilingual website does not just widen your reach — it signals respect and builds trust in ways an English-only site cannot.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>The challenge is doing it correctly. Duplicate content, missing hreflang tags and poor font rendering are the three most common problems that turn a good intention into an SEO liability. This guide walks through all eight steps. For the SEO foundation that multilingual sites build on, read our <Link href="/blog/nextjs-seo-guide" className="text-brand-green hover:underline">Next.js SEO guide</Link>.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Step 1: Translate first, build second</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>The most common mistake is building the English site and planning to &ldquo;add translations later&rdquo;. Later rarely comes, or it comes in the form of machine-translated text that embarrasses the brand. Before writing a single line of code, decide which pages you are translating, have a human (not just machine translation) write the content in each language and treat the translations as first-class content, not an afterthought.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>You do not need to translate everything on day one. A sensible minimum viable multilingual site includes the homepage, the services or products page, the contact page and your top two or three highest-traffic blog posts. Everything else can follow in later phases.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Step 2: Use a professional translator, not just a machine</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Google Translate and DeepL have improved dramatically, but they still produce unnatural-sounding Telugu and Hindi in ways that native speakers immediately detect. For marketing copy in particular — headlines, taglines and calls to action — a human translator is worth the cost. Machine translation works reasonably well for first-draft content that a human then reviews and corrects.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>For Telugu specifically, also decide whether you are targeting formal Telugu (the standard written form used in official communication) or more colloquial, conversational Telugu. The right register depends on your audience. A government-facing service and a lifestyle brand need very different voices.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Step 3: Choose the right URL structure</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>This is the most consequential technical decision. There are three common approaches, each with tradeoffs:</p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-muted border-collapse" style={sans}>
              <thead>
                <tr className="border-b border-hairline">
                  <th className="text-left py-2 pr-4 text-foreground font-normal italic">Structure</th>
                  <th className="text-left py-2 pr-4 text-foreground font-normal italic">Example</th>
                  <th className="text-left py-2 pr-4 text-foreground font-normal italic">Best for</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4">Subdirectory</td>
                  <td className="py-2 pr-4">site.com/te/ and site.com/hi/</td>
                  <td className="py-2 pr-4">Most small businesses — all authority on one domain</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4">Subdomain</td>
                  <td className="py-2 pr-4">te.site.com and hi.site.com</td>
                  <td className="py-2 pr-4">Larger organisations needing separate deployments</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4">Separate domain</td>
                  <td className="py-2 pr-4">site.com and site.in</td>
                  <td className="py-2 pr-4">International businesses with large regional teams</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-muted leading-relaxed" style={sans}>For small businesses in India targeting Telugu and Hindi speakers, the subdirectory approach (site.com/te/ and site.com/hi/) is almost always the best choice. It keeps all your SEO authority on one domain, is the simplest to implement in Next.js and is fully supported by Google.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Step 4: Implement hreflang tags correctly</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Hreflang tags tell Google which language version of a page to show to which user. Without them, Google may show the English version to Telugu speakers — which is both a poor user experience and a wasted ranking opportunity.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Each page needs a set of hreflang link elements in the &lt;head&gt; listing all language versions including itself. Here is what the head section of your English homepage should include:</p>

          <div className="overflow-x-auto rounded border border-hairline">
            <pre className="p-4 text-xs text-muted leading-relaxed overflow-x-auto" style={sans}><code>{`<link rel="alternate" hreflang="en" href="https://yoursite.com/" />
<link rel="alternate" hreflang="te" href="https://yoursite.com/te/" />
<link rel="alternate" hreflang="hi" href="https://yoursite.com/hi/" />
<link rel="alternate" hreflang="x-default" href="https://yoursite.com/" />`}</code></pre>
          </div>

          <p className="text-sm text-muted leading-relaxed" style={sans}>The x-default tag tells Google which version to show when no other language match is found. Set it to your English (or most complete) version. The hreflang attribute uses ISO 639-1 language codes: &ldquo;en&rdquo; for English, &ldquo;te&rdquo; for Telugu, &ldquo;hi&rdquo; for Hindi. If you need to target a specific region as well (for example, Hindi speakers in India specifically), you can use &ldquo;hi-IN&rdquo;.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>A common mistake is adding hreflang only to the English pages. Every language version of every page must include the full set of hreflang tags. If the Telugu homepage does not reference the English homepage and the Hindi homepage in its hreflang set, the tags are invalid and Google ignores them. For more on technical implementation like this, see our <Link href="/blog/technical-seo-checklist" className="text-brand-green hover:underline">technical SEO checklist</Link>.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Step 5: Let visitors choose their language</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Do not force a redirect based on browser language or IP address alone. Browser language settings are often incorrect, and IP-based redirects frustrate people travelling or using VPNs. Instead, detect the preferred language and suggest it — &ldquo;Would you like to view this site in Telugu?&rdquo; — but always give the visitor the choice to override.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Place the language switcher in both the navigation (top right is the standard location) and the footer. Use the name of the language in that language — &ldquo;తెలుగు&rdquo; not &ldquo;Telugu&rdquo;, and &ldquo;हिन्दी&rdquo; not &ldquo;Hindi&rdquo;. This matters especially for users who are not literate in English.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Step 6: Choose fonts that render all three scripts</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Telugu script has complex glyphs with many ligatures (combined character forms). Many popular fonts do not include Telugu support and will fall back to ugly system fonts. Choose fonts that explicitly support Telugu and Hindi (Devanagari) alongside Latin characters.</p>

          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Noto Sans Telugu</strong> — Google&apos;s Noto family is specifically designed to support all world scripts without tofu (empty boxes for missing characters). Use Noto Sans Telugu for body text and Noto Serif Telugu for headings.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Poppins or Inter for Latin</strong> — both include partial Devanagari support. If you want a consistent look across Hindi and English body text, Inter with Noto Sans Devanagari as a fallback works well.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Load only the character subsets you need. Google Fonts allows you to specify &ldquo;subset=telugu,latin&rdquo; in the URL to avoid loading the full character set, which keeps the font file size small and pages fast.</span>
            </li>
          </ul>

          <p className="text-sm text-muted leading-relaxed" style={sans}>For the full process of choosing a font system that works across your brand, read our <Link href="/blog/choose-brand-colours-fonts" className="text-brand-green hover:underline">guide to choosing brand colours and fonts</Link>.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Step 7: Set up internationalisation in Next.js</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Next.js has built-in i18n routing support in the App Router. Add a locale configuration to your next.config.js and use the locale segment in your app directory structure to separate language versions cleanly.</p>

          <div className="overflow-x-auto rounded border border-hairline">
            <pre className="p-4 text-xs text-muted leading-relaxed overflow-x-auto" style={sans}><code>{`// next.config.js
module.exports = {
  i18n: {
    locales: ['en', 'te', 'hi'],
    defaultLocale: 'en',
  },
};

// App Router directory structure:
// app/
//   [locale]/
//     layout.tsx   ← sets lang attribute on <html>
//     page.tsx     ← homepage
//     blog/
//       [slug]/
//         page.tsx`}</code></pre>
          </div>

          <p className="text-sm text-muted leading-relaxed" style={sans}>In the layout.tsx for each locale, set the lang attribute on the html element to the correct ISO code: &ldquo;te&rdquo; for Telugu, &ldquo;hi&rdquo; for Hindi. This is important for screen readers and for browsers to apply correct font shaping rules for complex scripts. Use the next-intl library for managing translation strings in a maintainable way across many pages.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Step 8: The rest of the multilingual journey</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Once your pages are live, there are ongoing tasks to keep the multilingual site healthy. Keep translations in sync — when you update the English version of a page, update all other language versions promptly. A Telugu page that describes an old offer or outdated pricing is worse than no Telugu page at all.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Submit a separate sitemap for each language version, or include all languages in a single sitemap with hreflang annotations. Monitor each language separately in Google Search Console by adding each URL prefix (site.com/te/, site.com/hi/) as a separate property. This lets you see indexing issues and performance data for each language independently.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>For schools and educational institutions in Andhra Pradesh and Telangana, the multilingual approach is particularly valuable. Parents in rural areas often search in Telugu for their children&apos;s school information. See how we implement this in our <Link href="/blog/school-website-design" className="text-brand-green hover:underline">school website design guide</Link>.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">FAQs</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong className="text-foreground font-normal">Will having pages in Telugu and Hindi hurt my English SEO?</strong> No — done correctly, it will help it. Separate language URLs are treated as separate pages by Google. Each can rank in its own language&apos;s search results without affecting the others. The only risk is if you accidentally set up the hreflang tags incorrectly, which can confuse Google about which version to show. Follow step 4 carefully.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong className="text-foreground font-normal">Can I use Google Translate to generate my Telugu content?</strong> You can use it as a starting point, but you must have a fluent Telugu speaker review and edit the output before publishing. Machine translation errors in Telugu are especially visible in headlines and CTAs, where the phrasing tends to be unnatural. For body copy on simple, factual pages, heavily edited machine translation is acceptable.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong className="text-foreground font-normal">How much does it cost to add Telugu and Hindi to an existing site?</strong> The translation cost depends on the volume of content and the translator rates — typically ₹0.70–₹2 per word for professional translation. The technical implementation in Next.js is a one-time setup cost. At LaunchCraft, we build multilingual support into the architecture from the start to avoid expensive retrofitting later. <Link href="/contact" className="text-brand-green hover:underline">Contact us</Link> to discuss your specific situation.</p>
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
