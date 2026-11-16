import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/physiotherapy-website-design`;

export const metadata: Metadata = {
  title: "Physiotherapy Clinic Website Design: Help Patients Choose You",
  description:
    "People in pain search fast and choose carefully. Here's how to design a physiotherapy website that explains treatment, builds trust and books assessments.",
  keywords: [
    "physiotherapy website design",
    "physiotherapy clinic website",
    "physio website",
    "physiotherapy marketing",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Physiotherapy Clinic Website Design: Help Patients Choose You | LaunchCraft",
    description:
      "People in pain search fast and choose carefully. Here's how to design a physiotherapy website that explains treatment, builds trust and books assessments.",
    url,
    type: "article",
    publishedTime: "2026-11-17",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiotherapy Clinic Website Design: Help Patients Choose You",
    description:
      "People in pain search fast and choose carefully. Here's how to design a physiotherapy website that explains treatment, builds trust and books assessments.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "Physiotherapy Clinic Website Design: Help Patients Choose You", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Physiotherapy Clinic Website Design: Help Patients Choose You",
  description:
    "People in pain search fast and choose carefully. Here's how to design a physiotherapy website that explains treatment, builds trust and books assessments.",
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
            {["Healthcare", "Web Design"].map((tag) => (
              <span key={tag} className="text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 border border-hairline text-muted" style={sans}>{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl italic text-foreground max-w-3xl mx-auto leading-[1.2]">Physiotherapy Clinic Website Design: Help Patients Choose You</h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">

          <p className="text-sm text-muted leading-relaxed" style={sans}>
            A person with chronic back pain or a swollen knee does not leisurely compare five physiotherapy websites over coffee. They search, they skim the top two or three results, and they book the one that makes them feel understood and confident within sixty seconds. Your website is that first thirty seconds of trust-building — before they ever call, before they walk through your door.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            This guide covers everything a physiotherapy clinic website needs: how to structure condition pages, what to say about your first assessment, when home visits matter, how to show your team, how to handle pricing transparently, what patient education looks like, how to make GP referrals frictionless, and how to rank locally for the searches that bring in real patients.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Build Pages Around the Conditions You Treat</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Most physiotherapy websites have a single "Services" page listing treatment modalities — manual therapy, dry needling, ultrasound, exercise prescription. Patients do not search for modalities. They search for their problem. Build dedicated pages for each condition your clinic treats well.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            The conditions worth dedicated pages include back pain (by far the highest-volume search), neck pain, frozen shoulder, knee pain, sports injuries, stroke rehabilitation, and post-natal physiotherapy. Each page should explain what the condition is in plain language, describe how your clinic assesses it, outline the typical treatment pathway, and give realistic recovery timelines. A patient reading about their own pain and seeing that you understand it — the specific character of a frozen shoulder, the way post-natal pelvic floor problems are still largely under-discussed — will trust you before the first phone call.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            For back pain, distinguish between acute low back pain, disc-related pain, and chronic lower back pain — they have different trajectories and patients often know which one they have. For sports injuries, mention the sports you commonly treat: running injuries, cricket shoulder, football knee. For stroke rehabilitation, acknowledge that families are often searching on behalf of the patient and write for that reader.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Explain the First Assessment Clearly</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            First-time physiotherapy patients are often anxious. They do not know what to wear, whether they will be asked to undress, whether the session will hurt, how long it takes, or whether the physiotherapist will give them a diagnosis or just a list of exercises. Answer all of this directly on a dedicated "What to expect" page or as a prominent section on your homepage.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            A good first-assessment explanation covers: duration (typically 45–60 minutes), what happens during the subjective assessment (questions about your pain, lifestyle, and goals), what the physical examination involves (movements, strength tests, palpation), what you will receive at the end (a diagnosis or working hypothesis, an explanation of contributing factors, and a treatment plan with estimated session numbers), and what to wear or bring. If you use digital intake forms, say so — it feels professional and reduces waiting room friction.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Clinics that explain the first assessment in this detail convert significantly better from enquiry to booked appointment because they remove uncertainty. The patient arrives knowing what to expect and already feeling like a client rather than a stranger.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Home Visit Physiotherapy: A Section Worth Having</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            If your clinic offers home visits, dedicate a section or page to it. Home visit physiotherapy is searched by families of elderly patients, by people recovering from surgery who cannot travel, by post-surgical patients in the weeks immediately after joint replacement, and by stroke patients in early rehabilitation. These patients often have high continuity of care needs and become long-term clients.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Be clear about which areas you cover, what a home visit costs compared to a clinic visit, what equipment the physiotherapist brings, and which conditions are well-suited to home treatment. A short paragraph acknowledging the specific challenges of post-surgical mobility — when getting to a clinic is genuinely difficult — is more persuasive than a generic list of bullet points.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Show Who Will Treat Them</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Physiotherapy is an inherently personal service. Patients want to know who will be touching them, moving their joints, and designing their recovery programme. A team page with real photographs, full names, qualifications, and areas of special interest is not optional — it is one of the highest-converting pages on a physiotherapy website.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Each physiotherapist's profile should include: their degree and registration details, any postgraduate training (manual therapy, sports physiotherapy, women's health, neurological rehabilitation), how many years they have been practising, and two or three sentences in their own voice about why they chose physiotherapy or what they find most rewarding about their work. A warm, genuine bio converts far better than a formal CV summary.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            If your clinic allows patients to request a specific physiotherapist when booking, say so. Many patients will choose a clinic specifically because they can book with someone who has listed a specialism relevant to their condition.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Be Clear and Honest About Cost</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Hiding your fees is one of the most common mistakes on physiotherapy websites. Patients who cannot find pricing assume the clinic is expensive and move on. Display your fees prominently: initial assessment price, follow-up session price, home visit premium if applicable, and any packages you offer for multiple sessions.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            If you accept insurance, list the insurers you are empanelled with. If you work with specific corporate wellness programmes or occupational health referral pathways, mention them. If you offer a free initial phone consultation to help patients decide whether physiotherapy is right for them, that is a strong conversion tool worth advertising clearly.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            For clinics in India, it is worth noting whether you issue GST receipts, whether fees include the cost of any aids like TENS pads or therabands, and whether you offer any concession rates for students, senior citizens, or patients with long-term conditions requiring extended care.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Patient Education: Content That Builds Authority</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            A blog or resources section with genuinely useful patient education content does two things simultaneously: it helps your existing patients understand and manage their conditions between sessions, and it brings in new patients who find your content through search.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            High-value topics include: posture correction exercises for desk workers, how to manage a frozen shoulder at home, running injury prevention, exercises safe to do after a knee replacement, pelvic floor exercises for post-natal women, understanding referred pain, and the difference between physiotherapy and chiropracty. Write these as genuinely informative articles rather than thinly veiled sales content. The more useful the content, the more patients share it, link to it, and trust the clinic that produced it.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Exercise demonstration videos — even simple phone-filmed ones with good lighting and clear verbal cues — have higher engagement than written content alone. If your physiotherapists are willing to appear on camera, short condition explainer videos or exercise walkthroughs are excellent for building personal trust with prospective patients before the first appointment.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Make Referrals Easy for Doctors</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            General practitioners, orthopaedic surgeons, and neurologists are significant referral sources for physiotherapy clinics, particularly for post-surgical rehabilitation, neurological conditions, and chronic pain management. Many physiotherapy websites are designed entirely for end patients and completely ignore the referring clinician.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            A dedicated "For Clinicians" or "Referrals" page should include: a brief statement of your clinic's clinical approach and areas of expertise, a downloadable referral form or a direct email address for clinical correspondence, your typical waiting time for new patients, and information about how you communicate treatment progress back to the referring clinician. Some clinics offer a summary report after the initial assessment; if yours does, say so — this is a meaningful differentiator.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            If your clinic has physiotherapists with particular expertise in post-surgical rehabilitation (hip or knee replacement, rotator cuff repair, ACL reconstruction), make that clear. Surgeons develop referral habits; if your website makes it easy to understand and contact your team, you are far more likely to become a preferred referral destination.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Trust and Proof</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Healthcare websites carry a higher burden of trust than most other service categories. Patients are sharing sensitive health information and placing their physical recovery in your hands. Every element of your website should reinforce that you are qualified, experienced, and have helped people like them.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Registration details:</strong> Display your Indian Association of Physiotherapists membership or state council registration number. This is a basic credibility signal that many clinics omit.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Patient testimonials:</strong> Real quotes with the patient's first name and condition treated convert better than star ratings alone. Video testimonials are more powerful still. Always get written consent before publishing.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Before-and-after case studies:</strong> Anonymised case descriptions ("A 55-year-old with six months of frozen shoulder returned to full overhead movement after eight sessions") give prospective patients a realistic sense of outcomes.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Years in practice and patient numbers:</strong> "Treating patients in Hyderabad since 2011" or "Over 3,000 patients treated" are simple but effective trust markers.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Clinic photography:</strong> Photographs of your actual clinic — treatment rooms, equipment, reception area — are significantly more reassuring than stock images. Patients are mentally rehearsing the visit when they look at your website.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Local SEO for Physiotherapy Clinics</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            The majority of physiotherapy patients search within a radius of five to ten kilometres from their home or workplace. Local SEO is therefore more important for a physio clinic than national ranking. The fundamentals are covered in our guide to <Link href="/blog/local-seo-for-clinics" className="text-brand-green hover:underline">local SEO for clinics</Link>, but the key points specific to physiotherapy are worth spelling out here.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Your Google Business Profile should be fully completed with your address, opening hours, phone number, website link, services listed individually (back pain treatment, sports physiotherapy, post-natal physiotherapy, stroke rehabilitation), and a minimum of ten recent patient reviews. Respond to every review — both positive and negative. Photos of your clinic and team should be regularly updated.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            On your website, include your clinic address in the footer on every page and use LocalBusiness and MedicalBusiness schema markup to help Google understand your location, services, and opening hours. A dedicated contact page with an embedded Google Map, full address, and local landmark references ("near Jubilee Hills road number 36") helps both search engines and patients. See our guide to <Link href="/blog/schema-markup-explained" className="text-brand-green hover:underline">schema markup</Link> for implementation details.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Create location-specific landing pages if you serve multiple areas. A page optimised for "physiotherapy in Banjara Hills" and another for "physiotherapy in Madhapur" will each rank independently and capture neighbourhood-level searches that a single generic page cannot.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">The Booking Experience</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Whatever booking mechanism you use, it should be reachable within two clicks from any page. Options range from a simple contact form or WhatsApp button — which works well for smaller clinics — to a full online scheduling system showing real-time availability. The right choice depends on your volume and how much of your front-desk time you want to free up.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            If you use WhatsApp for appointment booking, an automated initial response confirming you have received the message and giving an expected response time prevents patients from contacting a competitor while they wait. Our guide on <Link href="/blog/whatsapp-automation-local-business" className="text-brand-green hover:underline">WhatsApp automation for local businesses</Link> covers this in detail.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            For online booking systems, make sure new patients can select their condition or the reason for their visit during the booking process — this allows your physiotherapist to review the history before the appointment and have a more productive first session. Appointment reminders via SMS or WhatsApp reduce no-shows significantly.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">How This Relates to Your Broader Clinic Website Strategy</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Physiotherapy website design shares many principles with other healthcare clinic websites — the importance of trust signals, local SEO, transparent pricing, and a clear call to action. If you are building or redesigning a broader clinic website, our guide to <Link href="/blog/clinic-website-design" className="text-brand-green hover:underline">clinic website design</Link> covers those shared principles in depth.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Frequently Asked Questions</h3>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">Do I need a separate page for every condition I treat?</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Not necessarily for every single condition, but for your most common and most searched ones, yes. The conditions that justify their own page are the ones patients actively search for — back pain, neck pain, knee pain, frozen shoulder, sports injuries, stroke rehabilitation, post-natal physiotherapy. For less common presentations, grouping related conditions on a single page (for example, a "post-surgical rehabilitation" page covering multiple surgeries) is a practical alternative.
          </p>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">Should I display my prices on the website?</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Yes. Clinics that display clear pricing consistently report higher conversion rates from website visitors to booked appointments. Patients who cannot find pricing assume the clinic is expensive or evasive and often move on. If your pricing varies depending on the physiotherapist's experience level or the complexity of the condition, explain that clearly rather than leaving it ambiguous.
          </p>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">How important is mobile optimisation for a physiotherapy website?</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Extremely important. The majority of local healthcare searches happen on mobile devices, often in the moment of acute discomfort — someone with sudden back pain is not reaching for their laptop. Your website must load quickly on mobile, display your phone number as a tappable link, and make the booking button visible without scrolling. A website that loads slowly or is difficult to navigate on a phone will lose patients to a competitor before you have had any chance to demonstrate your clinical quality.
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
