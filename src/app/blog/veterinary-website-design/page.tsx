import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/veterinary-website-design`;

export const metadata: Metadata = {
  title: "Veterinary Website Design: What Pet Owners Look For Before They Call",
  description: "Worried pet owners want fast answers: are you open, do you handle emergencies, how do I book? Here is how to design a vet website that answers all three.",
  keywords: [
    "veterinary website design",
    "vet clinic website",
    "pet hospital website",
    "veterinary marketing",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Veterinary Website Design: What Pet Owners Look For Before They Call | LaunchCraft",
    description: "Worried pet owners want fast answers: are you open, do you handle emergencies, how do I book? Here is how to design a vet website that answers all three.",
    url,
    type: "article",
    publishedTime: "2026-11-15",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veterinary Website Design: What Pet Owners Look For Before They Call",
    description: "Worried pet owners want fast answers: are you open, do you handle emergencies, how do I book? Here is how to design a vet website that answers all three.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "Veterinary Website Design: What Pet Owners Look For Before They Call", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Veterinary Website Design: What Pet Owners Look For Before They Call",
  description: "Worried pet owners want fast answers: are you open, do you handle emergencies, how do I book? Here is how to design a vet website that answers all three.",
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
            {["Veterinary Website Design", "Vet Clinic Website", "Pet Hospital Website", "Veterinary Marketing"].map((tag) => (
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
            Veterinary Website Design: What Pet Owners Look For Before They Call
          </h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
            <p className="text-sm text-muted leading-relaxed" style={sans}>When a pet is unwell, the owner is anxious and in a hurry. They search on their phone, open two or three vet websites and call the one that answers their questions fastest. A good veterinary website is built for that moment: clear, quick and reassuring. Here is what to include.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">The first screen: answer the urgent questions</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Open now? Show today’s timings at the top, and 24/7 status if you offer it</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Emergencies? A bold emergency phone number, or clear advice on where to go out of hours</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">How do I reach you? Tap-to-call, WhatsApp and directions buttons, always visible on mobile</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Pages every vet website needs</h3>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Design that calms nervous owners</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Warm, real photos of your team with pets, not stock images</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Soft, friendly colours and plenty of white space</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Simple language: "vaccination" rather than technical shorthand, with short explanations</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Trust signals: reviews, years in practice, number of pets treated (only if accurate) and certifications</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Features that save your front desk time</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Online booking with automatic reminders for vaccinations and follow-ups</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">A WhatsApp chatbot for timings, prices and "is this an emergency?" triage that always tells owners to call in urgent cases ([Post 14])</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Digital forms for new patients, filled in before the visit</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">A pet health record or reminder sign-up for regular clients</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Local SEO for vet clinics</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Complete your Google Business Profile with photos, services and accurate hours, including holidays</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Add VeterinaryCare schema with your address and hours ([Post 11])</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Create pages for key services plus the areas you serve, such as "dog vaccination in [area]"</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Ask owners for reviews after successful visits</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Content ideas that bring in searches</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">"Puppy vaccination schedule in India"</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">"Signs your dog needs to see a vet urgently"</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">"How to prepare your cat for surgery"</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">"Tick and flea prevention during the monsoon"</span>
                </li>
            </ul>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Have a vet review every health article before it goes live.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">FAQs</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Should a vet website show prices? Showing starting prices for routine care (consultations, vaccinations) builds trust and cuts repetitive calls. Complex treatment can say "from" or "after assessment".</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Do I need online booking? It helps a lot. Many owners book outside opening hours, when your phone line is closed.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>How do I handle emergencies online? Never rely on a form for emergencies. Show a phone number and clear instructions.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Next step</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>We build vet and pet hospital websites that make booking easy and help you rank locally. Get in touch.</p>
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
