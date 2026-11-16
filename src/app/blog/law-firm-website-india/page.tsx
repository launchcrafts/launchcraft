import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/law-firm-website-india`;

export const metadata: Metadata = {
  title: "Law Firm Website Design in India: What Bar Council Rules Allow",
  description: "Indian advocates can't advertise like other businesses, but they can have a website. Here's what Bar Council rules allow and how to design within them.",
  keywords: ["law firm website design", "advocate website india", "bar council website rules", "lawyer website design"],
  alternates: { canonical: url },
  openGraph: {
    title: "Law Firm Website Design in India: What Bar Council Rules Allow | LaunchCraft",
    description: "Indian advocates can't advertise like other businesses, but they can have a website. Here's what Bar Council rules allow and how to design within them.",
    url,
    type: "article",
    publishedTime: "2026-11-17",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Law Firm Website Design in India: What Bar Council Rules Allow",
    description: "Indian advocates can't advertise like other businesses, but they can have a website. Here's what Bar Council rules allow and how to design within them.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "Law Firm Website Design in India: What Bar Council Rules Allow", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Law Firm Website Design in India: What Bar Council Rules Allow",
  description: "Indian advocates can't advertise like other businesses, but they can have a website. Here's what Bar Council rules allow and how to design within them.",
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
            {["Law Firm", "India"].map((tag) => (
              <span key={tag} className="text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 border border-hairline text-muted" style={sans}>{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl italic text-foreground max-w-3xl mx-auto leading-[1.2]">Law Firm Website Design in India: What Bar Council Rules Allow</h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
          <p className="text-sm text-muted leading-relaxed" style={sans}>Advocates in India operate under different rules to other professionals when it comes to marketing. The Bar Council of India and state bar councils prohibit solicitation and advertising in ways that most businesses take for granted. And yet, in practice, most potential clients search for a lawyer online before making any call. A well-designed website can be entirely compliant with the rules and still serve as a powerful way for clients to find you, understand your practice and decide to reach out.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>This post explains what the rules say, what a compliant advocate website can include, and how to design one that works. This is an overview for guidance only — it is not legal advice. Consult the current Bar Council of India Rules and your state bar council for the definitive requirements applicable to your situation.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Rule 36 and the 2008 amendment</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Rule 36 of the Bar Council of India Rules, under Part VI (Rules Governing Advocates), prohibits advocates from soliciting work or advertising, either directly or indirectly. The original rule was broad enough to arguably prohibit even having a business card with more than name and address.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>The 2008 amendment to Rule 36 liberalised this position. Advocates are now permitted to have a website with specific, permissible information. The amendment explicitly allows a website listing the advocate&rsquo;s name, address, telephone numbers, enrollment number, areas of practice, educational qualifications, professional achievements, and other permitted details. It does not permit advertising in the conventional sense — claims like &ldquo;best divorce lawyer in Hyderabad&rdquo; or &ldquo;100% success rate&rdquo; are not acceptable.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>The Bar Council of India has also issued guidelines on use of social media and digital platforms, and the landscape continues to evolve. Always verify that any new feature or content you add to your website is consistent with the current rules and any recent Bar Council notifications.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">What to include on an advocate&rsquo;s website</h3>

          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Name and enrollment details.</strong> Full name, Bar Council enrollment number and the bar council with which you are enrolled. For firms, the firm name and the names of all partners or senior advocates.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Educational qualifications.</strong> LLB, LLM, any specialisation degrees or diplomas. This is factual information and clearly permitted.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Areas of practice.</strong> State the areas of law you practise — family law, property disputes, criminal defence, corporate and commercial, arbitration, intellectual property and so on. This is not advertising; it is informational.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Contact information.</strong> Office address, telephone numbers, email address. These allow potential clients to reach you.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Professional achievements.</strong> Academic distinctions, publications, paper presentations at law conferences, appointments to committees or positions of note. These are factual statements, not promotional claims.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">What to leave out</h3>

          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Comparative claims such as &ldquo;best lawyer&rdquo;, &ldquo;top-rated advocate&rdquo;, &ldquo;leading law firm&rdquo; or any superlatives that constitute puffery or advertising.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Success rates, case win percentages or outcome guarantees. These are misleading to clients and prohibited.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Client testimonials and case studies that identify specific clients or matters, without explicit written consent and careful attention to confidentiality obligations.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Paid rankings or third-party badges that imply superiority (&ldquo;top 10 lawyers&rdquo;) unless these are based on verifiable, bar council-compatible criteria.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Touting language in any form — actively soliciting clients with calls to action like &ldquo;Call now for a free consultation&rdquo; that go beyond providing information.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">The entry notice design</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Many compliant advocate websites include an entry notice or disclaimer on the homepage or as a splash before the main content. This notice typically states that the website is not an advertisement, that it is intended for general information only, that the content does not constitute legal advice and that visiting the site does not create an advocate-client relationship.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>This practice reflects Bar Council guidance on the nature of a permissible website. The notice should be clearly written, not in confusing legal language, and the visitor should be able to proceed without excessive friction after acknowledging it. Keep it brief and honest: its purpose is compliance and transparency, not to intimidate potential clients into leaving.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Pages a law firm website needs</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong>Homepage.</strong> Name of the firm or advocate, brief statement of the areas of practice, office location and contact details. The entry notice if applicable. Clean, professional, unhurried.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong>About page.</strong> Biographical information, educational qualifications, enrollment details, bar council membership, years of experience across each practice area and any professional appointments or distinctions.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong>Practice areas pages.</strong> One page per area of practice. Each page explains the type of matters handled, the courts or forums involved and what a client can expect from the process in general terms. Write these for a layperson who is trying to understand whether you handle their type of problem — not for other lawyers.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong>Publications and insights.</strong> Articles, papers and commentary on legal developments in your practice areas. This is entirely permissible, is excellent for your visibility in search engines and AI answers (see our post on <Link href="/blog/aeo-vs-seo" className="text-brand-green hover:underline">AEO vs SEO</Link>), and positions you as a knowledgeable practitioner without making any prohibited advertising claims.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong>Contact page.</strong> Office address with a map, telephone number, email address and a simple contact form. The form should not promise a free consultation, as that formulation is closer to solicitation. A neutral label — &ldquo;Send us a message&rdquo; or &ldquo;Contact the firm&rdquo; — is appropriate.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong>Disclaimer and privacy policy.</strong> A clear disclaimer about the nature of the website and a privacy policy explaining what data the contact form collects and how it is handled. See our guide on building a <Link href="/blog/website-brief-template" className="text-brand-green hover:underline">clear website brief</Link> which covers information architecture including legal pages.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">The educational content approach</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>The most effective strategy for a law firm website under Bar Council rules is to publish genuinely useful educational content about the areas of law you practise. Explain how property registration works in Telangana, what the process for a contested divorce looks like, how a cheque bounce case proceeds under the Negotiable Instruments Act, or what documents a startup needs in its founding agreements.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>This content attracts people who are searching for answers to exactly these questions. It demonstrates your knowledge without making advertising claims. When a reader finds your explanation of a legal process clear and accurate, they naturally want to speak to the person who wrote it. This is not solicitation — it is the natural outcome of being genuinely helpful.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Educational content also significantly improves your visibility in Google and in AI-powered answer engines like Perplexity and ChatGPT, which increasingly cite authoritative legal explanation pages when users ask legal questions.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Design tone</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>A law firm website should communicate competence, stability and trust through design. This typically means restrained use of colour, clean typography, generous white space and professional photography. Avoid animated banners, flashy graphics or anything that looks like a retail or entertainment website.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Photography should show the actual office, the actual advocates — not stock images of generic-looking people in suits. Clients who have researched you online and then walk into your office should recognise the space and the people. That continuity builds immediate rapport.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Keep language measured and precise. Avoid urgency tactics (&ldquo;Act now&rdquo;, &ldquo;Limited appointments&rdquo;) and hyperbolic claims. Write in the voice of someone who handles serious matters with care and experience.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Forms and confidentiality</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>A contact form on a law firm website raises specific confidentiality considerations. A person who fills in a form describing their legal problem may expect that information to be treated as confidential — and your professional obligations may require you to handle it accordingly even before a formal engagement.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Keep initial contact forms brief. Ask for name, phone number and a general description of the type of matter — not a detailed account of the facts. Add a note that submissions are treated as confidential. Ensure the form is delivered over HTTPS, stored securely, and that only authorised people can access the submissions. See our <Link href="/blog/website-security-checklist" className="text-brand-green hover:underline">website security checklist</Link> for practical measures.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Local visibility</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Most legal matters are handled locally. Someone in Hyderabad looking for a property lawyer will search for &ldquo;property advocate Hyderabad&rdquo; or &ldquo;property dispute lawyer near me&rdquo;. Your website needs to reflect your location clearly — in the page title, in the about page, in the contact page and in the footer. Claim and complete your Google Business Profile with your practice areas listed under the services section.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>For firms with Telugu-speaking clients, a page or section in Telugu may be appropriate — particularly for family law, land disputes and criminal matters where clients are more comfortable in their native language. See our guide on <Link href="/blog/multilingual-website-telugu" className="text-brand-green hover:underline">building multilingual websites in Telugu</Link> for how to approach this technically.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">FAQs</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong>Can an advocate run Google Ads for their practice?</strong> This is a contested area. Paid advertising that amounts to solicitation may fall within the prohibition in Rule 36. Even if technical search engine advertising is permissible, the ad copy must stay within what the Bar Council permits — factual, non-comparative, non-touting. Many advocates instead focus on organic search visibility through content, which is both effective and unambiguously within the rules.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong>Can a law firm website show client testimonials?</strong> With significant caution. Any testimonial must have explicit written consent from the client, must not reveal confidential information about the matter, and must not make claims that constitute advertising or comparative superiority. Many advocates avoid testimonials entirely and rely on word-of-mouth referrals supplemented by their published educational content.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong>Does a sole advocate need a different website to a law firm?</strong> The structure differs — a sole advocate&rsquo;s site focuses on one person, while a firm site needs to represent multiple advocates — but the compliance requirements are the same. A firm site with multiple advocate profiles, each with their own qualifications and practice areas, is entirely permissible and often reassures clients about the depth of the practice.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Next step</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>We design law firm websites that work within Bar Council rules and present your practice professionally. <Link href="/contact" className="text-brand-green hover:underline">Talk to us</Link> about what you need or view our <Link href="/services" className="text-brand-green hover:underline">web design services</Link>.</p>
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
