import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/website-vs-app-vs-pwa`;

export const metadata: Metadata = {
  title: "Website, Mobile App or PWA: What Does Your Business Actually Need?",
  description: "An app sounds impressive, but many businesses need a great website first. Compare websites, PWAs and native apps on cost, reach and features.",
  keywords: ["website vs mobile app", "progressive web app", "pwa vs native app", "do i need an app for my business"],
  alternates: { canonical: url },
  openGraph: {
    title: "Website, Mobile App or PWA: What Does Your Business Actually Need? | LaunchCraft",
    description: "An app sounds impressive, but many businesses need a great website first. Compare websites, PWAs and native apps on cost, reach and features.",
    url,
    type: "article",
    publishedTime: "2026-11-17",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website, Mobile App or PWA: What Does Your Business Actually Need?",
    description: "An app sounds impressive, but many businesses need a great website first. Compare websites, PWAs and native apps on cost, reach and features.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "Website, Mobile App or PWA: What Does Your Business Actually Need?", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Website, Mobile App or PWA: What Does Your Business Actually Need?",
  description: "An app sounds impressive, but many businesses need a great website first. Compare websites, PWAs and native apps on cost, reach and features.",
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
            {["Mobile App", "Strategy"].map((tag) => (
              <span key={tag} className="text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 border border-hairline text-muted" style={sans}>{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl italic text-foreground max-w-3xl mx-auto leading-[1.2]">Website, Mobile App or PWA: What Does Your Business Actually Need?</h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            "We need an app" is one of the most common things founders say when they first sit down with a development agency. Sometimes they are right. More often they need a fast, well-designed website first — and once that is working, they can decide whether an app would genuinely add value.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            The decision matters because the three options — a traditional website, a Progressive Web App (PWA) and a native mobile app — differ significantly in cost, timeline, discoverability and what they can do for your users. Getting the choice wrong means spending months and significant money on something that does not move your business forward.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            This guide defines each option clearly, compares them on eight dimensions and gives you a framework for making the right call. For cost context, see our breakdown of <Link href="/blog/website-cost-india" className="text-brand-green hover:underline">website costs in India</Link>.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">The Three Options Defined</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            A <strong>website</strong> is a collection of pages served from a URL and accessed through any browser on any device. It can be a simple five-page brochure site, a blog, an e-commerce store or a complex web application. Its defining characteristic is that discovery happens through search engines, social links and direct navigation — no app store is involved.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            A <strong>Progressive Web App (PWA)</strong> is a website built to feel like a native app. It uses modern browser APIs to enable offline functionality, home-screen installation, push notifications and hardware access. The user visits a URL in their browser and, if they choose, adds the site to their home screen. It still lives on the web — no app store listing is required.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            A <strong>native mobile app</strong> is built specifically for iOS, Android or both, distributed through the App Store and Google Play. It has the deepest access to device hardware and operating system features, the most polished platform-specific UI patterns and the highest development and maintenance cost. Users must download it before they can use it.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Side-by-Side Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-muted border-collapse" style={sans}>
              <thead>
                <tr className="border-b border-hairline">
                  <th className="text-left py-2 pr-4 text-foreground font-normal italic">Dimension</th>
                  <th className="text-left py-2 pr-4 text-foreground font-normal italic">Website</th>
                  <th className="text-left py-2 pr-4 text-foreground font-normal italic">PWA</th>
                  <th className="text-left py-2 text-foreground font-normal italic">Native App</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 font-medium text-foreground">Discovery</td>
                  <td className="py-2 pr-4">Google / social / direct URL</td>
                  <td className="py-2 pr-4">Google / social / direct URL</td>
                  <td className="py-2">App Store + Google Play (plus web marketing needed)</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 font-medium text-foreground">Install friction</td>
                  <td className="py-2 pr-4">None — opens instantly</td>
                  <td className="py-2 pr-4">Optional home-screen install</td>
                  <td className="py-2">Must download (100 MB+ typical)</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 font-medium text-foreground">Development cost</td>
                  <td className="py-2 pr-4">Lowest</td>
                  <td className="py-2 pr-4">Low to medium</td>
                  <td className="py-2">High (double for iOS + Android)</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 font-medium text-foreground">Time to launch</td>
                  <td className="py-2 pr-4">Days to weeks</td>
                  <td className="py-2 pr-4">Weeks to 2 months</td>
                  <td className="py-2">3–9 months typical</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 font-medium text-foreground">SEO visibility</td>
                  <td className="py-2 pr-4">Full</td>
                  <td className="py-2 pr-4">Full (it's still a URL)</td>
                  <td className="py-2">None (app store listing only)</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 font-medium text-foreground">Offline use</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2 pr-4">Yes (service worker cache)</td>
                  <td className="py-2">Yes</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 font-medium text-foreground">Push notifications</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2 pr-4">Yes (Android; limited iOS)</td>
                  <td className="py-2">Yes (full native support)</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 font-medium text-foreground">Hardware access</td>
                  <td className="py-2 pr-4">Camera, location (browser only)</td>
                  <td className="py-2 pr-4">Camera, location, some sensors</td>
                  <td className="py-2">Full — camera, biometrics, Bluetooth, NFC</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Start With a Website If...</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Your primary goal is generating leads, bookings or sales — discovery through search engines and social media is your main acquisition channel and a website is what search engines index.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">You are pre-revenue or early-stage. A well-built website lets you validate demand, test messaging and iterate quickly without committing to a multi-month app development cycle.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Your users are unlikely to return frequently enough to justify the friction of downloading a dedicated app. If someone visits your clinic or hires your agency once every six months, an app install is not a reasonable ask.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Choose a PWA If...</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">You have users who return frequently and benefit from offline access — a delivery tracking page, a gym schedule, a loyalty card — but you do not need deep device hardware integration.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">You want push notifications on Android without the cost and complexity of a native app. PWA push notifications work well on Android; iOS support has improved with Safari updates but remains less reliable.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Your budget is limited but you want a step up from a basic website in terms of user experience, speed and engagement. A well-built PWA can achieve a great deal at a fraction of native app costs.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Build a Native App If...</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Your product depends on hardware that browsers cannot reliably access — Bluetooth, NFC, background GPS tracking, biometric authentication or augmented reality.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Your users will use the product daily or multiple times a day and performance, gestures and platform-native UI patterns matter deeply for the experience — a fitness tracker, a task manager or a live-streaming app.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">Being present in app store listings is commercially important to you — your competitors are there, your enterprise clients require it, or you plan to monetise through in-app purchases.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed">You have validated demand through a website or PWA, have recurring revenue to fund ongoing app maintenance, and have a team or budget to handle two separate codebases or cross-platform tooling.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Four Questions to Ask Before Building an App</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Before committing to native app development, work through these four questions honestly.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>How often will users open it?</strong> Apps that are opened fewer than once a week get uninstalled. If the use case is infrequent, a mobile-optimised website achieves the same result without the install barrier.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>What can the app do that your website cannot?</strong> If the honest answer is "it looks more professional," that is not enough justification for the cost. The app needs a functional reason to exist.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Who will maintain it after launch?</strong> Every app requires ongoing maintenance — OS updates, library updates, security patches, store compliance changes. This work never stops. Budget for it before you start.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Have you validated the need?</strong> Build your MVP as a website first, acquire real users, and confirm that those users are asking for an app feature you cannot deliver in a browser. Then build the app. This approach is detailed in our <Link href="/blog/mvp-development-guide" className="text-brand-green hover:underline">MVP development guide</Link>.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Cross-Platform Frameworks</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            If you do decide to build a native app, you do not necessarily have to write two completely separate codebases. Cross-platform frameworks let a single team write code that compiles to both iOS and Android.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            React Native, backed by Meta and used at scale by companies like Shopify and Microsoft, allows JavaScript and React developers to build native apps with a shared codebase. Flutter, backed by Google, uses the Dart language and compiles to native ARM code on both platforms, with strong performance characteristics. Both frameworks have mature ecosystems, large communities and are actively maintained.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Cross-platform is not always the right choice. If your product makes heavy use of platform-specific APIs — deeply integrated iOS features like SharePlay, CarPlay or WidgetKit, or Android-specific system integrations — a native-only approach may save time overall. For most business applications, however, React Native or Flutter dramatically reduces cost and keeps the codebase unified.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">App Store Accounts</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Publishing to the Apple App Store requires an Apple Developer Program membership, which costs $99 per year (approximately ₹8,300 at current exchange rates). The review process typically takes one to three days for new apps and must be passed again after major updates.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Publishing to the Google Play Store requires a one-time registration fee of $25 (approximately ₹2,100). Google Play review times have shortened significantly and are typically a few hours to two days. Both stores take a 15–30% commission on in-app purchases and subscriptions, depending on your revenue tier and the type of purchase.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">The Sensible Path for Most Businesses</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            For the majority of small and mid-sized businesses, the right sequence is: start with an excellent website, optimise it for mobile, track your leads and conversions, then evaluate whether a PWA or native app solves a specific problem your users are actively encountering.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            A gym that books 200 classes a month through its website does not necessarily need an app — it may need a better booking flow. A food delivery startup that is processing 500 orders a day and whose users are asking for order tracking and push notifications probably does need a PWA or app. The data from your website tells you which situation you are in.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            For sector-specific examples, our <Link href="/blog/gym-website-design" className="text-brand-green hover:underline">gym website design guide</Link> shows how much can be achieved on the web before an app is needed. For general cost planning, the <Link href="/blog/website-cost-india" className="text-brand-green hover:underline">website cost guide for India</Link> gives realistic budgets for different project types. And if you are ready to explore <Link href="/services" className="text-brand-green hover:underline">our services</Link>, we can help you scope the right solution.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Frequently Asked Questions</h3>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">Can a PWA be listed in the App Store or Google Play?</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Google Play now allows PWAs to be listed through a wrapper called a Trusted Web Activity (TWA). Apple does not support PWA listings in the App Store. If being present in both stores is important, a TWA gets you into Google Play quickly and cheaply, but iOS still requires a native or cross-platform app build.
          </p>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">Will my users actually install a PWA to their home screen?</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Installation rates vary significantly by use case. For services where users return frequently and find genuine value in home-screen access, install rates can be meaningful. For infrequent-use sites, most users will simply bookmark the URL in the browser and never install. The PWA install prompt should be presented contextually — after the user has completed a positive action — rather than on first load.
          </p>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">What is the minimum viable approach if I definitely want an app eventually?</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Build your website with a clean REST API or GraphQL layer from the start, even if the app is months away. When you are ready to build the app, the data layer already exists. Many founders regret building a monolithic website that is hard to separate later. A small amount of architectural planning at the website stage saves significant time when you eventually build the app.
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
