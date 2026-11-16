import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/local-seo-for-clinics`;

export const metadata: Metadata = {
  title: "Local SEO for Clinics: How to Rank Higher in Google Maps",
  description: "When patients search 'dentist near me', the map results decide who gets the call. Here's how clinics and hospitals move up in Google Maps.",
  keywords: ["local seo for clinics", "google business profile for doctors", "clinic google maps ranking", "healthcare local seo"],
  alternates: { canonical: url },
  openGraph: {
    title: "Local SEO for Clinics: How to Rank Higher in Google Maps | LaunchCraft",
    description: "When patients search 'dentist near me', the map results decide who gets the call. Here's how clinics and hospitals move up in Google Maps.",
    url,
    type: "article",
    publishedTime: "2026-11-17",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO for Clinics: How to Rank Higher in Google Maps",
    description: "When patients search 'dentist near me', the map results decide who gets the call. Here's how clinics and hospitals move up in Google Maps.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "Local SEO for Clinics: How to Rank Higher in Google Maps", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Local SEO for Clinics: How to Rank Higher in Google Maps",
  description: "When patients search 'dentist near me', the map results decide who gets the call. Here's how clinics and hospitals move up in Google Maps.",
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
            {["Local SEO", "Healthcare"].map((tag) => (
              <span key={tag} className="text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 border border-hairline text-muted" style={sans}>{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl italic text-foreground max-w-3xl mx-auto leading-[1.2]">Local SEO for Clinics: How to Rank Higher in Google Maps</h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
          <p className="text-sm text-muted leading-relaxed" style={sans}>When someone in your city searches for &ldquo;cardiologist near me&rdquo; or &ldquo;best dental clinic in Hyderabad&rdquo;, Google shows a map pack — three local results with a map pin, star rating and phone number — before any organic website results. Getting into that map pack is worth more than ranking on page one organically, because patients call directly from it. This guide explains exactly how to get there.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>This post focuses on the Google Maps side of local SEO. For the website side, read our guides on <Link href="/blog/clinic-website-design" className="text-brand-green hover:underline">clinic website design</Link> and <Link href="/blog/dental-website-design" className="text-brand-green hover:underline">dental website design</Link>.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Step 1: Complete your Google Business Profile fully</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Your Google Business Profile (GBP) is the single most important factor in Maps ranking. Many clinics claim their profile but leave it half finished. Google rewards completeness — the more information you provide, the more confident it is that you are a legitimate, active business worth showing to searchers.</p>

          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Choose the most specific primary category available. For example, &ldquo;Dental Clinic&rdquo; rather than just &ldquo;Health&rdquo;. Add secondary categories for each speciality you offer.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Write a business description of 250 words that naturally includes your specialities and the neighbourhoods you serve. This is not the place for keyword stuffing — write for a patient, not an algorithm.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Add your exact opening hours including Saturday and Sunday. Update them for public holidays. A patient who visits after hours because your profile showed you as open will leave a negative review.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Upload at least 20 real photos: the exterior (so patients can find you), the reception, consultation rooms, equipment and the team. Profiles with photos receive significantly more direction requests and calls than those without.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Enable messaging so patients can send you a WhatsApp-style message directly from Maps. Add the booking link field if you have an online booking system.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">List your services individually — each treatment or speciality should be its own service entry with a name, description and optional price range.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Step 2: Add individual profiles for each doctor</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Patients often search by doctor name or speciality: &ldquo;Dr Sharma dermatologist Vizag&rdquo;. If each doctor has their own Google Business Profile linked to your clinic address, you multiply the chances of appearing in Maps for name searches. Each individual profile should use the category &ldquo;Physician&rdquo; or the relevant speciality, link back to the doctor&apos;s page on your website, and have its own set of reviews.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>On your website, give each doctor a dedicated page with their photo, qualifications, specialities, languages spoken and a booking button. These pages help the individual GBP profiles rank. See how we approach this in our <Link href="/blog/physiotherapy-website-design" className="text-brand-green hover:underline">physiotherapy website design</Link> guide.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Step 3: Build a steady stream of genuine reviews</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Review count, recency and rating are three of the strongest local ranking signals. A clinic with 200 reviews averaging 4.5 stars will almost always outrank a clinic with 15 reviews averaging 4.9 stars, all else being equal. The key word is genuine — buying fake reviews violates Google&apos;s policies and can get your profile suspended.</p>

          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Create a short review link from your GBP dashboard (it looks like g.page/r/YourClinic/review) and send it to patients via WhatsApp after a successful appointment. Keep the message short: &ldquo;Thank you for visiting. If you have a moment, a Google review would help other patients find us.&rdquo;</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Reply to every review — positive and negative — within 48 hours. Responses show that the clinic is engaged, and Google takes activity signals into account. For negative reviews, respond calmly and offer to resolve the issue offline.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Print a small card with a QR code linking to the review page. Place it at reception, in the consultation room and in any discharge paperwork.</span>
            </li>
          </ul>

          <p className="text-sm text-muted leading-relaxed" style={sans}>You can also automate review request messages using WhatsApp Business. Read our guide on <Link href="/blog/whatsapp-automation-local-business" className="text-brand-green hover:underline">WhatsApp automation for local business</Link> for the setup steps.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Step 4: Make your website back up your GBP</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Google cross-references your GBP with your website to confirm you are who you say you are. Inconsistency between the two reduces trust and ranking. Your website needs to do several things to support your Maps ranking.</p>

          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Display your clinic name, address and phone number (NAP) in exactly the same format on every page — typically in the footer. The format must match what is on your GBP character for character. &ldquo;St&rdquo; vs &ldquo;Street&rdquo; counts as a mismatch to some tools.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Add LocalBusiness schema (specifically MedicalClinic or Physician) to your homepage and contact page. This schema tells Google your name, address, phone, hours and coordinates in a machine-readable format. See our <Link href="/blog/schema-markup-explained" className="text-brand-green hover:underline">schema markup guide</Link> for the implementation code.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Create a dedicated page for each speciality that naturally mentions the city and neighbourhood. &ldquo;Orthopaedic Surgery in Gachibowli, Hyderabad&rdquo; as a page title is vastly more useful than a generic &ldquo;Services&rdquo; page.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Embed a Google Map on your contact page. It looks helpful to visitors and signals to Google that the location on your site matches the GBP location.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Step 5: Build local citations and directory listings</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>A citation is any mention of your clinic name, address and phone number on a third-party website. Each consistent citation is a vote of confidence in your location data. Priority directories for Indian clinics include Practo, Lybrate, Justdial, Sulekha and Bing Places. For dental clinics, also check DentalDost and 1mg.</p>

          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Create or claim your profile on each directory. Use the exact same NAP format as your website and GBP.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Add your website URL to every directory profile. This creates backlinks that also help your organic rankings.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Check for and correct any old or duplicate listings that show a previous address or phone number. Stale citations actively hurt your ranking.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Step 6: Keep your GBP active with Posts and Q&amp;A</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Google rewards active profiles. The Posts feature in GBP lets you publish short updates — a new service, a health awareness message, a special camp or an achievement. Posts appear directly in Maps and in the Knowledge Panel search result. Publish at least one post per fortnight.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>The Q&amp;A section of your GBP is populated by anyone — patients or even competitors. Monitor it weekly and add your own questions and authoritative answers. Common questions to seed: &ldquo;Do you accept cashless insurance?&rdquo;, &ldquo;Is parking available?&rdquo;, &ldquo;Do you offer home visits?&rdquo;</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Step 7: Measure your Maps performance</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>GBP has a built-in Insights section showing how many times your profile appeared in Maps searches, how many people clicked for directions, called you or visited your website. Check these monthly and look for trends. Supplement GBP Insights with Google Analytics 4 to understand what happens after patients reach your website. See our guide on <Link href="/blog/track-website-leads-ga4" className="text-brand-green hover:underline">tracking website leads in GA4</Link> for the setup.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Common local SEO mistakes for clinics</h3>

          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Using the same phone number for multiple GBP profiles at different locations — each location must have its own direct number</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Keyword-stuffing the business name field (e.g. &ldquo;Dr Reddy Best Cardiologist Hyderabad&rdquo;). Your GBP name must match your legal trading name or signage. Google suspends profiles that stuff keywords into the name.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Not verifying ownership of the profile. An unverified GBP cannot be edited and is vulnerable to ownership hijacking by third parties.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Letting reviews go unanswered for weeks. Even if you are busy, brief replies matter.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Ignoring mobile. Most &ldquo;near me&rdquo; searches happen on phones. If your website is slow or hard to use on mobile, patients who click through from Maps will bounce.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">FAQs</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong className="text-foreground font-normal">How long does it take for a clinic to appear in the Google Maps pack?</strong> For a new or recently claimed profile with zero reviews, expect 3–6 months to build enough signals to enter the map pack for competitive searches. For less competitive queries in smaller towns, results can appear in 4–8 weeks after a full profile optimisation.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong className="text-foreground font-normal">Does the distance of the searcher affect ranking?</strong> Yes. Google considers proximity as one of three main local ranking factors (the others are relevance and prominence). A clinic physically closest to the searcher gets a natural advantage. This is why creating location-specific pages for each neighbourhood you serve is important — it signals relevance for searchers in those areas.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong className="text-foreground font-normal">Should each branch of a multi-location clinic have a separate GBP?</strong> Yes, each physical location needs its own GBP profile with its own address, phone number and photos. Never try to represent multiple locations under a single profile — Google will merge or remove profiles that do not map to real, distinct locations.</p>
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
