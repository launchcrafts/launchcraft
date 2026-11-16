import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/homepage-design`;

export const metadata: Metadata = {
  title: "Homepage Design: What to Put on Your Homepage, Section by Section",
  description: "Your homepage has a few seconds to say what you do and send people to the right place. Here's the section order we use on LaunchCraft builds.",
  keywords: ["homepage design", "what to put on a homepage", "homepage layout", "above the fold"],
  alternates: { canonical: url },
  openGraph: {
    title: "Homepage Design: What to Put on Your Homepage, Section by Section | LaunchCraft",
    description: "Your homepage has a few seconds to say what you do and send people to the right place. Here's the section order we use on LaunchCraft builds.",
    url,
    type: "article",
    publishedTime: "2026-11-17",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Homepage Design: What to Put on Your Homepage, Section by Section",
    description: "Your homepage has a few seconds to say what you do and send people to the right place. Here's the section order we use on LaunchCraft builds.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "Homepage Design: What to Put on Your Homepage, Section by Section", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Homepage Design: What to Put on Your Homepage, Section by Section",
  description: "Your homepage has a few seconds to say what you do and send people to the right place. Here's the section order we use on LaunchCraft builds.",
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
            {["Web Design", "UX"].map((tag) => (
              <span key={tag} className="text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 border border-hairline text-muted" style={sans}>{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl italic text-foreground max-w-3xl mx-auto leading-[1.2]">Homepage Design: What to Put on Your Homepage, Section by Section</h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
          <p className="text-sm text-muted leading-relaxed" style={sans}>A homepage is not a brochure. It is a decision engine. Every visitor arrives with a question — usually some version of &ldquo;Is this for me?&rdquo; — and your homepage has about five seconds to answer yes and point them in the right direction. This post walks through the section order we use on LaunchCraft builds and explains why each section earns its place.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">The five-second test</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Before designing a single section, run the five-second test: show your existing homepage (or a rough mockup) to someone unfamiliar with your business for exactly five seconds. Then ask: What does this company do? Who is it for? What should you do next? If they cannot answer all three, your homepage is not doing its job. The design decisions below are all in service of passing this test.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">The 11 sections in order</h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-muted border-collapse" style={sans}>
              <thead>
                <tr className="border-b border-hairline">
                  <th className="text-left py-2 pr-4 text-foreground font-normal italic">Position</th>
                  <th className="text-left py-2 pr-4 text-foreground font-normal italic">Section</th>
                  <th className="text-left py-2 pr-4 text-foreground font-normal italic">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4">1</td>
                  <td className="py-2 pr-4">Navigation</td>
                  <td className="py-2 pr-4">Wayfinding — where can I go?</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4">2</td>
                  <td className="py-2 pr-4">Hero</td>
                  <td className="py-2 pr-4">What do you do and for whom?</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4">3</td>
                  <td className="py-2 pr-4">Social proof strip</td>
                  <td className="py-2 pr-4">Quick trust signal before scrolling</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4">4</td>
                  <td className="py-2 pr-4">Problem / outcome</td>
                  <td className="py-2 pr-4">Show you understand their situation</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4">5</td>
                  <td className="py-2 pr-4">Services overview</td>
                  <td className="py-2 pr-4">What do you offer? Link to detail pages</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4">6</td>
                  <td className="py-2 pr-4">How it works</td>
                  <td className="py-2 pr-4">Reduce anxiety about the process</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4">7</td>
                  <td className="py-2 pr-4">Featured work / case studies</td>
                  <td className="py-2 pr-4">Prove you can do what you say</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4">8</td>
                  <td className="py-2 pr-4">Testimonials</td>
                  <td className="py-2 pr-4">Third-party validation</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4">9</td>
                  <td className="py-2 pr-4">About / why us</td>
                  <td className="py-2 pr-4">The team behind the work</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4">10</td>
                  <td className="py-2 pr-4">FAQ</td>
                  <td className="py-2 pr-4">Overcome last objections</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4">11</td>
                  <td className="py-2 pr-4">CTA / footer</td>
                  <td className="py-2 pr-4">Make the next step obvious</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">The hero section in detail</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>The hero is the most valuable real estate on your website. It is what everyone sees; it is what most people use to decide whether to keep scrolling. A good hero has four elements: a headline that states the outcome you deliver, a subheading that describes who you help and how, a primary call to action and a visual that shows the result or the experience of working with you.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Three headline formulas that work for small businesses:</p>

          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Outcome formula:</strong> &ldquo;Websites that bring patients to your clinic — not just visits to your page.&rdquo; Leads with the result the customer wants.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Problem formula:</strong> &ldquo;Tired of a website that looks outdated and brings in zero leads?&rdquo; Calls out the pain first, then positions your solution in the subheading.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Who + what formula:</strong> &ldquo;For Hyderabad clinics and studios — fast, beautiful websites that rank locally.&rdquo; Leads with the specific audience, so the right people immediately feel it is for them.</span>
            </li>
          </ul>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Avoid clever wordplay and abstract brand language in the hero. &ldquo;Connecting possibilities&rdquo; means nothing. &ldquo;Website design for restaurants in Bangalore&rdquo; means everything to the right visitor.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Homepage design rules</h3>

          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">One primary CTA above the fold.</strong> Every section can have a secondary action, but above the fold there should be one clear button — not three. Multiple competing CTAs create decision paralysis and lower click-through rates on all of them.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Repeat the CTA at the bottom.</strong> The visitor who reads all the way to the footer is highly interested. Do not make them scroll back up to contact you. Place a full CTA section just above the footer.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Use whitespace generously.</strong> Every element competes for attention. Whitespace is not empty — it is what lets the important things breathe. Dense, cluttered homepages feel untrustworthy and tiring to read.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Mobile comes first.</strong> More than 60% of small business website traffic comes from phones. Design the mobile layout before the desktop layout. If a section works on mobile, it will work on desktop. The reverse is not always true.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Limit to three fonts maximum — usually two.</strong> More fonts signal amateur design. Use one font for headings (ideally a serif or display type for personality) and one for body text (a clean sans-serif). Read our <Link href="/blog/choose-brand-colours-fonts" className="text-brand-green hover:underline">guide to choosing brand colours and fonts</Link> for the full selection process.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Scroll animations should enhance, not delay.</strong> Animations that reveal content as you scroll are fine if subtle and fast (under 300ms). Long delays or animations that require waiting before reading create frustration and inflate perceived load time.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Homepage SEO</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Your homepage will usually rank for your brand name automatically. What you should also optimise it for is your primary category — the broadest description of what you offer in the city where you operate. For a Pune-based accountancy firm, that might be &ldquo;accounting firm Pune&rdquo;. For a Vizag restaurant, it might be &ldquo;restaurants in Vizag&rdquo;.</p>

          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">The H1 should include your primary keyword naturally. It does not have to be a plain keyword — &ldquo;Website design agency in Hyderabad&rdquo; works as an H1.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Write at least 300 words of indexable content on the homepage. Hero text alone is not enough for Google to understand what you do. The services section, how-it-works copy and FAQ all contribute.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Use internal links from the homepage to your most important service and blog pages. The homepage has the highest authority of any page on your site, and internal links pass some of that authority to the linked pages.</span>
            </li>
          </ul>

          <p className="text-sm text-muted leading-relaxed" style={sans}>For more on specific landing page elements that drive conversions, read our <Link href="/blog/landing-page-design-elements" className="text-brand-green hover:underline">landing page design elements guide</Link>. For the UX mistakes that quietly kill conversions on well-designed pages, see <Link href="/blog/ux-mistakes-conversion-rate" className="text-brand-green hover:underline">UX mistakes that hurt conversion rate</Link>.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Common homepage mistakes</h3>

          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Starting with &ldquo;Welcome to our website.&rdquo;</strong> This tells the visitor nothing and wastes the most valuable first line. Lead with what you do and for whom.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Hero videos that autoplay with sound.</strong> Autoplaying video is startling, particularly in a quiet environment. Use video only as a background visual with no audio, or as a click-to-play element lower on the page.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Generic stock photos of people shaking hands.</strong> These are immediately read as false. Use real photos of your team, your work and your space. If you have no photos yet, an abstract or typographic treatment is better than stock people.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">An awards section no one recognises.</strong> Third-party logos are trust signals only if the visitor recognises the brand. Unknown award logos with unfamiliar names can actually reduce trust.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">No clear next step for warm leads.</strong> A visitor who has read the whole page and wants to get in touch should not have to hunt for the contact button. Make the CTA sticky on mobile so it is always one tap away.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">How to measure homepage performance</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Three metrics tell you most of what you need to know about how your homepage is performing. Set these up in Google Analytics 4 before you start redesigning, so you have a baseline to compare against. See our <Link href="/blog/track-website-leads-ga4" className="text-brand-green hover:underline">GA4 lead tracking guide</Link> for the full setup.</p>

          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Scroll depth.</strong> What percentage of visitors reach the bottom of the page? If fewer than 20% reach the fourth section, your first three sections are losing people.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">CTA click rate.</strong> What percentage of visitors click the primary CTA? If it is below 2%, either the CTA is unclear, the button is hard to find or the page has not persuaded visitors enough before they reach it.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Exit rate.</strong> What percentage of visitors who start on the homepage leave the site entirely from the homepage? A high exit rate (above 70%) suggests the homepage is not connecting visitors to the deeper content they need.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">FAQs</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong className="text-foreground font-normal">Should my homepage have a lot of text or keep it minimal?</strong> Both approaches can work, but the split depends on your audience and product complexity. Simple local services (a salon, a restaurant) need less copy because the offer is immediately understood. Complex services (software, consulting, healthcare) need more words to explain the nuance and build trust. Err on the side of clear and complete over minimal and ambiguous.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong className="text-foreground font-normal">Should I put pricing on my homepage?</strong> For fixed-price products and clear packages, yes — pricing transparency builds trust and pre-qualifies leads. For custom-quote services, a starting price (&ldquo;from ₹25,000&rdquo;) or a price range is better than nothing. &ldquo;Contact us for pricing&rdquo; with no indication at all is the worst option; it creates anxiety and drives visitors to competitors who do show pricing.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong className="text-foreground font-normal">How often should I update my homepage?</strong> Review the hero section every six months and ask whether the offer, the proof points and the CTA still reflect your business accurately. Update the work and testimonial sections whenever you have new examples. The underlying structure rarely needs to change — the content inside it does.</p>
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
