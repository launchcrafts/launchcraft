import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/website-maintenance-checklist`;

export const metadata: Metadata = {
  title: "Website Maintenance Checklist: Weekly, Monthly and Yearly Tasks",
  description:
    "A website isn't finished at launch. Use this weekly, monthly and yearly checklist to keep yours secure, fast and bringing in enquiries.",
  keywords: [
    "website maintenance checklist",
    "website maintenance services",
    "website upkeep",
    "website maintenance plan",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Website Maintenance Checklist: Weekly, Monthly and Yearly Tasks | LaunchCraft",
    description:
      "A website isn't finished at launch. Use this weekly, monthly and yearly checklist to keep yours secure, fast and bringing in enquiries.",
    url,
    type: "article",
    publishedTime: "2026-11-17",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Maintenance Checklist: Weekly, Monthly and Yearly Tasks",
    description:
      "A website isn't finished at launch. Use this weekly, monthly and yearly checklist to keep yours secure, fast and bringing in enquiries.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "Website Maintenance Checklist: Weekly, Monthly and Yearly Tasks", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Website Maintenance Checklist: Weekly, Monthly and Yearly Tasks",
  description:
    "A website isn't finished at launch. Use this weekly, monthly and yearly checklist to keep yours secure, fast and bringing in enquiries.",
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
            {["Maintenance", "Security"].map((tag) => (
              <span key={tag} className="text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 border border-hairline text-muted" style={sans}>{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl italic text-foreground max-w-3xl mx-auto leading-[1.2]">Website Maintenance Checklist: Weekly, Monthly and Yearly Tasks</h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">

          <p className="text-sm text-muted leading-relaxed" style={sans}>
            A website is not finished at launch. Launch is the beginning of an ongoing relationship between your business and the system that represents it online. Without regular attention, that system degrades — pages slow down, security gaps open, broken links accumulate, analytics stop reporting accurately, and the content that was current in January becomes stale and misleading by October.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            This checklist is organised by cadence — weekly, monthly, quarterly, and yearly — so you can build maintenance into your routine rather than treating it as an occasional emergency. It covers security, performance, content, analytics, and technical health, with a separate section for Next.js-specific tasks.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Weekly Checks</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Weekly tasks should take no more than fifteen to thirty minutes if your site is healthy. They are mostly monitoring — catching problems early before they affect your users or your rankings.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Check uptime monitoring alerts.</strong> If you are not already using an uptime monitoring service, set one up — Upptime, Better Uptime, and UptimeRobot all offer free tiers that check your site every few minutes and notify you immediately if it goes down. Review any alerts from the past week and investigate the cause of any outages, however brief. Downtime during business hours costs you enquiries and damages your reputation with both users and search engines.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Review contact form and lead submissions.</strong> Confirm that enquiry forms are working correctly by reviewing the week's submissions. Check that emails are being delivered to the right inbox and not being filtered as spam. Send a test submission yourself if you are unsure. A broken contact form is one of the most common and most costly website failures — you may be generating traffic and interest, but no-one's enquiries are reaching you.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Scan Google Search Console for new errors.</strong> Open the Coverage report and the Page Experience report in Search Console and check for any new errors that appeared in the past seven days. New 404 errors, crawl anomalies, or Core Web Vitals regressions should be investigated promptly — they often indicate a deployment went wrong or a third-party script is causing problems. See our guide to <Link href="/blog/track-website-leads-ga4" className="text-brand-green hover:underline">tracking website leads with GA4</Link> for related analytics hygiene.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Check SSL certificate status.</strong> Your SSL certificate should auto-renew, but confirm it is valid and shows no warnings in your browser. An expired SSL certificate causes browsers to block your site with a security warning, which will immediately drop traffic to near zero. Most hosting providers send renewal notices, but a weekly manual check takes ten seconds and can prevent a catastrophic outage.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Monthly Tasks</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Monthly tasks go deeper into performance, security, and content quality. Set aside one to two hours per month for these.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Run a full broken link scan.</strong> Use a tool like Screaming Frog, Ahrefs, or the free Broken Link Checker extension to crawl your entire site and identify any internal or external links returning 404 or 5xx errors. Internal broken links hurt user experience and can damage search rankings. External broken links — to sources you have cited, to partners you have mentioned — make your content look unmaintained. Fix internal links and update or remove broken external ones.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Review and update dependencies.</strong> If your site runs on a framework or CMS with third-party packages, check for available updates. For Next.js sites specifically, this means reviewing your package.json dependencies and running security audits with <code className="text-foreground bg-hairline px-1 rounded text-xs">npm audit</code>. Apply security patches promptly. Apply feature updates after reviewing the changelog for breaking changes. This step is covered in more detail in the Next.js-specific section below and in our <Link href="/blog/website-security-checklist" className="text-brand-green hover:underline">website security checklist</Link>.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Verify backup integrity.</strong> Confirm that your automated backups ran successfully this month and that at least one recent backup can be restored. The only backup that matters is one you have tested. If you have never tried restoring from a backup, do it on a staging environment now — before you need to do it in an emergency. For Next.js sites deployed on Vercel, your code is in Git and your CMS content backup is a separate concern that depends on which CMS you use.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Review analytics for unusual patterns.</strong> Open your analytics dashboard — GA4 or equivalent — and review traffic trends for the month. Look for: unexplained traffic drops (possible indexing or ranking issues), pages with high bounce rates (possible UX or content mismatch problems), top-converting pages (content worth expanding), and traffic sources that have changed significantly. Analytics only have value if someone reads them. See our guide on <Link href="/blog/track-website-leads-ga4" className="text-brand-green hover:underline">tracking leads with GA4</Link> for setting up meaningful conversion tracking.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Update time-sensitive content.</strong> Review any pages that contain information that may have changed: team members, pricing, service offerings, opening hours, upcoming events, case studies, and blog posts referencing current events or statistics. Outdated content is not just a credibility problem — it can actively mislead customers and generate negative impressions before the first contact.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Quarterly Tasks</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Quarterly reviews are more strategic. They look at performance trends, SEO health, and the overall effectiveness of the site as a business tool.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Run a full performance audit.</strong> Use Google PageSpeed Insights or Lighthouse to audit your key pages — homepage, service pages, blog index, highest-traffic posts. Compare the results to the previous quarter. Investigate any regressions. Performance degrades over time as content is added, scripts accumulate, and third-party tools are integrated. Catching regressions quarterly prevents slow drift toward a performance problem serious enough to affect rankings. Our <Link href="/blog/technical-seo-checklist" className="text-brand-green hover:underline">technical SEO checklist</Link> covers performance as part of a broader audit.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Review keyword rankings for key pages.</strong> Check where your most important pages rank for their target keywords. Use Google Search Console's Performance report, filtered by page, to see average position, clicks, and impressions. Identify pages that have dropped in rankings and investigate possible causes — content staleness, new competition, or technical issues. Identify pages that are ranking on page two for valuable terms and consider whether a content update could push them to page one.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Audit your structured data.</strong> Use Google's Rich Results Test and Schema Markup Validator to confirm that all your structured data is valid and being recognised correctly. Structured data errors accumulate — a schema property that was valid six months ago may no longer be supported, or a new content type may benefit from markup you have not yet implemented. See our guide to <Link href="/blog/schema-markup-explained" className="text-brand-green hover:underline">schema markup</Link> for what types are most valuable by business type.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Test all conversion paths.</strong> Go through every conversion path on your site as a first-time visitor: submit the contact form, start a booking if you have one, attempt to purchase a product, subscribe to your newsletter. Confirm that each path works end-to-end, that confirmation emails arrive correctly, that the data is recorded in your CRM or analytics, and that the user experience feels smooth. Conversion path failures are the most expensive website problems because they silently destroy the return on everything else you are doing.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Review third-party integrations.</strong> Check that all external services connected to your site are still functioning as expected: payment gateways, chat widgets, booking systems, email marketing integrations, analytics tags. Third-party services update their APIs, change their embed codes, and occasionally sunset features. A quarterly integration check prevents discovering a broken integration only when a customer complains.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Yearly Tasks</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Annual tasks are higher-level reviews of the website as a business asset. They require more time and sometimes involve strategic decisions about the site's direction.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Renew domain and review DNS records.</strong> Confirm your domain renewal is set to auto-renew and that the renewal email goes to an actively monitored address. Review your DNS records for accuracy: are there A records, CNAMEs, or MX records pointing to services you no longer use? Legacy DNS records accumulate over time and can represent security vulnerabilities or cause unexpected routing behaviour.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Full content audit.</strong> Review every page on your site for accuracy, relevance, and quality. Remove or redirect pages that no longer serve a purpose. Update pages whose content has become outdated. Identify content gaps — subjects your customers ask about that you do not yet have pages for. Consolidate thin pages by merging related content into more comprehensive resources. A content audit at the end of each year keeps your site lean and authoritative rather than bloated with stale pages.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Review hosting and infrastructure costs.</strong> Compare your current hosting costs against alternatives. Hosting pricing changes, and a site that was well-served by a particular plan two years ago may be over-paying or under-resourced today. Check bandwidth usage, build times if relevant, and whether your hosting tier still matches your traffic and functionality needs. For a broader perspective on website investment, our guide to <Link href="/blog/website-cost-india" className="text-brand-green hover:underline">website costs in India</Link> provides useful context.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Assess whether the site still fits your business.</strong> Businesses evolve. A site built for a business two years ago may no longer reflect the services you actually offer, the clients you actually want to attract, or the positioning you have moved toward. The annual review is the moment to ask honestly: does this website represent us accurately and effectively? If the answer is no, the question is whether an update addresses the gap or whether a redesign is warranted.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Review and test your disaster recovery plan.</strong> Do you know exactly what you would do if your site were hacked, deleted, or suffered a catastrophic failure today? Do you have a recent backup in a location separate from your hosting provider? Do you know how to contact your hosting provider's support in an emergency? Do you have records of all your DNS settings in case you need to rebuild from scratch? An annual walkthrough of your disaster recovery plan — including a test restore — ensures you are never caught unprepared.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Extra Checks for Next.js Sites</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Next.js sites have a few maintenance considerations that do not apply to hosted platform sites. These should be incorporated into your monthly or quarterly cadence depending on how actively your site is being developed.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Keep Next.js and React up to date.</strong> New versions of Next.js ship regularly and often include performance improvements, security patches, and new features that affect how your site renders and delivers content. Review the release notes for each version before upgrading and test on a staging deployment before merging to production. Major version upgrades (e.g., from Next.js 14 to Next.js 15) may include breaking changes that require code updates.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Run npm audit regularly.</strong> Execute <code className="text-foreground bg-hairline px-1 rounded text-xs">npm audit</code> in your project root monthly to check for known vulnerabilities in your dependencies. Address high and critical severity vulnerabilities promptly. Many vulnerabilities in npm packages are discovered and patched quickly — the gap between discovery and exploitation is often short in actively targeted packages.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Review Vercel deployment logs and function usage.</strong> If your Next.js site uses server components, API routes, or edge functions, review your Vercel usage dashboard monthly. Check for function errors, timeouts, and unusually high invocation counts that might indicate a bot attack, a misconfigured cron job, or a performance regression in your server-side code. Vercel's Observability dashboard provides function-level performance data that is worth reviewing quarterly.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong className="text-foreground">Check for deprecated APIs and configuration options.</strong> Next.js deprecates APIs and configuration options with each major release. Run your build with no warnings as a goal. Deprecation warnings in your build output indicate code that will break in a future version. Addressing them incrementally — a few per month — is far less disruptive than a large-scale update forced by a framework upgrade.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">DIY vs. a Maintenance Plan</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            The question of whether to manage your own website maintenance or engage a professional maintenance plan depends on your technical capability, the complexity of your site, and how much business-critical revenue depends on the site functioning perfectly.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-muted border-collapse" style={sans}>
              <thead>
                <tr className="border-b border-hairline">
                  <th className="text-left py-2 pr-4 text-foreground font-normal italic">Factor</th>
                  <th className="text-left py-2 pr-4 text-foreground font-normal italic">DIY maintenance</th>
                  <th className="text-left py-2 text-foreground font-normal italic">Managed maintenance plan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 text-foreground">Monthly cost</td>
                  <td className="py-2 pr-4">Your time only</td>
                  <td className="py-2">₹3,000–₹15,000+</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 text-foreground">Response to emergencies</td>
                  <td className="py-2 pr-4">Depends on your availability</td>
                  <td className="py-2">Typically same-day or 24hr SLA</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 text-foreground">Technical depth</td>
                  <td className="py-2 pr-4">Limited to your own knowledge</td>
                  <td className="py-2">Developer expertise on call</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 text-foreground">Consistency</td>
                  <td className="py-2 pr-4">Variable — often skipped when busy</td>
                  <td className="py-2">Scheduled and documented</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 text-foreground">Best for</td>
                  <td className="py-2 pr-4">Technical founders, small budgets</td>
                  <td className="py-2">Established businesses, high-traffic sites</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            For businesses where the website is a primary lead generation channel, the cost of a maintenance plan is typically small relative to the cost of downtime, a security breach, or a gradual performance decline that erodes search rankings. The break-even point is usually just one avoided incident per year.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Keeping a Maintenance Log</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Keep a simple maintenance log — even a spreadsheet with columns for date, task, findings, and action taken. The log serves several purposes: it creates accountability, it documents the history of your site for future developers or for a handover, it helps you identify recurring problems, and it provides evidence of due diligence if you ever need to demonstrate to a client, insurer, or auditor that your site is properly maintained.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            The format does not matter. What matters is that someone is responsible for each task, there is a record of when it was last done, and there is a note of anything unusual that was found. A maintenance log that is six months out of date is better than no maintenance log at all — it at least tells you what was done and when, so you can prioritise what needs attention now.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Frequently Asked Questions</h3>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">How much time does website maintenance actually take?</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            For a typical five-to-twenty-page business website with a blog, the realistic time commitment is: fifteen to thirty minutes per week for monitoring checks, one to two hours per month for the monthly tasks, two to four hours per quarter for the quarterly audit, and half a day per year for the annual review. Total: roughly six to ten hours per month if you do everything. If you only do the most important tasks — uptime monitoring, broken links, dependency updates, and content freshness — you can keep a healthy site with three to four hours per month.
          </p>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">What happens if I do not maintain my website?</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            The consequences of neglecting website maintenance are gradual but compounding. Performance degrades as dependencies fall out of date and content accumulates without optimisation. Security vulnerabilities accumulate in unpatched packages. Broken links and stale content erode trust with both users and search engines. Contact forms stop working without anyone noticing. Rankings drift down as competitors with better-maintained sites overtake you. None of these happen overnight, which is why maintenance tends to be deprioritised — until a crisis forces attention. By that point, the cost of remediation is typically far higher than the cost of regular maintenance would have been.
          </p>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">Do I need to back up a Next.js site deployed on Vercel?</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Your code is backed up in Git — that is the nature of a version-controlled codebase. However, your content is a separate concern. If you manage content in a headless CMS, check whether your CMS provider backs up data automatically and whether you can export a full content dump on demand. If content lives in a database (for a Next.js app with a Postgres or MongoDB backend), database backups must be configured separately — Vercel does not back up databases. The rule is: know where every piece of your site lives and confirm that each piece has a backup that you have tested.
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
