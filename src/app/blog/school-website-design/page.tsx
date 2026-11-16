import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/school-website-design`;

export const metadata: Metadata = {
  title: "School Website Design: What Parents Look For (Plus CBSE Mandatory Disclosure)",
  description: "Parents shortlist schools online long before they visit. Here's what a school website needs, from admissions pages to CBSE's mandatory public disclosure.",
  keywords: ["school website design", "cbse mandatory public disclosure", "school website features", "school admission website"],
  alternates: { canonical: url },
  openGraph: {
    title: "School Website Design: What Parents Look For (Plus CBSE Mandatory Disclosure) | LaunchCraft",
    description: "Parents shortlist schools online long before they visit. Here's what a school website needs, from admissions pages to CBSE's mandatory public disclosure.",
    url,
    type: "article",
    publishedTime: "2026-11-17",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "School Website Design: What Parents Look For (Plus CBSE Mandatory Disclosure)",
    description: "Parents shortlist schools online long before they visit. Here's what a school website needs, from admissions pages to CBSE's mandatory public disclosure.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "School Website Design: What Parents Look For (Plus CBSE Mandatory Disclosure)", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "School Website Design: What Parents Look For (Plus CBSE Mandatory Disclosure)",
  description: "Parents shortlist schools online long before they visit. Here's what a school website needs, from admissions pages to CBSE's mandatory public disclosure.",
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
            {["Education", "Web Design"].map((tag) => (
              <span key={tag} className="text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 border border-hairline text-muted" style={sans}>{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl italic text-foreground max-w-3xl mx-auto leading-[1.2]">School Website Design: What Parents Look For (Plus CBSE Mandatory Disclosure)</h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
          <p className="text-sm text-muted leading-relaxed" style={sans}>Choosing a school is one of the most important decisions a family makes. Parents do not shortlist by word of mouth alone — they spend hours on school websites, comparing facilities, reading about the curriculum, checking board affiliations and trying to picture whether this school fits their child. If your website is outdated, hard to navigate or missing key information, families move on before they ever call your admissions office.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>This guide covers what a school website needs to work for parents and students, with a dedicated section on the CBSE mandatory public disclosure requirements that affiliated schools must meet.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">CBSE mandatory public disclosure: what your website must include</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Schools affiliated with the Central Board of Secondary Education are required to publish specific information on their website under the CBSE Affiliation Bye-Laws. This is not optional — it is a condition of affiliation, and CBSE inspections check that the disclosure is in place.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong>Appendix IX compliance.</strong> CBSE requires affiliated schools to publish a completed Appendix IX — the Mandatory Public Disclosure form — on their website. This document covers school details, infrastructure, staff particulars, results, fee structure and other statutory information. The completed document must be accessible from the homepage.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong>Prominent homepage link.</strong> The link to the mandatory public disclosure must appear on the homepage, not buried in a footer page or a sub-menu that takes three clicks to reach. CBSE specifically checks for homepage accessibility. A clearly labelled link — &ldquo;Mandatory Public Disclosure&rdquo; or &ldquo;CBSE Disclosure&rdquo; — in the footer or navigation is the standard practice.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong>Documents to include.</strong> The disclosure typically requires copies of: the school&rsquo;s affiliation letter and affiliation number, the trust or society registration certificate, the no-objection certificate from the state government, the recognition certificate, the building safety certificate, the fire safety certificate, the DEO certificate, land documents, and fee and fund details. Each document should be uploaded as a PDF and linked from the disclosure page.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong>Keep it current.</strong> CBSE requires the disclosure to be updated every year. Many schools upload the form once and forget it. Build a reminder into your annual calendar — typically after the new academic session begins — to update the document and re-upload any certificates that have been renewed.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Schools affiliated with other boards — ICSE, state boards, IB, Cambridge — have their own affiliation and disclosure requirements. Check your board&rsquo;s current bye-laws or affiliation conditions for the specifics. This post covers CBSE in detail because it is the most common affiliation for schools asking us about website compliance.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">The admissions section</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Admissions is often the highest-traffic section of a school website during January to March and again in June to July. Parents need very specific information quickly, and if they cannot find it, they call — which puts pressure on your admissions staff.</p>

          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Age eligibility criteria for each class, clearly stated. Parents are often uncertain whether their child meets the age cut-off for a particular grade.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Seat availability or a note that seats are limited and applications are on first-come-first-served or merit basis.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">The admission process step by step: application form, documents required, interaction/assessment (if any), offer letter timeline and fee payment deadline.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Fee structure — at least a range, broken into tuition, development, transport and other heads. Parents who cannot find fees assume the school is out of their budget and do not apply.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">An online enquiry or application form that works on mobile. Test it on a phone before every admissions season.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Showing school life</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Parents want to see what their child&rsquo;s day will look like. Static text about &ldquo;holistic development&rdquo; and &ldquo;modern infrastructure&rdquo; means nothing without images and evidence. Show real photos of classrooms, labs, the library, the playground, sports facilities and the canteen. Show children learning, playing and participating in events — with appropriate permissions from parents (see the section on children&rsquo;s privacy below).</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>A highlights reel from sports day, the annual day performance, science fairs and inter-school competitions shows energy and achievement. An annual photo gallery or a news and events section updated through the year tells families that the school is active and communicative — which builds confidence in current parents and attracts new ones.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Teacher profiles with photo, qualifications and subject matter add a personal dimension. Parents who recognise a teacher by face before the first parent-teacher meeting arrive with more trust and openness.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">The current parents section</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>A school website serves two audiences: prospective families researching the school, and current families who need ongoing information. These needs are different and should be served by different sections.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>A parent portal — even a simple password-protected section — can host the academic calendar, homework notices, circular downloads, exam timetables and fee receipts. This reduces the volume of phone calls to the office for routine information and positions the school as organised and modern.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Alternatively, a clearly labelled &ldquo;Notices&rdquo; or &ldquo;Circulars&rdquo; section updated regularly with PDFs of communications is a low-effort way to serve current parents without building a full portal. The important thing is that it is easy to find and reliably kept up to date.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Children&rsquo;s privacy</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Publishing photos, videos, names, grades or any other information about students on a public website requires parental consent. This is not just best practice — India&rsquo;s Digital Personal Data Protection Act, 2023, and the rules being phased in from November 2025 include specific provisions for the processing of children&rsquo;s personal data.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Collect signed consent forms from parents at the time of admission, specifying what types of content you may publish (school events, achievements, sports photos) and on which platforms (website, social media, printed materials). Do not publish photos where children are identifiable if consent has not been obtained for public web use. When in doubt, crop, anonymise or use illustration rather than photography. See our <Link href="/blog/website-security-checklist" className="text-brand-green hover:underline">website security checklist</Link> for related data protection practices.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Accessibility</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>School websites serve a wide range of visitors, including parents with visual impairments, dyslexia or low digital literacy. Good accessibility practices — sufficient colour contrast, alt text on images, readable font sizes, logical heading structure — improve the experience for all users, not just those with specific needs. They also improve your search ranking, since accessible HTML is easier for search engines to parse. See our guide on <Link href="/blog/schema-markup-explained" className="text-brand-green hover:underline">schema markup</Link> for how structured data complements good HTML structure.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">SEO for schools</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Parents search with local intent: &ldquo;CBSE schools in Madhapur&rdquo;, &ldquo;best school near HITEC City&rdquo;, &ldquo;English medium school Kompally&rdquo;. Your website needs to match these searches. Include the neighbourhood names and board affiliation in your homepage title, headings and throughout the site naturally. Create a dedicated page for each board affiliation if you offer multiple.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Claim your Google Business Profile and keep it updated with photos, accurate hours and a link to the admissions page. Encourage parents to leave Google reviews after positive experiences. For schools with Telugu or Hindi-medium sections, consider pages in those languages to reach families who search in their preferred language. See our post on <Link href="/blog/multilingual-website-telugu" className="text-brand-green hover:underline">building multilingual websites in Telugu</Link> for practical guidance.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Keep your site maintained and up to date. Outdated content — a 2023 academic calendar still showing in 2026, a staff list with people who left years ago — signals to both parents and search engines that the site is not actively managed. Our <Link href="/blog/website-maintenance-checklist" className="text-brand-green hover:underline">website maintenance checklist</Link> covers what to review and when.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">FAQs</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong>Where exactly should the CBSE mandatory public disclosure link appear?</strong> CBSE requires it to be accessible from the homepage. The most common implementations are a link in the footer (which appears on every page) or a dedicated item in the top navigation. A label like &ldquo;Mandatory Public Disclosure&rdquo; is clear and unambiguous for inspectors and parents alike.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong>Can a school use social media instead of a website for admissions?</strong> Social media posts are not a substitute for a website when it comes to CBSE compliance — the board requires a web address for the disclosure. Practically speaking, a website also gives you a permanent, searchable, owned presence that social platforms cannot replicate. Use social media to drive traffic to your website, not to replace it.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong>How often should a school website be redesigned?</strong> A full redesign is typically needed every four to six years as design standards and mobile expectations change. Between redesigns, the content — calendars, staff lists, photo galleries, circulars — should be updated continuously. A site that looks fresh but has stale content is as damaging as one that looks dated.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Next step</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>We design school websites that make admissions clear, comply with CBSE disclosure requirements and reflect the warmth of your school community. <Link href="/contact" className="text-brand-green hover:underline">Get in touch</Link> to discuss your school&rsquo;s site or browse our <Link href="/services" className="text-brand-green hover:underline">web design services</Link>.</p>
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
