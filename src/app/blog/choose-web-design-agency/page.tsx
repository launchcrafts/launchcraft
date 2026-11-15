import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/choose-web-design-agency`;

export const metadata: Metadata = {
  title: "How to Choose a Web Design Agency: 12 Questions to Ask Before You Sign",
  description: "The wrong agency costs you months and money. Ask these 12 questions before you sign, and learn which answers should make you walk away.",
  keywords: [
    "how to choose a web design agency",
    "web design company in india",
    "questions to ask a web designer",
    "hire web developer",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "How to Choose a Web Design Agency: 12 Questions to Ask Before You Sign | LaunchCraft",
    description: "The wrong agency costs you months and money. Ask these 12 questions before you sign, and learn which answers should make you walk away.",
    url,
    type: "article",
    publishedTime: "2026-11-15",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Choose a Web Design Agency: 12 Questions to Ask Before You Sign",
    description: "The wrong agency costs you months and money. Ask these 12 questions before you sign, and learn which answers should make you walk away.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "How to Choose a Web Design Agency: 12 Questions to Ask Before You Sign", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Choose a Web Design Agency: 12 Questions to Ask Before You Sign",
  description: "The wrong agency costs you months and money. Ask these 12 questions before you sign, and learn which answers should make you walk away.",
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
            {["How To Choose A Web Design Agency", "Web Design Company In India", "Questions To Ask A Web Designer", "Hire Web Developer"].map((tag) => (
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
            How to Choose a Web Design Agency: 12 Questions to Ask Before You Sign
          </h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
            <p className="text-sm text-muted leading-relaxed" style={sans}>Choosing a web design agency is a bigger decision than it looks. The right partner gives you a site that brings in business for years. The wrong one leaves you with a slow site you cannot edit, a domain you do not own and a team that stops replying after launch. These 12 questions will help you tell the difference before you sign.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">About their work</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Can I see sites you built for businesses like mine? Ask for live links, not just screenshots. Open them on your phone and check how fast they load.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Can I speak to two past clients? Good agencies are happy to connect you. Ask those clients what went wrong and how it was fixed.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">What results did those sites deliver? Look for evidence such as more enquiries, better rankings or faster load times, not just "the client loved it".</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">About the process</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">What is your process, step by step? You should hear about research, a sitemap, wireframes, design, build, testing and launch, with clear sign-off points.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">How many revision rounds are included? Get it in writing, along with what happens if you need more.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Who will actually work on my project? Find out if the work is done in-house or passed to freelancers, and who your main contact is.</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">About the technology</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">What will the site be built with, and why? A good agency explains the choice for your needs, whether that is a custom Next.js build, a headless CMS or a simpler builder. Be wary of one answer for every client.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Will I be able to edit the content myself? Ask for a demo of the editing screen before you sign.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">How do you handle speed, SEO and security? Basics such as fast loading, mobile design, metadata, redirects, backups and HTTPS should be included, not extras. See [Post 1] and [Post 5].</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">About ownership and cost</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Who owns the domain, hosting, design files and code? You should. Make sure the domain and hosting accounts are in your name.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">What exactly is included in the price? Ask for an itemised quote and a first-year total, including hosting, maintenance and any licences. See [Post 3].</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">What happens after launch? Ask about support response times, maintenance plans and the cost of small changes.</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Red flags</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">A fixed price before they understand your goals</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">No contract or written scope</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">"We guarantee first page on Google"</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">They will not show live sites or connect you with clients</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">The domain is registered in their name</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Pressure to sign today for a discount</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Green flags</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">They ask about your customers and goals before talking about design</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">They push back on ideas that will not help your business</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">They explain technical choices in plain language</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Clear timelines, a written scope and payment stages tied to milestones</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Comparing agencies side by side</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Fill this in after each call. The best choice is rarely the cheapest or the most expensive; it is the one that scores well across the board.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">FAQs</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Freelancer or agency: which is better? A freelancer can be great for a small, simple site. An agency is usually safer when you need design, development, SEO and support together, or a reliable team if one person is unavailable.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Should I choose a local agency? Local helps with meetings and understanding your market, but good agencies work remotely too. Focus on fit and track record.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>How long should a website project take? Small sites often take 2–4 weeks; custom builds 6–12 weeks. Delays usually come from content and feedback, so plan for both.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Next step</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>We are happy to be measured against these 12 questions. See our work and book a no-pressure call.</p>
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
