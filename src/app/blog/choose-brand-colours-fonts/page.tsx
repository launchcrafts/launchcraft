import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/choose-brand-colours-fonts`;

export const metadata: Metadata = {
  title: "How to Choose Brand Colours and Fonts for Your Website",
  description: "The right colours and fonts make a site feel trustworthy in seconds. Here is a simple, practical way to pick a palette and font pair that work on screen.",
  keywords: [
    "brand colours and fonts",
    "website colour palette",
    "font pairing for website",
    "colour psychology branding",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "How to Choose Brand Colours and Fonts for Your Website | LaunchCraft",
    description: "The right colours and fonts make a site feel trustworthy in seconds. Here is a simple, practical way to pick a palette and font pair that work on screen.",
    url,
    type: "article",
    publishedTime: "2026-11-15",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Choose Brand Colours and Fonts for Your Website",
    description: "The right colours and fonts make a site feel trustworthy in seconds. Here is a simple, practical way to pick a palette and font pair that work on screen.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "How to Choose Brand Colours and Fonts for Your Website", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Choose Brand Colours and Fonts for Your Website",
  description: "The right colours and fonts make a site feel trustworthy in seconds. Here is a simple, practical way to pick a palette and font pair that work on screen.",
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
            {["Brand Colours And Fonts", "Website Colour Palette", "Font Pairing For Website", "Colour Psychology Branding"].map((tag) => (
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
            How to Choose Brand Colours and Fonts for Your Website
          </h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
            <p className="text-sm text-muted leading-relaxed" style={sans}>Colours and fonts are the first things people notice on your website, often before they read a single word. The right choices make you look established and easy to trust. The wrong ones make a good business look cheap or hard to read. You do not need a design degree to choose well. Follow these steps.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Step 1: Start with how you want people to feel</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Write three words that describe your brand, such as "calm, expert, caring" for a clinic or "bold, modern, fast" for a tech company. Every colour and font choice should support those words.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Step 2: Pick one main colour</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Colour meanings vary by culture and context, so treat these as starting points, not rules:</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Look at your three closest competitors. If they all use blue, a different main colour helps you stand out.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Step 3: Build a small palette</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>A simple and reliable approach is the 60-30-10 split:</p>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">60% neutral: white, off-white or a very light tint for backgrounds</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">30% supporting colour: a deeper shade for headers, sections and footers</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">10% accent: your brightest colour, saved for buttons and key links</span>
                </li>
            </ul>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Keeping the accent rare makes your call-to-action buttons stand out.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Step 4: Check contrast so everyone can read it</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Text must stand out clearly from its background. The WCAG accessibility guidelines ask for a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text. Free contrast checkers show the ratio instantly. Light grey text on white almost always fails.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Step 5: Choose two fonts, not five</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">One heading font with personality: a strong sans-serif for modern brands, or a serif for traditional and premium brands</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">One body font that is easy to read at small sizes on a phone</span>
                </li>
            </ul>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Reliable free pairings from Google Fonts include Poppins with Inter, Playfair Display with Source Sans 3, and Lora with Open Sans. If you publish in Telugu or Hindi, check the font supports those scripts, or pair it with one from the Noto family.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Step 6: Test it on real pages</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Put your palette and fonts on a homepage draft, a service page and a phone screen. Check it in bright sunlight on a mobile, too. Adjust before you commit.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Step 7: Write it down</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Record the exact colour codes (HEX), font names, sizes and where each is used. In a Next.js site, store them as design tokens in your theme so the whole site stays consistent.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Mistakes to avoid</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Using a different colour for every section</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Bright colours for body text</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Decorative script fonts for paragraphs</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Choosing a colour just because you like it, without checking how it feels to customers</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">FAQs</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>How many fonts should a website use? Two is ideal: one for headings, one for body text.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Should my website colours match my logo? Yes. Use your logo colours as the base and add neutral and accent shades around them.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Are free Google Fonts good enough? Yes. Many are professionally designed, load quickly and are free for commercial use.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Next step</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Want a colour and type system designed for your brand? Try our free AI logo maker for ideas, or ask us about brand identity.</p>
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
