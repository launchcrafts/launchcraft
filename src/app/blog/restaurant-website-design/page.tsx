import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/restaurant-website-design`;

export const metadata: Metadata = {
  title: "Restaurant Website Design: 10 Features That Win Bookings and Direct Orders",
  description: "Diners check your menu, photos and timings before they visit. Here are 10 features that turn a restaurant website into bookings and direct orders.",
  keywords: ["restaurant website design", "restaurant website features", "cafe website design", "restaurant online ordering"],
  alternates: { canonical: url },
  openGraph: {
    title: "Restaurant Website Design: 10 Features That Win Bookings and Direct Orders | LaunchCraft",
    description: "Diners check your menu, photos and timings before they visit. Here are 10 features that turn a restaurant website into bookings and direct orders.",
    url,
    type: "article",
    publishedTime: "2026-11-17",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Website Design: 10 Features That Win Bookings and Direct Orders",
    description: "Diners check your menu, photos and timings before they visit. Here are 10 features that turn a restaurant website into bookings and direct orders.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "Restaurant Website Design: 10 Features That Win Bookings and Direct Orders", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Restaurant Website Design: 10 Features That Win Bookings and Direct Orders",
  description: "Diners check your menu, photos and timings before they visit. Here are 10 features that turn a restaurant website into bookings and direct orders.",
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
            {["Web Design", "Restaurant"].map((tag) => (
              <span key={tag} className="text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 border border-hairline text-muted" style={sans}>{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl italic text-foreground max-w-3xl mx-auto leading-[1.2]">Restaurant Website Design: 10 Features That Win Bookings and Direct Orders</h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
          <p className="text-sm text-muted leading-relaxed" style={sans}>Before most diners decide where to eat, they look up the restaurant online. They want to see the food, understand the vibe, check the timings and find a way to book or order without calling. If your website does not give them this in under 30 seconds on a phone, they are going to the competitor whose website does. These are the 10 features that every restaurant and cafe website needs in 2026.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">What diners see first</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>The first screen a visitor sees — before they scroll — needs to answer three questions instantly: What kind of food is this? Where is it? How do I book or order? Every restaurant homepage should have the cuisine type or restaurant concept visible in the headline, the city or neighbourhood in the subheading or header bar, and a prominent button for reservations or online ordering above the fold.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}>The background image or video behind that text needs to show your actual food or your actual dining space — not stock photography. A single great food photograph taken by a professional photographer is worth more than a full page of words. For how to structure everything below the hero, see our <Link href="/blog/homepage-design" className="text-brand-green hover:underline">homepage design guide</Link>.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">The 10 features</h3>

          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">1. A digital menu that is part of the page, not a PDF.</strong> PDF menus are the single biggest UX mistake in restaurant websites. They do not zoom well on phones, they open in a new tab interrupting the experience, and they cannot be indexed by Google for individual dish searches. Build your menu as a web page with sections for starters, mains, desserts and drinks. Each section should be clearly labelled and easy to navigate on a phone screen.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">2. Food photography that makes people hungry.</strong> You need three types of photos: hero shots of your signature dishes (shot overhead or at 45 degrees with a clean background), ambience shots of the dining room at service time (not empty), and a few behind-the-scenes shots of the kitchen or the team. Invest in a professional food photographer for at least the hero shots. Phone photos are acceptable for social media but rarely strong enough for the main website.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">3. Online table reservation.</strong> A &ldquo;Book a Table&rdquo; button should appear in the navigation, in the hero section and at the bottom of the page. The booking flow should take no more than three taps on a phone: select date, select time, enter name and phone number, confirm. Avoid booking systems that require creating an account — it kills conversions. For smaller restaurants, a WhatsApp-based booking flow (tap the button, it opens a pre-filled WhatsApp message) works remarkably well. See our <Link href="/blog/whatsapp-automation-local-business" className="text-brand-green hover:underline">WhatsApp automation guide</Link> for the setup.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">4. Direct online ordering for delivery and takeaway.</strong> If you offer delivery or takeaway, build direct ordering into your website rather than relying entirely on third-party apps. The economics are straightforward: Swiggy and Zomato typically charge 20–30% commission. A direct order through your website costs a fraction of that. Even capturing 20% of your delivery orders directly can significantly improve margins. We cover this in detail in the section below.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">5. Hours, location and parking — on every page.</strong> Put your opening hours, address and parking information in the footer so they appear on every page. A Google Maps embed on the contact page is helpful, but a plain text address with the nearest landmark (&ldquo;opposite Inorbit Mall, Hitec City&rdquo;) is often more useful to someone navigating. If you close on specific days or observe seasonal hours, make this prominent — a frustrated diner who arrives at a closed restaurant will not come back.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">6. Dietary and allergen information on the menu.</strong> Veg, non-veg and egg symbols (the FSSAI green dot, brown dot system) are legally required in India on packaged foods and strongly advisable on restaurant menus. Add Jain, gluten-free and nut-free markers where applicable. Customers with dietary restrictions will specifically choose you over a restaurant that does not make this clear. This is a small effort with a large trust payoff.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">7. Private dining and events page.</strong> Private dining — birthday parties, corporate lunches, anniversary dinners — is typically higher-margin than regular walk-in service. Many restaurants have private dining facilities that are almost invisible on their website. Give it a dedicated page with photos of the space set for a function, capacity numbers, a minimum spend or pricing guidance and a direct enquiry form. This page can also rank for searches like &ldquo;private dining venues Bangalore&rdquo;.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">8. Genuine customer reviews embedded or linked.</strong> Embed your Google rating widget or pull in a few verbatim Google reviews (with the reviewer&apos;s name and star rating). Do not write your own testimonials — people can tell. A 4.4-star Google rating shown on your website is far more persuasive than four invented five-star quotes. Link to your full Google profile so visitors can read more if they want.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">9. Speed and mobile performance.</strong> Restaurant searches happen on phones, often when someone is already out and deciding where to eat. If your website takes more than three seconds to load on a 4G connection, you have already lost that visitor. Optimise your food photos (convert to WebP format, lazy load images below the fold), minimise third-party scripts and use a fast hosting provider. See our <Link href="/blog/core-web-vitals-explained" className="text-brand-green hover:underline">Core Web Vitals guide</Link> for how to measure and fix speed issues.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">10. Schema markup for restaurants.</strong> Add Restaurant schema to your homepage. This structured data tells Google your name, address, phone number, opening hours, cuisine type, price range and whether you accept reservations. It powers the rich information box that appears in Google search results and Maps. Correctly implemented schema can display your hours directly in search without the visitor even clicking through to your site. See our <Link href="/blog/schema-markup-explained" className="text-brand-green hover:underline">schema markup guide</Link> for the implementation code.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Direct orders versus delivery app commissions</h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-muted border-collapse" style={sans}>
              <thead>
                <tr className="border-b border-hairline">
                  <th className="text-left py-2 pr-4 text-foreground font-normal italic">Comparison point</th>
                  <th className="text-left py-2 pr-4 text-foreground font-normal italic">Delivery apps</th>
                  <th className="text-left py-2 pr-4 text-foreground font-normal italic">Direct ordering (your website)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4">Commission per order</td>
                  <td className="py-2 pr-4">18–30%</td>
                  <td className="py-2 pr-4">Payment gateway fee 2–3% only</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4">Customer data</td>
                  <td className="py-2 pr-4">Owned by the platform</td>
                  <td className="py-2 pr-4">Owned by you</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4">Repeat order incentives</td>
                  <td className="py-2 pr-4">Platform loyalty, not yours</td>
                  <td className="py-2 pr-4">Your loyalty programme, WhatsApp offers</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4">Brand control</td>
                  <td className="py-2 pr-4">Listed alongside competitors</td>
                  <td className="py-2 pr-4">Full brand experience</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4">Setup effort</td>
                  <td className="py-2 pr-4">Low</td>
                  <td className="py-2 pr-4">Medium (one-time)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-muted leading-relaxed" style={sans}>The recommendation for most restaurants is to maintain presence on delivery apps for discovery and volume, but actively encourage repeat customers to order directly through your website by offering a small discount or free item on direct orders. Even a 10% discount on direct orders saves you 10–20% per order compared to the app commission. Use WhatsApp to send order reminders and direct order links to your existing customers.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Google Business Profile for restaurants</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Your Google Business Profile is as important as your website for local discovery. When someone searches &ldquo;restaurants near Banjara Hills&rdquo;, the map pack results appear before any organic website results. Keep your GBP fully updated: add your menu, upload new food photos regularly (at least monthly), enable the &ldquo;Order Online&rdquo; button pointing to your direct ordering page and respond to every review within 24 hours. Use the Posts feature to announce new dishes, special menus and events. Track how many people click for directions and call you from the profile using GBP Insights, and supplement this with <Link href="/blog/track-website-leads-ga4" className="text-brand-green hover:underline">GA4 lead tracking</Link> to understand the full funnel.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">FSSAI licence display</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}>Under the Food Safety and Standards Act, food business operators in India are required to display their FSSAI licence number. For restaurants and cloud kitchens, this applies to both the physical premises and your website. Add your FSSAI licence number to the footer of your website alongside your address. For cloud kitchens operating purely through delivery, this is particularly important as it is the primary trust signal customers have — they never see your physical space. A missing FSSAI number can be the reason a first-time customer decides to order from someone else.</p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Content that keeps your website fresh</h3>

          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Seasonal menus and specials.</strong> A page or section for limited-time menus (Diwali thali, summer coolers, festive brunch) gives returning visitors a reason to come back and gives you content to share on social media and WhatsApp.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">The story behind the food.</strong> A short &ldquo;About&rdquo; section explaining the cuisine, the chef&apos;s background or the sourcing of key ingredients adds authenticity and differentiates you from generic restaurant listings. People eat stories as much as food.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Press and media coverage.</strong> If you have been featured in a food magazine, newspaper or blog, add a press section. Even a simple logo strip of publications that have covered you is a strong trust signal.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground font-normal">Gift cards.</strong> Digital gift cards are low-effort to implement and represent income today for future visits. Add a gift card purchase option especially before Diwali, Christmas and Valentine&apos;s Day.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">FAQs</h3>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong className="text-foreground font-normal">Do I need a website if I am already on Swiggy and Zomato?</strong> Yes. The delivery apps are discovery platforms for new customers, but they charge a significant commission on every order and they own the customer relationship, not you. A website gives you direct bookings, direct orders at better margins, an email and WhatsApp database you control and a space to tell your brand story. Many restaurants that relied purely on delivery apps through 2022–2024 found their margins eroded as commissions increased. Your website is your insurance.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong className="text-foreground font-normal">How much does a restaurant website cost in India?</strong> A well-designed restaurant website with a digital menu, booking integration and direct ordering capability typically costs between ₹35,000 and ₹1,20,000 depending on complexity. The investment pays back quickly when you consider even a small shift from app-based to direct orders. A restaurant doing ₹5 lakh per month in delivery orders and moving 20% to direct ordering saves roughly ₹20,000–₹30,000 per month in commissions.</p>

          <p className="text-sm text-muted leading-relaxed" style={sans}><strong className="text-foreground font-normal">Should my restaurant website have a blog?</strong> It depends on your appetite for content. A blog is not essential for a restaurant — the food photography, menu and reviews do the heavy lifting. However, if you have something genuinely interesting to say (behind-the-scenes of your kitchen, the story of a regional dish you serve, a guide to pairing food with Indian wines), a blog can build an audience and attract Google traffic from food-related searches. Do not start a blog if you will not update it — an abandoned blog with three posts from two years ago looks worse than no blog at all.</p>
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
