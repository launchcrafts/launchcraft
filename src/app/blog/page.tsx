import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";

export const metadata: Metadata = {
  title: "Blog — Web Development, Digital Marketing & Agency Insights | LaunchCraft",
  description:
    "Read expert insights on web development, digital marketing, SEO, and choosing the best agency in Hyderabad. Practical advice from LaunchCraft's team.",
  keywords: [
    "web development blog",
    "digital marketing insights",
    "best web agency Hyderabad",
    "website design tips",
    "SEO blog India",
    "LaunchCraft blog",
  ],
  alternates: { canonical: `${baseUrl}/blog` },
  openGraph: {
    title: "Blog — Web Development & Agency Insights | LaunchCraft",
    description:
      "Expert insights on web development, digital marketing, and choosing the best agency in Hyderabad.",
    url: `${baseUrl}/blog`,
    type: "website",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Web Development & Agency Insights | LaunchCraft",
    description: "Expert insights on web development, digital marketing, and choosing the best agency.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const posts = [
  { title: "Best Web Development Agency in Hyderabad — 2026 Guide", slug: "best-web-development-agency-hyderabad", excerpt: "A detailed guide to finding the best web development agency, digital marketing agency, and website design company in Hyderabad.", date: "2026-11-15", tags: ["Hyderabad", "Agency Guide"] },
  { title: "How to Make a Next.js Website SEO-Friendly: 10 Steps That Actually Matter", slug: "nextjs-seo-guide", excerpt: "Next.js can rank brilliantly or not at all. Here are the 10 setup steps we use on every LaunchCraft build to make Google read, trust and rank the site.", date: "2026-11-15", tags: ["Next.js", "SEO"] },
  { title: "Core Web Vitals Explained: How to Fix LCP, INP and CLS", slug: "core-web-vitals-explained", excerpt: "LCP, INP and CLS in plain English: what each Core Web Vital measures, the scores you need to pass, and the fixes that move the numbers.", date: "2026-11-15", tags: ["Performance"] },
  { title: "How Much Does a Business Website Cost in India?", slug: "website-cost-india", excerpt: "Why one website costs a few thousand rupees and another costs lakhs: the 8 factors that set the price, the running costs people forget, and how to budget well.", date: "2026-11-15", tags: ["Pricing", "India"] },
  { title: "Headless CMS Explained: Is It Right for Your Business Website?", slug: "headless-cms-explained", excerpt: "A headless CMS lets your team edit content while developers build a faster front end. Here is how it works, the pros and cons, and who should use one.", date: "2026-11-15", tags: ["CMS"] },
  { title: "Website Security Checklist for Small Businesses", slug: "website-security-checklist", excerpt: "Most small-business sites get hacked through weak passwords, old software and missing backups. Use this 15-point checklist to close the gaps this week.", date: "2026-11-15", tags: ["Security"] },
  { title: "How to Redesign Your Website Without Losing SEO", slug: "website-redesign-without-losing-seo", excerpt: "A redesign can wipe out years of Google rankings overnight. Follow these 12 steps before, during and after launch to keep your traffic and grow it.", date: "2026-11-15", tags: ["SEO", "Redesign"] },
  { title: "Landing Page Design: 11 Elements of a Page That Converts", slug: "landing-page-design-elements", excerpt: "A landing page has one job: get one action. These 11 elements are what separate pages that convert from pages that leak.", date: "2026-11-15", tags: ["Design", "Conversion"] },
  { title: "9 UX Mistakes That Quietly Hurt Your Conversion Rate", slug: "ux-mistakes-conversion-rate", excerpt: "Visitors rarely complain; they just leave. These 9 common UX mistakes cost enquiries every day, and each one has a quick, practical fix.", date: "2026-11-15", tags: ["UX", "Conversion"] },
  { title: "AEO vs SEO: How to Get Your Business Into AI Answers", slug: "aeo-vs-seo", excerpt: "People now ask ChatGPT, Gemini and Google\u2019s AI Overviews before they click. Here is how AEO differs from SEO, and the steps that get you cited.", date: "2026-11-15", tags: ["SEO", "AI"] },
  { title: "What Is llms.txt, and Does Your Business Actually Need One?", slug: "what-is-llms-txt", excerpt: "llms.txt is a plain-text file meant to guide AI tools around your site. Here is what it does, what Google says about it, and when it is worth adding.", date: "2026-11-15", tags: ["AI", "SEO"] },
  { title: "Schema Markup Explained for Small Businesses (2026 Update)", slug: "schema-markup-explained", excerpt: "Schema markup tells Google exactly who you are and what each page is about. Here is what still works in 2026 and a copy-ready example.", date: "2026-11-15", tags: ["SEO", "Schema"] },
  { title: "AI Chatbots for Small Businesses: 8 Use Cases", slug: "ai-chatbots-small-business", excerpt: "An AI chatbot can answer questions, take bookings and capture leads at 2 a.m. Here are 8 practical uses and how to start.", date: "2026-11-15", tags: ["AI", "Automation"] },
  { title: "10 Business Tasks You Can Automate This Month", slug: "business-tasks-to-automate", excerpt: "Copying leads into sheets, chasing invoices, sending reminders: these 10 everyday tasks can run on their own.", date: "2026-11-15", tags: ["Automation"] },
  { title: "WhatsApp Automation for Local Businesses: A 2026 Guide", slug: "whatsapp-automation-local-business", excerpt: "Most Indian customers would rather WhatsApp you than fill a form. Here is how to automate replies, bookings and reminders.", date: "2026-11-15", tags: ["WhatsApp", "Automation"] },
  { title: "Brand Identity vs Logo: What Your Business Actually Needs", slug: "brand-identity-vs-logo", excerpt: "A logo is one piece. A brand identity is the whole system that makes you instantly recognisable. Here is the difference.", date: "2026-11-15", tags: ["Branding"] },
  { title: "How to Choose Brand Colours and Fonts for Your Website", slug: "choose-brand-colours-fonts", excerpt: "The right colours and fonts make a site feel trustworthy in seconds. Here is a simple, practical way to pick a palette and font pair.", date: "2026-11-15", tags: ["Branding", "Design"] },
  { title: "Clinic Website Design: 12 Must-Have Features", slug: "clinic-website-design", excerpt: "Patients judge a clinic by its website before they ever call. These 12 features build trust, make booking easy and help your clinic rank locally.", date: "2026-11-15", tags: ["Healthcare", "Design"] },
  { title: "Veterinary Website Design: What Pet Owners Look For", slug: "veterinary-website-design", excerpt: "Worried pet owners want fast answers: are you open, do you handle emergencies, how do I book? Here is how to design a vet website that answers all three.", date: "2026-11-15", tags: ["Healthcare", "Design"] },
  { title: "Dental Website Design That Brings In New Patients", slug: "dental-website-design", excerpt: "Most people find a new dentist online. Here is how to design a dental clinic website that calms nervous patients and fills the diary.", date: "2026-11-15", tags: ["Healthcare", "Design"] },
  { title: "How to Choose a Web Design Agency: 12 Questions to Ask", slug: "choose-web-design-agency", excerpt: "The wrong agency costs you months and money. Ask these 12 questions before you sign, and learn which answers should make you walk away.", date: "2026-11-15", tags: ["Agency", "Guide"] },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
  ],
};

