import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/dental-website-design`;

export const metadata: Metadata = {
  title: "Dental Website Design That Brings In New Patients",
  description: "Most people find a new dentist online. Here is how to design a dental clinic website that calms nervous patients, shows your work and fills the diary.",
  keywords: [
    "dental website design",
    "dental clinic website",
    "dentist website features",
    "dental marketing",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Dental Website Design That Brings In New Patients | LaunchCraft",
    description: "Most people find a new dentist online. Here is how to design a dental clinic website that calms nervous patients, shows your work and fills the diary.",
    url,
    type: "article",
    publishedTime: "2026-11-15",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Website Design That Brings In New Patients",
    description: "Most people find a new dentist online. Here is how to design a dental clinic website that calms nervous patients, shows your work and fills the diary.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "Dental Website Design That Brings In New Patients", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Dental Website Design That Brings In New Patients",
  description: "Most people find a new dentist online. Here is how to design a dental clinic website that calms nervous patients, shows your work and fills the diary.",
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
            {["Dental Website Design", "Dental Clinic Website", "Dentist Website Features", "Dental Marketing"].map((tag) => (
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
            Dental Website Design That Brings In New Patients
          </h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
            <p className="text-sm text-muted leading-relaxed" style={sans}>People rarely choose a dentist on impulse. They search, compare two or three clinics and pick the one that feels most trustworthy and easiest to book. Many are nervous about treatment, too. A dental website has to do two jobs at once: reassure anxious patients and make booking effortless. Here is how.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">1. Lead with reassurance</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Your homepage headline should speak to how patients feel, not just list services. "Gentle dental care for the whole family in [area]" works better than "Welcome to [Clinic Name]". Follow it with a short line on what makes you different: same-day appointments, a female dentist, sedation options or modern equipment.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">2. Give every treatment its own page</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Patients search for specific treatments, so each one deserves a clear page:</p>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Root canal treatment</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Dental implants</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Braces and clear aligners</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Teeth whitening</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Crowns and bridges</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Children’s dentistry</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Wisdom tooth removal</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Smile makeovers</span>
                </li>
            </ul>

            <p className="text-sm text-muted leading-relaxed" style={sans}>On each page, explain what the treatment is, who it is for, the steps, recovery time, how long results last and price guidance. Answer the questions patients ask at the chair. These pages also help you appear in AI answers ([Post 9]).</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">3. Show real results, carefully</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Before-and-after photos are powerful, but only use your own cases, with written patient consent. Avoid heavy editing and add a note that results vary.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">4. Introduce the dentists</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Real photos, qualifications, specialities and a few lines about each dentist’s approach. A short welcome video from the lead dentist builds trust quickly.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">5. Make booking effortless</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">A "Book appointment" button in the header on every page</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Online booking with time slots and WhatsApp confirmation</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Tap-to-call and WhatsApp buttons fixed on mobile</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">A short form: name, phone, treatment interest, preferred time</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">6. Be open about costs</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Price is a major worry. Show starting prices or ranges for common treatments, explain what affects the final cost and list payment or EMI options if you offer them. Transparency reduces no-shows and repeat questions.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">7. Calm the nervous patient</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Add a page or section for anxious patients: how you manage pain, sedation options, what happens at the first visit and how long it takes. Photos of a bright, clean clinic help more than any words.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">8. Build local visibility</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Complete your Google Business Profile and add new photos often</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Add Dentist schema with your address and hours ([Post 11])</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Ask patients for reviews after successful treatment</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Create location pages if you have more than one clinic</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Common dental website mistakes</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Stock smiles that look nothing like your patients</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">No prices at all, so patients call a competitor that shows them</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Treatment pages that are one vague paragraph</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Slow pages loaded with large photo galleries ([Post 2])</span>
                </li>
            </ul>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Check the advertising rules that apply to dentists in your region before publishing testimonials or claims.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">FAQs</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>What pages should a dental website have? Home, about and dentists, one page per treatment, prices, patient information, reviews, contact and booking.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Should I show before-and-after photos? Yes, if they are your own cases with consent. They are among the most persuasive content on a dental site.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>How can a dental website get more patients? Clear treatment pages, easy booking, visible reviews and strong local SEO usually make the biggest difference.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Next step</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Want a dental website that fills your diary? See our healthcare work or book a call.</p>
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
