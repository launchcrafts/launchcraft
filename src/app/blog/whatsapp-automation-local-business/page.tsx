import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/whatsapp-automation-local-business`;

export const metadata: Metadata = {
  title: "WhatsApp Automation for Local Businesses: A Practical 2026 Guide",
  description: "Most Indian customers would rather WhatsApp you than fill a form. Here is how to automate replies, bookings and reminders, and what the API really costs.",
  keywords: [
    "whatsapp automation",
    "whatsapp business api india",
    "whatsapp chatbot for business",
    "whatsapp api pricing",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "WhatsApp Automation for Local Businesses: A Practical 2026 Guide | LaunchCraft",
    description: "Most Indian customers would rather WhatsApp you than fill a form. Here is how to automate replies, bookings and reminders, and what the API really costs.",
    url,
    type: "article",
    publishedTime: "2026-11-15",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Automation for Local Businesses: A Practical 2026 Guide",
    description: "Most Indian customers would rather WhatsApp you than fill a form. Here is how to automate replies, bookings and reminders, and what the API really costs.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "WhatsApp Automation for Local Businesses: A Practical 2026 Guide", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WhatsApp Automation for Local Businesses: A Practical 2026 Guide",
  description: "Most Indian customers would rather WhatsApp you than fill a form. Here is how to automate replies, bookings and reminders, and what the API really costs.",
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
            {["Whatsapp Automation", "Whatsapp Business Api India", "Whatsapp Chatbot For Business", "Whatsapp Api Pricing"].map((tag) => (
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
            WhatsApp Automation for Local Businesses: A Practical 2026 Guide
          </h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
            <p className="text-sm text-muted leading-relaxed" style={sans}>For most local businesses in India, WhatsApp is where customers already are. They would rather send a quick message than fill in a form or wait on hold. WhatsApp automation lets you reply instantly, confirm bookings, send reminders and pass leads to your team, all without someone glued to the phone. Here is how it works and what it costs.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">WhatsApp Business App vs WhatsApp Business Platform</h3>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">What you can automate</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Instant replies with timings, location, prices and a booking link</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Appointment booking and confirmation, linked to your calendar</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Reminders before an appointment or a payment due date</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Order updates for e-commerce: confirmed, shipped, delivered</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Lead routing: new enquiries saved to your CRM and sent to the right staff member</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Feedback and review requests after a visit</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Click-to-WhatsApp ads that open a conversation straight from Instagram or Facebook</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">How WhatsApp pricing works now</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Since 1 July 2025, Meta charges per delivered template message, not per conversation, and the rate depends on the message category and the customer’s country (Meta’s pricing page). Messages customers send you are free.</p>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Marketing templates (offers, promotions) cost the most</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Utility templates (booking confirmations, order updates) cost much less</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Authentication templates (OTP codes) cost about the same as utility</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Service messages are replies inside the 24-hour window after a customer messages you. From 1 October 2026, each business number gets 1,000 free service messages a month, and replies beyond that are charged</span>
                </li>
            </ul>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Meta’s India rate card lists ₹0.8631 per marketing message and ₹0.115 per utility or authentication message (Free Press Journal). Your provider’s platform fee and GST come on top. Rates change, so check Meta’s current card before you budget.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">How to get started</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Choose a provider (a Meta Business Solution Provider) or connect directly through Meta’s Cloud API.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Verify your business in Meta Business Manager and register a phone number not already used on the WhatsApp app.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Get opt-in. Only message people who have agreed to hear from you, for example through a checkbox on your form.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Write and submit templates for confirmations, reminders and offers. Meta reviews them before use.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Build the flows: welcome menu, FAQs, booking, human handover.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Connect your systems: website forms, CRM, booking calendar, Google Sheets.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Test, launch and review conversations every week.</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Tips that keep customers happy</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Keep marketing messages rare and useful, or people will block you</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Always offer "talk to a person" in the menu</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Reply in the customer’s language where you can</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Send utility messages (confirmations, reminders) as utility, not marketing, so they are cheaper and approved faster</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">FAQs</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Can I use my existing WhatsApp number? Often, yes. Some providers let you keep using the same number in the WhatsApp Business app and on the Platform. Otherwise the number moves to the Platform and stops working in the app. Ask your provider which option applies before you switch.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Is a WhatsApp chatbot allowed? Yes, on the official Business Platform. Unofficial tools that automate the regular app risk getting your number banned.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>How quickly can it go live? Once your business is verified and templates are approved, a simple flow can launch within days.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Next step</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Want WhatsApp to answer, book and remind for you? Talk to us about WhatsApp automation.</p>
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