export default function BlogPage() {
  return (
    <main className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="py-20 px-6 text-center border-b border-hairline">
        <FadeIn>
          <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-4">
            Insights &amp; Guides
          </p>
          <h1 className="text-4xl sm:text-5xl italic text-foreground mb-6">Blog</h1>
          <div className="w-12 h-px bg-hairline mx-auto mb-6" />
          <p
            className="text-sm text-muted max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            In-depth guides on web development, choosing the right agency, digital marketing, and growing your business online.
          </p>
        </FadeIn>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-0 divide-y divide-hairline">
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 80}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block py-10 first:pt-0 last:pb-0"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span
                      className="text-[10px] tracking-[0.2em] uppercase text-muted"
                      style={{ fontFamily: "var(--font-secondary)" }}
                    >
                      {formatDate(post.date)}
                    </span>
                    <span className="text-hairline">&middot;</span>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 border border-hairline text-muted"
                        style={{ fontFamily: "var(--font-secondary)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl sm:text-3xl italic text-foreground group-hover:text-brand-green transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p
                    className="text-sm text-muted leading-relaxed"
                    style={{ fontFamily: "var(--font-secondary)" }}
                  >
                    {post.excerpt}
                  </p>
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase text-muted group-hover:text-brand-orange transition-colors duration-300"
                    style={{ fontFamily: "var(--font-secondary)" }}
                  >
                    Read Full Guide &rarr;
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 border-t border-hairline text-center">
        <FadeIn>
          <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-6">
            Need Help?
          </p>
          <h2 className="text-3xl sm:text-4xl italic text-foreground mb-8">
            Let&rsquo;s talk about your project.
          </h2>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-foreground text-background text-[10px] tracking-[0.3em] uppercase hover:bg-brand-green transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
