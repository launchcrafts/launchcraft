import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/website-brief-template`;

export const metadata: Metadata = {
  title: "Website Brief Template: What to Send a Web Design Agency",
  description: "A clear brief gets you accurate quotes, fewer revisions and a better website. Copy this free website brief template and fill it in before you contact agencies.",
  keywords: ["website brief template", "website design brief", "website requirements document", "website rfp"],
  alternates: { canonical: url },
  openGraph: {
    title: "Website Brief Template: What to Send a Web Design Agency | LaunchCraft",
    description: "A clear brief gets you accurate quotes, fewer revisions and a better website. Copy this free website brief template and fill it in before you contact agencies.",
    url,
    type: "article",
    publishedTime: "2026-11-17",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Brief Template: What to Send a Web Design Agency",
    description: "A clear brief gets you accurate quotes, fewer revisions and a better website. Copy this free website brief template and fill it in before you contact agencies.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "Website Brief Template: What to Send a Web Design Agency", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Website Brief Template: What to Send a Web Design Agency",
  description: "A clear brief gets you accurate quotes, fewer revisions and a better website. Copy this free website brief template and fill it in before you contact agencies.",
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
            {["Project Planning", "Web Design"].map((tag) => (
              <span key={tag} className="text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 border border-hairline text-muted" style={sans}>{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl italic text-foreground max-w-3xl mx-auto leading-[1.2]">Website Brief Template: What to Send a Web Design Agency</h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Most agencies see dozens of website enquiries each month. Enquiries that arrive as "I need a website for my business, what does it cost?" get a generic response — usually a wide price range and a request for a call. Enquiries that arrive with a clear brief get accurate quotes, relevant questions and a faster path to a proposal.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            A good brief also protects you. When scope is documented before work begins, there is a shared reference point for what was agreed. Revisions that fall within the brief are covered. Requests that fall outside it are change orders. This saves both parties time, money and difficult conversations. If you are still deciding which type of agency to approach, read our guide on <Link href="/blog/choose-web-design-agency" className="text-brand-green hover:underline">how to choose a web design agency</Link> first.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Copy the twelve-section template below, fill in what you know and leave blanks where you are genuinely unsure. A brief with honest gaps is more useful than a brief with guessed answers.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">The 12-Section Website Brief Template</h3>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">Section 1: About Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Company name, trading name (if different) and legal structure</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">What you do, what you sell, who you serve — in two to three sentences</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Location(s) where you operate</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Years in business and approximate team size</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Existing website URL (if any) and what is wrong with it or why you are replacing it</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Two or three competitor websites you are aware of</span>
            </li>
          </ul>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">Section 2: Goals</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">The single most important thing the new website should achieve — be specific (e.g., "generate 20 qualified enquiry form submissions per month" rather than "get more leads")</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Secondary goals in priority order</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">How you will measure success — what metrics will you track in the first three months?</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">What does the website explicitly not need to do? (Defining out-of-scope prevents scope creep later.)</span>
            </li>
          </ul>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">Section 3: Audience</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Primary audience: who they are, their age range, profession or life stage, what they are trying to achieve when they visit your website</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Secondary audience (if any): e.g., existing customers vs new prospects, B2B buyers vs end consumers</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Device usage: do most of your customers browse on mobile or desktop? Do you have analytics data to confirm this?</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Language preferences: English only, bilingual, or regional language support needed?</span>
            </li>
          </ul>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">Section 4: Pages</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">List every page you need. For each page, write the page name and one sentence describing its purpose (e.g., "Services — describes each service we offer with a CTA to contact us").</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Note if any pages require sub-pages or category structures (e.g., a blog, a products catalogue, a locations directory)</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Indicate total estimated page count (a rough number is fine — this affects the quote significantly)</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">List three to five websites whose structure or navigation you admire, with brief notes on what specifically you like</span>
            </li>
          </ul>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">Section 5: Features and Integrations</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">List any interactive features: booking system, payment processing, contact forms, live chat, member login area, e-commerce store, product configurator, map, etc.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">List tools you need the website to connect to: CRM (e.g., HubSpot, Zoho), email marketing (e.g., Mailchimp, Klaviyo), WhatsApp, payment gateway (e.g., Razorpay, Stripe), accounting software</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Note any tools you are already paying for that must be retained vs tools you are open to replacing</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Specify whether a blog or news section is needed, and if so, who will manage and publish content after launch</span>
            </li>
          </ul>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">Section 6: Content</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Will you write the copy or does the agency need to provide copywriting? If the agency will write copy, note the tone: formal, conversational, technical, friendly.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Do you have professional photography, or does the agency need to source or shoot images? Stock photography, AI-generated imagery or custom shoot?</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Do you have video content? Will it be hosted on YouTube/Vimeo or self-hosted?</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">List any content that will be migrated from the existing site — blog posts, product listings, case studies, team profiles</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">State your content readiness date — the date by which all copy and images will be provided to the agency. This is usually the biggest cause of project delays.</span>
            </li>
          </ul>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">Section 7: Design Direction</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Share your existing brand assets: logo files (SVG/PNG/AI), brand colours with hex codes, typefaces or font preferences. If you do not have these, note it explicitly.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Describe the aesthetic in three to five adjectives: e.g., minimal, modern, bold, warm, authoritative, playful</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Share three to five websites whose visual design you like, and briefly note what you like about each</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Share one to two websites whose visual design you dislike, with a note on why — this is equally useful for a designer</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Note any design constraints: must use specific colours for brand consistency, must not use certain imagery types, must conform to a parent brand's guidelines</span>
            </li>
          </ul>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">Section 8: Technical</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Platform preference, if any: Next.js, WordPress, Webflow, Shopify, custom build. If you have no preference, say so — a good agency will recommend based on your needs.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Hosting preference or existing hosting provider. Note if your domain is with a specific registrar.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Will your team need to edit content after launch, and if so, what is their technical comfort level? A non-technical team editing blog posts needs a simple CMS; a developer-led team can work with Markdown or a headless CMS.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Any accessibility requirements: WCAG AA compliance, screen reader support, high-contrast mode</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Any security or compliance requirements: data residency, GDPR, payment card industry (PCI) compliance, SOC 2</span>
            </li>
          </ul>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">Section 9: SEO and Migration</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Does the existing site rank for any keywords or receive organic traffic? If yes, provide a Google Search Console export or Analytics screenshot — this affects how carefully the migration must be handled.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Will URLs change? If yes, 301 redirects from old URLs to new ones must be part of the project scope.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">List the primary keywords or search phrases you want the site to rank for. Even a rough list helps the agency understand the topical focus of the content.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Note if structured data (schema markup), local SEO or multi-language SEO is needed</span>
            </li>
          </ul>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">Section 10: Budget and Timeline</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">State your budget range honestly. Agencies will not quote below their minimum and will not inflate to your maximum — a stated budget helps them propose what is achievable, not what sounds impressive. If you are unsure of a reasonable budget for your project, see our <Link href="/blog/website-cost-india" className="text-brand-green hover:underline">website cost guide for India</Link>.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Hard deadline, if any (product launch, conference, funding event, season start). If there is no hard deadline, say so — it allows the agency to schedule your project without rushing.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Preferred payment structure: milestone-based, monthly retainer, or other</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Ongoing budget for hosting, maintenance and support after launch. A website without ongoing care degrades; clarify whether you want the agency to manage this or whether it will be handled internally.</span>
            </li>
          </ul>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">Section 11: People and Approvals</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Name the primary point of contact at your company: who the agency will email, who can approve designs and who can approve copy</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">List anyone else who must approve designs or give sign-off (e.g., a director, marketing manager, brand team). Approvals from multiple stakeholders are a common cause of delays — note this clearly so the agency can build it into the timeline.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Expected response time for feedback rounds — agencies need to know if you can review designs within 48 hours or if reviews take two weeks</span>
            </li>
          </ul>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">Section 12: After Launch</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Training: does your team need training on the CMS, analytics or any other tools included in the project?</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Documentation: do you require written documentation of the system — hosting details, DNS records, login credentials, deployment process?</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Support contract: do you want a monthly retainer for ongoing changes, bug fixes and security updates? Or will changes be billed on a time-and-materials basis?</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Growth plans: are there features that are out of scope for now but should be on the roadmap for phase two? Flag these so the agency can build the architecture to accommodate them without a full rebuild later. See our <Link href="/blog/mvp-development-guide" className="text-brand-green hover:underline">MVP development guide</Link> for how to plan phased builds.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Five Tips for Getting Good Quotes</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Send the same brief to all agencies:</strong> Comparing quotes is only meaningful if everyone is quoting on the same scope. A brief ensures you are comparing like for like, not comparing an agency that quoted on a minimal scope against one that quoted on your full wishlist.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Ask what is excluded:</strong> Every quote has assumptions baked in. Ask each agency what is not included in their quote. Copywriting, photography, SEO setup, post-launch support and third-party software licences are commonly excluded and can add significant cost.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Ask about the revision process:</strong> How many rounds of design revisions are included? What constitutes a revision versus a new direction? Understanding this upfront prevents frustration later.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Ask who will actually do the work:</strong> Some agencies subcontract development to overseas teams. Others have their full team in-house. Neither is inherently wrong, but you should know. It affects communication, timezone availability and quality control.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Ask for references from similar projects:</strong> Ask to speak with two or three clients whose websites are similar in scope to yours. Speaking with past clients — not just reading testimonials — reveals how the agency handles delays, scope changes and difficult feedback.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">What a Good Agency Will Ask Back</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            A strong agency will ask clarifying questions before sending a quote. If an agency sends a quote within an hour of receiving your brief with no follow-up questions, the quote is almost certainly generic. Good questions from an agency include: What does success look like in 12 months? Who is your most important customer and what do they care about? What do you currently do that is working and you want to keep? Are there technical constraints from your existing systems? What has prevented you from addressing this earlier?
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            An agency that asks good questions is an agency that will think carefully about your project rather than applying a template. This matters for outcome quality far more than portfolio aesthetics.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">A Short Example Brief</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            To illustrate what a completed brief looks like, here is a condensed example for a fictional law firm:
          </p>
          <pre className="bg-background border border-hairline p-4 rounded text-xs overflow-x-auto"><code>{`Company: Redwood Associates LLP — corporate law firm, Hyderabad
