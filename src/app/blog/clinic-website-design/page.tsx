import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/clinic-website-design`;

export const metadata: Metadata = {
  title: "Clinic Website Design: 12 Must-Have Features for Healthcare Websites",
  description: "Patients judge a clinic by its website before they ever call. These 12 features build trust, make booking easy and help your clinic rank locally.",
  keywords: [
    "clinic website design",
    "healthcare website design",
    "hospital website features",
    "medical website india",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Clinic Website Design: 12 Must-Have Features for Healthcare Websites | LaunchCraft",
    description: "Patients judge a clinic by its website before they ever call. These 12 features build trust, make booking easy and help your clinic rank locally.",
    url,
    type: "article",
    publishedTime: "2026-11-15",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinic Website Design: 12 Must-Have Features for Healthcare Websites",
    description: "Patients judge a clinic by its website before they ever call. These 12 features build trust, make booking easy and help your clinic rank locally.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "Clinic Website Design: 12 Must-Have Features for Healthcare Websites", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Clinic Website Design: 12 Must-Have Features for Healthcare Websites",
  description: "Patients judge a clinic by its website before they ever call. These 12 features build trust, make booking easy and help your clinic rank locally.",
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
            {["Clinic Website Design", "Healthcare Website Design", "Hospital Website Features", "Medical Website India"].map((tag) => (
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
            Clinic Website Design: 12 Must-Have Features for Healthcare Websites
          </h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
            <p className="text-sm text-muted leading-relaxed" style={sans}>Before a patient visits your clinic, they visit your website. In a few seconds they decide whether you look trustworthy, whether you treat their problem and how easy it is to book. A good clinic website answers all three. These are the 12 features we build into every healthcare site, from single-doctor practices to multi-speciality hospitals.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Trust and credibility</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Doctor profiles with real photos. Name, qualifications, specialities, years of experience and languages spoken. Patients choose a doctor, not just a building.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Genuine patient reviews. Show your Google rating and a few reviews, with permission. Never invent testimonials or promise guaranteed results.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Real photos of the clinic. Reception, consultation rooms and equipment. Clean, well-lit photos reassure anxious patients.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Clear credentials. Registrations, accreditations and hospital affiliations where relevant.</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Easy access</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Online booking. Let patients pick a doctor, date and time in a few taps, with an instant confirmation on WhatsApp or SMS. See [Post 14].</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Click-to-call and WhatsApp buttons visible on every page on mobile.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Location and timings on every page, with a Google Maps embed, parking notes and directions from landmarks.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Emergency information. If you handle emergencies, put the emergency number at the very top. If you do not, say where patients should go.</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Helpful content</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">One page per treatment or condition. What it is, who it helps, what to expect, recovery time and cost guidance. These pages are what rank in Google and AI answers. See [Post 9].</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Patient guides. What to bring, how to prepare, insurance and cashless options, and an FAQ.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Local language options. For clinics in Andhra Pradesh and Telangana, Telugu pages (or at least key pages) widen your reach.</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Behind the scenes</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Privacy and security by design. Health details are sensitive personal data. Collect only what you need on forms, use HTTPS, restrict who can see submissions and explain your privacy practices clearly. India’s DPDP Rules phase in over 18 months from November 2025; see [Post 5].</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Local SEO for clinics</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Claim and complete your Google Business Profile, with the right categories and photos</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Keep your name, address and phone number identical everywhere</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Add MedicalClinic or Physician schema with your address and hours ([Post 11])</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Create pages for each speciality and the areas you serve</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Ask happy patients for reviews after their visit, using a simple link</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">What to avoid</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Stock photos of models in white coats</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Medical claims you cannot back up, or before-and-after images used without consent</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Long paragraphs of jargon. Write for a worried patient, not for other doctors.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Booking forms that ask for full medical history upfront</span>
                </li>
            </ul>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Check the advertising rules that apply to your profession and region before publishing claims or testimonials. This post is not legal or regulatory advice.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">FAQs</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>How long does a clinic website take to build? A small clinic site can take 3–4 weeks. Hospitals with many departments and doctors take longer. [Adjust to your timeline.]</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Can patients book appointments directly on the website? Yes. Booking can link to your existing software, a calendar or WhatsApp.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Do I need a separate page for every doctor? It helps. Patients often search for a doctor by name, and individual pages can rank for those searches.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Next step</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>We design and build clinic and hospital websites that make booking easy and rank locally. See our healthcare work or book a call.</p>
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
