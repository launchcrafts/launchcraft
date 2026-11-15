import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/landing-page-design-elements`;

export const metadata: Metadata = {
  title: "Landing Page Design: 11 Elements of a Page That Converts",
  description: "A landing page has one job: get one action. These 11 elements, from the headline to the form, are what separate pages that convert from pages that leak.",
  keywords: [
    "landing page design",
    "high converting landing page",
    "landing page best practices",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Landing Page Design: 11 Elements of a Page That Converts | LaunchCraft",
    description: "A landing page has one job: get one action. These 11 elements, from the headline to the form, are what separate pages that convert from pages that leak.",
    url,
    type: "article",
    publishedTime: "2026-11-15",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing Page Design: 11 Elements of a Page That Converts",
    description: "A landing page has one job: get one action. These 11 elements, from the headline to the form, are what separate pages that convert from pages that leak.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "Landing Page Design: 11 Elements of a Page That Converts", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Landing Page Design: 11 Elements of a Page That Converts",
  description: "A landing page has one job: get one action. These 11 elements, from the headline to the form, are what separate pages that convert from pages that leak.",
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
            {["Landing Page Design", "High Converting Landing Page", "Landing Page Best Practices"].map((tag) => (
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
            Landing Page Design: 11 Elements of a Page That Converts
          </h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
            <p className="text-sm text-muted leading-relaxed" style={sans}>A landing page is a single page built for one goal: a booking, a call, a sign-up or a sale. Unlike your homepage, it does not try to explain everything. It answers one visitor’s question and asks for one action. These are the 11 elements we build into every landing page.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Above the fold</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">A headline that matches the ad or search. If someone clicked "knee pain physiotherapy in Vijayawada", the headline should say that, not "Welcome to our clinic". Matching the visitor’s words tells them they are in the right place.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">A subheading with the outcome. One line on what they get and how fast: "Book a same-week assessment with a senior physiotherapist."</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">One clear call to action. One button, one action, in a colour that stands out. Repeat it further down the page, but never offer three competing choices.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">A relevant hero image. A real photo of your team, product or result beats stock images every time.</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Building trust</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Social proof near the top. Star ratings, review counts, client logos or a short testimonial with a name and photo.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Benefits, not features. "No waiting room queues" lands better than "online booking system". Use three to five short points.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Proof it works. Before-and-after results, a short case study or numbers you can stand behind.</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Removing doubt</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Answer objections. A short FAQ covering price, timing, location and what happens next.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">A short form. Ask only for what you need to follow up. Every extra field loses some visitors. Name and phone number is often enough to start.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Risk reversal. A clear refund policy, a free first consultation or "no obligation" wording lowers the barrier.</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Behind the scenes</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Speed and tracking. A landing page should load in under about 2.5 seconds on a phone and track every form submit, call click and WhatsApp click as a conversion. If you cannot measure it, you cannot improve it.</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">What to leave out</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">The full site navigation menu (it gives visitors exits)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Long company history</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Auto-playing videos with sound</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Pop-ups that appear before the visitor has read anything</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">How to test and improve</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Change one thing at a time: the headline, the button text or the form length. Run each version until you have enough visits to be confident, then keep the winner. Small changes to the headline and offer usually move the needle more than colour changes.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">FAQs</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>What is a good landing page conversion rate? It depends heavily on the industry, offer and traffic source. Benchmark against your own past pages, then aim to beat them.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Should a landing page be long or short? Short for simple, low-cost offers. Longer for expensive or complex services, where people need more reassurance before they act.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Can I use my homepage as a landing page for ads? You can, but a dedicated page that matches the ad almost always converts better.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Next step</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Running ads to a page that does not convert? We design and build fast landing pages in Next.js with tracking set up. Get in touch.</p>
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