Existing site: redwoodlaw.in — built 2019, not mobile-friendly
Primary goal: generate 10+ consultation requests per month via the website
Audience: founders and CFOs of tech startups, 28–45, mobile and desktop split 60/40
Pages needed: Home, About, Services (5 practice areas), Team (8 profiles), Blog, Contact — approx 25 pages total
Features: Contact form → Zoho CRM, WhatsApp click-to-chat, Google Maps embed
Design: existing brand (navy + gold), minimal and authoritative, like linklaters.com
Platform: preference for Next.js or Webflow — team has no developer
Budget: ₹1.5–2.5 lakhs for design and development; hosting/maintenance budget ₹8k/year
Timeline: live before 1 April 2027; no negotiable hard deadline
Contact: Priya Reddy (Managing Partner) — final sign-off also needed from two equity partners`}</code></pre>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            This brief is not complete — it has blanks in SEO, content and post-launch sections — but it gives any agency enough to quote meaningfully and ask sensible follow-up questions. Ready to send your brief? <Link href="/contact" className="text-brand-green hover:underline">Contact LaunchCraft here</Link>.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Frequently Asked Questions</h3>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">How long should a website brief be?</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            A useful brief is typically two to four pages of plain text. It does not need to be a formal document — a well-organised email works. Length is less important than clarity. A one-page brief that answers the core questions clearly is more useful than a ten-page document full of marketing language and vague aspirations. Use the twelve sections above as a checklist rather than a word-count target.
          </p>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">Should I share my budget in the brief?</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Yes. This is the question most clients hesitate on, and it is the one that most reliably improves the quality of quotes you receive. Sharing a budget range does not mean an agency will inflate their quote to your maximum — it means they can propose something achievable within your means rather than proposing what they would ideally build. If you withhold the budget, quotes will vary wildly because each agency is making a different assumption about what you can afford.
          </p>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">What if I do not know the answers to some sections?</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Fill in what you know and explicitly mark the gaps. Write "TBC" or "open to agency recommendation" rather than leaving a blank or guessing. Agencies are used to working with clients who have not made every decision. What they cannot work with is a client who guesses and presents guesses as requirements. If you are unsure about platform, features or scope, a discovery workshop with the agency — usually a paid half-day engagement — is a good way to clarify these before the full project quote is issued.
          </p>
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
