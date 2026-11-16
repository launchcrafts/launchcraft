import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/real-estate-website-design`;

export const metadata: Metadata = {
  title: "Real Estate Website Design: What Buyers Expect (and the RERA Details to Show)",
  description: "Homebuyers research for weeks before they call. Here's how builders and agents design property websites that earn trust, generate leads and show RERA details.",
  keywords: ["real estate website design", "builder website design", "rera details on website", "property website features"],
  alternates: { canonical: url },
  openGraph: {
    title: "Real Estate Website Design: What Buyers Expect (and the RERA Details to Show) | LaunchCraft",
    description: "Homebuyers research for weeks before they call. Here's how builders and agents design property websites that earn trust, generate leads and show RERA details.",
    url,
    type: "article",
    publishedTime: "2026-11-17",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Website Design: What Buyers Expect (and the RERA Details to Show)",
    description: "Homebuyers research for weeks before they call. Here's how builders and agents design property websites that earn trust, generate leads and show RERA details.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "Real Estate Website Design: What Buyers Expect (and the RERA Details to Show)", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Real Estate Website Design: What Buyers Expect (and the RERA Details to Show)",
  description: "Homebuyers research for weeks before they call. Here's how builders and agents design property websites that earn trust, generate leads and show RERA details.",
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
            {["Real Estate", "Web Design"].map((tag) => (
              <span key={tag} className="text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 border border-hairline text-muted" style={sans}>{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl italic text-foreground max-w-3xl mx-auto leading-[1.2]">Real Estate Website Design: What Buyers Expect (and the RERA Details to Show)</h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
          <p className="text-sm text-muted leading-relaxed" style={sans}>Buying a home is the largest financial decision most families ever make. Before a buyer calls or visits a site office, they spend days — sometimes weeks — researching online. They compare projects, check layouts, read about the builder and look for any red flags. If your website does not give them the information and confidence they need, they simply move to a competitor who does.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>This guide covers what a property website needs to earn trust and generate serious leads, with a specific section on RERA disclosure requirements that every builder and registered agent must meet.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">RERA details: what the law requires you to show</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>The Real Estate (Regulation and Development) Act, 2016, and the state RERA rules that implement it set clear rules about what a promoter (builder) or registered real estate agent must display publicly. Violations can result in penalties. This is not optional website copy — it is a legal requirement.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong>RERA registration number.</strong> Every registered project must display its RERA registration number prominently on the website, in all advertisements and on all marketing materials. Display it on the homepage, the project page and in the footer. Do not hide it in small print.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong>QR code linking to the RERA portal.</strong> Many state RERA portals now require or strongly recommend including a QR code that links directly to the project&rsquo;s page on the state RERA website, so buyers can verify details independently. Include this on the project page and in brochures.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong>Agent registration number.</strong> If you are a registered real estate agent (not a builder), you must also display your RERA agent registration number on your website, in advertisements and in correspondence with clients.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong>No registration, no advertising.</strong> Under RERA, a project that has not yet received registration cannot be advertised, marketed or sold. Do not publish a project page until the RERA number is confirmed. This applies to social media, Google Ads and your own website alike.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>State rules vary — check Telangana RERA, MahaRERA, Karnataka RERA or the relevant authority for your state&rsquo;s specific display requirements. This post is not legal advice; consult a property lawyer if you are unsure.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Pages a builder&rsquo;s website needs</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong>Projects list page.</strong> A clean, filterable overview of all current, upcoming and completed projects. Filters by city, project type (apartment, villa, plot, commercial) and status (under construction, ready to move, completed) help buyers find relevant projects quickly. Each listing card should show the project name, location, configuration (2BHK, 3BHK, etc.), price range and RERA number.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong>Individual project pages.</strong> Each project deserves its own full page. This should include: location and connectivity (metro, schools, hospitals, highways within reach), floor plans for each configuration, pricing details or &ldquo;price on request&rdquo;, amenities list, project highlights, master plan, RERA registration number and QR code, expected possession date and construction status. These pages are what rank in Google when buyers search for the project name or &ldquo;apartments in [area]&rdquo;.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong>Construction updates.</strong> A regularly updated section with photos and progress notes builds confidence during the long wait between booking and possession. Buyers who can track progress feel less anxious and are less likely to cancel. Automate updates using a simple CMS so your team can upload photos without a developer. See our post on <Link href="/blog/business-tasks-to-automate" className="text-brand-green hover:underline">tasks to automate for your business</Link> for ideas.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong>Completed projects.</strong> A gallery of delivered projects with real photos is one of your strongest trust signals. Show exterior, interior, common areas and landscaping. If you have testimonials from past buyers, include them here with names and project names (with permission).</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong>NRI page.</strong> Non-resident Indians are a significant buyer segment for many Indian developers, especially in Hyderabad, Bengaluru, Chennai and Pune. An NRI-specific page should address home loan eligibility, repatriation rules, power of attorney for purchase, and the tax implications of owning property in India. Speaking directly to their concerns converts significantly better than generic project pages.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong>Site visit booking.</strong> Make it easy for interested buyers to book a site visit directly on the website. A simple form or calendar integration with an instant WhatsApp or email confirmation is enough. Reduce friction: ask only for name, phone, preferred date and project of interest. Every additional field loses leads.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Features for agents and brokers</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>A broker&rsquo;s website has different needs to a builder&rsquo;s. Buyers expect you to show inventory across multiple projects and sometimes multiple cities. The key features are a property search with strong filters (location, type, budget, BHK), saved search and wishlist functionality, an enquiry form for each listing and clear information about your RERA agent registration number.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Agents who also do rentals should have a clear separation between buy and rent sections. Mixed inventories confuse buyers and reduce conversion. Each listing should show photos, floor plan, key facts (area, floor, facing, age), price and a contact button that pre-fills the property reference in the enquiry.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Lead capture that actually works</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Property buyers rarely convert on a first visit. The goal of your website is to capture a lead so your sales team can follow up. Here is what works:</p>

          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">A sticky &ldquo;Book a site visit&rdquo; or &ldquo;Get a callback&rdquo; button visible at all times on mobile. Property searches are overwhelmingly mobile.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">A downloadable brochure or floor plan in exchange for name and phone. Serious buyers want the full brochure — gating it captures their details.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">WhatsApp enquiry button linking to a pre-filled message about the specific project. This reduces the effort for the buyer and gives your team instant context.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">EMI calculator. Buyers who run their own EMI calculation are more motivated. Embedding a simple calculator on project pages increases time on page and trust.</span>
            </li>
          </ul>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Once leads come in, track them properly. See our guide on <Link href="/blog/track-website-leads-ga4" className="text-brand-green hover:underline">tracking website leads with GA4</Link> to measure which pages and campaigns produce the most enquiries.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Handling heavy media without slowing your site</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Property websites are media-heavy by nature: high-resolution renders, floor plan images, project videos, 360-degree virtual tours and drone footage. Unoptimised, these make a site painfully slow on mobile data connections, and slow sites lose buyers.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Compress images to WebP format and lazy-load anything below the fold. Host videos on YouTube or Vimeo and embed them rather than self-hosting. For 360 tours, use a hosted tour provider and embed the widget. Use a CDN to serve assets from a server close to your visitors. These steps together can cut load times by 50 percent or more and directly improve your Google ranking.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">SEO for property websites</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Property buyers search with very specific intent: &ldquo;3BHK flats in Gachibowli under 80 lakhs&rdquo;, &ldquo;plots near Shamshabad&rdquo;, &ldquo;ready to move apartments Whitefield&rdquo;. Your pages need to match these searches. Write individual project pages with the neighbourhood name, BHK configurations and project name in the title and headings. Create area guides — &ldquo;Living in Kondapur: schools, connectivity and property prices&rdquo; — that attract buyers at the research stage.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Add structured data (schema markup) so Google can show your projects as rich results, with ratings, price ranges and address. See our guide on <Link href="/blog/schema-markup-explained" className="text-brand-green hover:underline">schema markup</Link> for how to implement this. A well-structured homepage also helps — read our <Link href="/blog/homepage-design" className="text-brand-green hover:underline">homepage design guide</Link> for the principles that apply to any industry.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Mistakes to avoid</h3>

          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Publishing a project page before receiving RERA registration. This is a legal violation, not just a website error.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Using artist renders without labelling them clearly as &ldquo;artist&rsquo;s impression&rdquo;. Buyers who feel misled cancel bookings and leave bad reviews.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Hiding the price. Even &ldquo;price starting from X&rdquo; is better than no price. Buyers who cannot find a price range move on rather than calling.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">No mobile optimisation. Most property searches happen on phones. If your site is hard to use on a 6-inch screen, you are losing the majority of your visitors.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Outdated inventory. Showing sold-out units or old prices damages credibility. Set up a process to update listings promptly.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">FAQs</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong>Does every project need its own page on the website?</strong> Yes. A single project page is what ranks when buyers search for the project name or &ldquo;apartments in [area]&rdquo;. Lumping all projects onto one page wastes SEO potential and makes it harder for buyers to get the specific information they need.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong>Can I advertise a project on Google Ads before it has RERA registration?</strong> No. Under RERA, a project must be registered before any form of advertising — including digital ads, social media posts, SMS campaigns and website listing. The RERA number must appear in every advertisement.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong>How do I handle enquiries from NRI buyers in a different time zone?</strong> An enquiry form with a callback time preference field helps. Automating a WhatsApp acknowledgement immediately after submission — confirming you have received the enquiry and will call within a set window — reassures buyers who cannot call during Indian business hours.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Next step</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>We design property websites for builders and brokers across Hyderabad and beyond — fast, RERA-compliant and built to generate serious leads. <Link href="/contact" className="text-brand-green hover:underline">Talk to us about your project</Link> or browse our <Link href="/services" className="text-brand-green hover:underline">web design services</Link>.</p>
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
