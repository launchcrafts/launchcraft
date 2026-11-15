import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/ux-mistakes-conversion-rate`;

export const metadata: Metadata = {
  title: "9 UX Mistakes That Quietly Hurt Your Conversion Rate",
  description: "Visitors rarely complain; they just leave. These 9 common UX mistakes cost enquiries every day, and each one has a quick, practical fix.",
  keywords: [
    "ux mistakes",
    "website ux problems",
    "improve conversion rate",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "9 UX Mistakes That Quietly Hurt Your Conversion Rate | LaunchCraft",
    description: "Visitors rarely complain; they just leave. These 9 common UX mistakes cost enquiries every day, and each one has a quick, practical fix.",
    url,
    type: "article",
    publishedTime: "2026-11-15",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "9 UX Mistakes That Quietly Hurt Your Conversion Rate",
    description: "Visitors rarely complain; they just leave. These 9 common UX mistakes cost enquiries every day, and each one has a quick, practical fix.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "9 UX Mistakes That Quietly Hurt Your Conversion Rate", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "9 UX Mistakes That Quietly Hurt Your Conversion Rate",
  description: "Visitors rarely complain; they just leave. These 9 common UX mistakes cost enquiries every day, and each one has a quick, practical fix.",
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
            {["Ux Mistakes", "Website Ux Problems", "Improve Conversion Rate"].map((tag) => (
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
            9 UX Mistakes That Quietly Hurt Your Conversion Rate
          </h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
            <p className="text-sm text-muted leading-relaxed" style={sans}>Most visitors who struggle on your website do not complain. They leave and book with a competitor. The good news is that the same few UX mistakes show up on most small-business sites, and each one has a simple fix. Here are the nine we see most often.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">1. The phone experience is an afterthought</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>For most local businesses, the majority of visitors are on a phone. If buttons are tiny, text needs zooming or menus cover the screen, they give up. Fix: design for the phone first, then scale up. Make tap targets at least finger-sized and test on a real mid-range Android phone.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">2. Visitors cannot tell what you do in five seconds</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>A vague headline like "Excellence in every step" forces people to dig. Fix: say what you do, for whom and where in the first line: "Paediatric therapy for children in Vijayawada."</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">3. The main action is hidden</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>If "Book now", "Call" or "WhatsApp us" is buried at the bottom, many people never find it. Fix: put one clear call to action in the header and repeat it after each key section. On mobile, a sticky call or WhatsApp button works well.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">4. Forms ask for too much</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Every extra field is one more reason to quit. Fix: ask only what you need to follow up. Move everything else to the first call.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">5. The page is slow</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>People do not wait for slow pages, especially on mobile data. Fix: compress images, remove unused scripts and pass Core Web Vitals. See [Post 2].</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">6. Navigation uses your words, not theirs</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Menu items like "Solutions" or "Offerings" mean little to a visitor. Fix: use the words people search for: "Services", "Prices", "Book an appointment", "Contact". Keep the main menu to about five to seven items.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">7. No proof that you are trustworthy</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>New visitors want evidence before they call. Fix: show reviews with names, real photos of your team and work, and any certifications near the top of key pages.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">8. Text is hard to read</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Light grey text on white, tiny fonts and long blocks of copy all push people away. Fix: use strong contrast, a body size of about 16px or more and short paragraphs with clear headings.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">9. Pop-ups block the page</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>A pop-up that appears the moment the page loads interrupts visitors before they know why they should care. Fix: delay offers until someone has scrolled or spent time on the page, and make them easy to close.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">How to find your own UX problems</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Watch real sessions. Tools such as Microsoft Clarity record visits so you can see where people hesitate.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Check where people drop off. In your analytics, look for pages with many visits but few clicks to the next step.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Ask five people. Give them a task ("book an appointment") and watch without helping. You will spot most big issues quickly.</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">FAQs</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>What is the difference between UX and UI? UI is how the site looks: colours, type, buttons. UX is how it works for the visitor: whether they can find what they need and act easily.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>How do I know if my website has UX problems? High bounce rates, few form submissions and many visits that end on one page are common signs.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Do I need a full redesign to fix UX? Often not. Fixing the headline, call to action, forms and speed can make a big difference on its own.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Next step</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Want a quick UX review of your site? Send us your URL and we will point out the three changes that matter most.</p>
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
