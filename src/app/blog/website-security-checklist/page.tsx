import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/website-security-checklist`;

export const metadata: Metadata = {
  title: "Website Security Checklist for Small Businesses: 15 Checks You Can Do This Week",
  description: "Most small-business sites get hacked through weak passwords, old software and missing backups. Use this 15-point checklist to close the gaps this week.",
  keywords: [
    "website security checklist",
    "small business website security",
    "secure website india",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Website Security Checklist for Small Businesses: 15 Checks You Can Do This Week | LaunchCraft",
    description: "Most small-business sites get hacked through weak passwords, old software and missing backups. Use this 15-point checklist to close the gaps this week.",
    url,
    type: "article",
    publishedTime: "2026-11-15",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Security Checklist for Small Businesses: 15 Checks You Can Do This Week",
    description: "Most small-business sites get hacked through weak passwords, old software and missing backups. Use this 15-point checklist to close the gaps this week.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "Website Security Checklist for Small Businesses: 15 Checks You Can Do This Week", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Website Security Checklist for Small Businesses: 15 Checks You Can Do This Week",
  description: "Most small-business sites get hacked through weak passwords, old software and missing backups. Use this 15-point checklist to close the gaps this week.",
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
            {["Website Security Checklist", "Small Business Website Security", "Secure Website India"].map((tag) => (
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
            Website Security Checklist for Small Businesses: 15 Checks You Can Do This Week
          </h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
            <p className="text-sm text-muted leading-relaxed" style={sans}>Most small business websites are not hacked by clever attackers. They are hacked by automated bots that look for easy gaps: weak passwords, old software and forms with no protection. Closing those gaps takes days, not months. Work through this checklist and you will be safer than most sites in your industry.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Access and accounts</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Every admin, hosting and domain login uses a unique, long password</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Two-factor authentication (2FA) is on for hosting, domain registrar, email and CMS</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Former staff and old agencies no longer have access</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">The domain is registered in the business’s own name and email</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Software and code</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">The CMS, plugins, themes and frameworks are on supported, up-to-date versions</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Unused plugins, test pages and old staging sites are removed</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Contact and booking forms have spam protection and validate input</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">File uploads (if any) only accept expected file types and sizes</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Connection and hosting</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">HTTPS is on for every page, with HTTP redirecting to HTTPS</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Security headers are set (such as Content-Security-Policy and Strict-Transport-Security)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">A firewall or CDN with bot protection sits in front of the site</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Backups and recovery</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Automatic daily backups are stored somewhere other than your main server</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">You have tested restoring a backup at least once</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">You know who to call, and what to do first, if the site goes down</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Data and privacy</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">You collect only the personal data you need, and your privacy policy says how you use it</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Why this matters more in 2026</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>India’s Digital Personal Data Protection Rules were notified on 13 November 2025, with most obligations phasing in over 18 months. If your website collects names, phone numbers or health details through forms, you will need clear consent, reasonable security and a plan for reporting breaches. A secure website is the first step. This post is not legal advice; check with a lawyer for your specific obligations.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Why static and headless sites are harder to hack</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>A site built with Next.js and served as static pages has no public admin panel and far fewer moving parts. There is nothing to brute-force on the live site and no plugins waiting for updates. That does not make it bulletproof, but it removes the most common attack routes. See [Post 4: Headless CMS explained].</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Signs your site may already be hacked</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Google shows a "This site may be hacked" warning</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Strange pages in Japanese or with pharmacy and casino spam appear in search results</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Your host suspends the account for sending spam</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Visitors on mobile are redirected to unknown sites</span>
                </li>
            </ul>

            <p className="text-sm text-muted leading-relaxed" style={sans}>If you see any of these, take a backup of the current state, change every password and get help quickly.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">FAQs</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Is an SSL certificate enough to make my site secure? No. SSL (HTTPS) encrypts the connection, but it does not stop weak passwords, old software or form abuse.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>How often should I back up my website? Daily for sites with forms, bookings or a blog. Keep at least 30 days of backups.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Do small sites really get attacked? Yes. Bots scan the whole internet and do not care how big you are.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Next step</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Want a quick security review of your current site? Contact us and we will send you a list of what to fix first.</p>
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
