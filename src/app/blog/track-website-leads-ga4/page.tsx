import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/track-website-leads-ga4`;

export const metadata: Metadata = {
  title: "How to Track Website Leads in GA4: Forms, Calls and WhatsApp Clicks",
  description: "If you can't see which page or campaign brought a lead, you can't grow. Here's how to track forms, calls and WhatsApp clicks as key events in GA4.",
  keywords: ["track website leads ga4", "ga4 key events", "track whatsapp clicks", "form submission tracking"],
  alternates: { canonical: url },
  openGraph: {
    title: "How to Track Website Leads in GA4: Forms, Calls and WhatsApp Clicks | LaunchCraft",
    description: "If you can't see which page or campaign brought a lead, you can't grow. Here's how to track forms, calls and WhatsApp clicks as key events in GA4.",
    url,
    type: "article",
    publishedTime: "2026-11-17",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Track Website Leads in GA4: Forms, Calls and WhatsApp Clicks",
    description: "If you can't see which page or campaign brought a lead, you can't grow. Here's how to track forms, calls and WhatsApp clicks as key events in GA4.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "How to Track Website Leads in GA4: Forms, Calls and WhatsApp Clicks", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Track Website Leads in GA4: Forms, Calls and WhatsApp Clicks",
  description: "If you can't see which page or campaign brought a lead, you can't grow. Here's how to track forms, calls and WhatsApp clicks as key events in GA4.",
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
            {["Analytics", "GA4"].map((tag) => (
              <span key={tag} className="text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 border border-hairline text-muted" style={sans}>{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl italic text-foreground max-w-3xl mx-auto leading-[1.2]">How to Track Website Leads in GA4: Forms, Calls and WhatsApp Clicks</h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Most businesses know roughly how many leads they got last month. Very few know which page, ad or campaign generated each one. That gap is expensive. Without knowing what works, you repeat what feels good rather than what actually converts. Google Analytics 4 gives you the data to close that gap — but only if you configure it correctly.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            This guide walks through what to track, how to set it up with or without a developer, and how to turn the data into monthly decisions. If your site is well-designed but flying blind on results, also read our guide to <Link href="/blog/landing-page-design-elements" className="text-brand-green hover:underline">landing page design elements that convert</Link>.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">The Name Change You Need to Know</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            If you used Universal Analytics (the previous version of Google Analytics), you tracked "goals" and "conversions." GA4 replaced that model. The correct term is now <strong>key events</strong>. Any event in GA4 can be promoted to a key event in the Admin panel; once marked, it appears in your reports under Conversions and in campaign dashboards inside Google Ads.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            The practical difference is that GA4 tracks everything as an event from the start — page views, scrolls, clicks and your custom actions. You choose which events are meaningful enough to call key events. This gives you more flexibility than the old goal system, but it also means nothing is promoted automatically. You have to do it deliberately.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">What to Track: Six Actions Worth Measuring</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Not every click needs to be a key event, but the following six actions represent genuine lead intent and should always be tracked for a service business.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-muted border-collapse" style={sans}>
              <thead>
                <tr className="border-b border-hairline">
                  <th className="text-left py-2 pr-4 text-foreground font-normal italic">Action</th>
                  <th className="text-left py-2 pr-4 text-foreground font-normal italic">Suggested Event Name</th>
                  <th className="text-left py-2 text-foreground font-normal italic">How to Detect</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4">Contact form submission</td>
                  <td className="py-2 pr-4"><code>form_submit_contact</code></td>
                  <td className="py-2">Thank-you page view or success callback</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4">Quote / enquiry form submission</td>
                  <td className="py-2 pr-4"><code>form_submit_quote</code></td>
                  <td className="py-2">Thank-you page view or success callback</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4">Phone number click</td>
                  <td className="py-2 pr-4"><code>click_phone</code></td>
                  <td className="py-2"><code>href</code> starts with <code>tel:</code></td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4">WhatsApp button click</td>
                  <td className="py-2 pr-4"><code>click_whatsapp</code></td>
                  <td className="py-2"><code>href</code> contains <code>wa.me</code> or <code>whatsapp.com</code></td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4">Email address click</td>
                  <td className="py-2 pr-4"><code>click_email</code></td>
                  <td className="py-2"><code>href</code> starts with <code>mailto:</code></td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4">Brochure / PDF download</td>
                  <td className="py-2 pr-4"><code>download_brochure</code></td>
                  <td className="py-2">Click on <code>.pdf</code> link</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Option 1: Set Up Tracking via Google Tag Manager</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Google Tag Manager (GTM) is a free tool that lets you add and manage tracking code without editing your website's source. It is the right choice if your website is built on WordPress, Webflow or another platform where you can paste a script tag but cannot easily modify component logic.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            The general approach is as follows. First, install GTM on your site by pasting its two code snippets — one in the <code>&lt;head&gt;</code> and one after the opening <code>&lt;body&gt;</code> tag. Then create a GA4 Configuration tag inside GTM and point it at your Measurement ID (the string beginning with G-). With that in place, you can build triggers and tags for each of the six actions above.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            For WhatsApp and phone clicks, create a Click trigger with the condition "Click URL contains wa.me" or "Click URL starts with tel:" respectively. Attach a GA4 Event tag to each trigger and name the event using the naming convention from the table. For form submissions, the cleanest approach is a Page View trigger that fires only when the URL contains your thank-you page path, such as <code>/thank-you</code> or <code>/?submitted=true</code>. This avoids false positives from partial form interactions.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            If your form does not redirect to a thank-you page, use GTM's Form Submission trigger instead. Enable the "Check Validation" option so the event only fires when the form passes its own validation checks.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Option 2: Tracking Inside a Next.js App</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            If your site is built in Next.js, you can send events directly from your components without GTM as an intermediary. The recommended approach uses the <code>@next/third-parties/google</code> package, which is maintained by the Next.js team and handles the GA4 script loading correctly with the App Router.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Install the package, add the <code>GoogleAnalytics</code> component in your root layout, and import the <code>sendGAEvent</code> helper wherever you need it. You can then call <code>sendGAEvent("event", "click_whatsapp", &#123; page: pathname &#125;)</code> inside an <code>onClick</code> handler on your WhatsApp button. The same pattern works for phone links, email links and any custom callback your form exposes on successful submission.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            The advantage of this approach is that the events carry the full application context — you can pass the current page path, the form name, or any other parameter that helps you understand the data later. Keep event names consistent with the table above so your reports stay readable as the site grows.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Marking Events as Key Events in GA4</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Once your events are firing, go to GA4 Admin &rarr; Data Display &rarr; Events. Wait 24 to 48 hours for new events to appear. When you can see your custom events listed, click the toggle in the "Mark as key event" column next to each one. They will now show up under Reports &rarr; Engagement &rarr; Conversions and will be available as conversion actions if you link GA4 to Google Ads.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Do not mark every event as a key event. Keep the list to genuine lead signals. If you mark scroll depth or video plays as key events, your conversion data becomes noise and your Google Ads Smart Bidding will optimise for the wrong behaviour.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">UTM Tagging: Connecting Leads Back to Campaigns</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Key events tell you that a lead happened. UTM parameters tell you where that person came from. Add UTM tags to any link you control — Google Ads, Meta Ads, email newsletters, WhatsApp broadcast messages, and any link you share in your Instagram bio.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            A properly tagged URL looks like this:
          </p>
          <pre className="bg-background border border-hairline p-4 rounded text-xs overflow-x-auto"><code>https://launchcrafts.in/contact?utm_source=google&utm_medium=cpc&utm_campaign=web-design-hyderabad&utm_content=cta-button</code></pre>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Use lowercase consistently. Inconsistent casing creates duplicate rows in your acquisition reports — "Google" and "google" appear as separate sources. Build all your URLs with Google's Campaign URL Builder to avoid manual errors. When a visitor with this URL converts, GA4 records the source, medium, campaign and content alongside the key event, so you can see exactly which ad drove that form submission.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">What Click Tracking Cannot Tell You</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            It is worth being honest about the limits of click-based lead tracking. A WhatsApp click event confirms someone tapped your button. It does not confirm they sent a message, that you replied, or that they became a paying client. A phone click event confirms the dialler opened. It does not confirm the call connected.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            For businesses where the sale happens offline or in a conversation, supplement GA4 data with a simple CRM or even a shared spreadsheet where the team records lead source at the point of first contact. Over time, compare your GA4 key event counts with your actual qualified lead counts. The ratio tells you the quality of traffic from each source — a channel that drives many clicks but few real leads needs attention.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            You can also read our guide on <Link href="/blog/business-tasks-to-automate" className="text-brand-green hover:underline">business tasks to automate</Link> for ideas on connecting your website leads directly to a CRM without manual entry.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Consent and Data Collection</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            If your website serves visitors in the European Union or the United Kingdom, you are required under GDPR to obtain consent before firing analytics tags. GA4 supports Consent Mode v2, which allows it to model conversion data for users who decline cookies, reducing the data gap caused by consent refusals.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            For businesses operating only within India, there is no equivalent federal cookie consent law at the time of writing, though the Digital Personal Data Protection Act 2023 is gradually being notified. Even without a legal requirement, displaying a brief cookie notice is considered good practice and builds user trust. At minimum, update your Privacy Policy to disclose that you use Google Analytics.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Testing with GA4 DebugView</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Before going live, verify your events are firing correctly using GA4's DebugView. In Chrome, install the Google Analytics Debugger extension and enable it. Then navigate to GA4 Admin &rarr; DebugView. As you interact with your website in the same browser — clicking buttons, submitting forms, tapping WhatsApp — the events appear in DebugView in near-real time, usually within a few seconds.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Check that the event name matches what you expect, that required parameters are present, and that the event does not fire multiple times for a single action. A form submission event that fires twice will inflate your conversion count significantly over time. Once you are confident everything fires correctly, disable the debug extension and treat the setup as production-ready.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            For a broader SEO and technical health perspective, our <Link href="/blog/homepage-design" className="text-brand-green hover:underline">homepage design guide</Link> and <Link href="/blog/website-maintenance-checklist" className="text-brand-green hover:underline">website maintenance checklist</Link> cover what to review monthly alongside your analytics.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Three Monthly Reports to Review</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Acquisition by source / medium:</strong> Go to Reports &rarr; Acquisition &rarr; Traffic Acquisition. Add "Key events" as a secondary metric. This shows you which channels are delivering leads, not just traffic. If organic search drives 60% of traffic but only 20% of key events, your landing pages need work.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Landing page performance:</strong> Go to Reports &rarr; Engagement &rarr; Landing Page. This shows which pages visitors arrive on first. Cross-reference with key events to find pages with high traffic but low lead rate — these are your optimisation priorities.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Device category:</strong> Go to Reports &rarr; Tech &rarr; Tech Overview and filter by device category. If the majority of your key events come from mobile but your mobile experience is poor, you have identified the single highest-leverage improvement available. Compare mobile and desktop conversion rates every month.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Frequently Asked Questions</h3>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">Is GA4 free?</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Yes. The standard version of GA4 is free for any website. Google Analytics 360, the enterprise version, is paid and adds higher data limits and advanced features, but the free tier is sufficient for the vast majority of small and mid-sized businesses. You need a Google account to create a GA4 property.
          </p>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">How long does it take for key events to appear in reports?</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Standard GA4 reports are updated with a lag of 24 to 48 hours. DebugView shows events in near-real time for testing. The Realtime report shows events from the last 30 minutes. For daily decision-making, check your reports in the morning for the previous day's data.
          </p>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">Can I track leads without a developer?</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Yes, with Google Tag Manager. If you can paste a code snippet into your site's header (most website builders allow this), GTM handles the rest without touching your site's source code again. The triggers and tags for phone clicks, WhatsApp clicks and thank-you page views can all be configured inside the GTM interface. For form tracking on custom forms without a redirect page, some developer involvement may be needed to expose a submission event that GTM can listen to.
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
