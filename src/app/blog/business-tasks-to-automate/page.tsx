import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/business-tasks-to-automate`;

export const metadata: Metadata = {
  title: "10 Business Tasks You Can Automate This Month",
  description: "Copying leads into sheets, chasing invoices, sending reminders: these 10 everyday tasks can run on their own. Here is what to automate first and how.",
  keywords: [
    "business automation",
    "workflow automation for small business",
    "automate business processes",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "10 Business Tasks You Can Automate This Month | LaunchCraft",
    description: "Copying leads into sheets, chasing invoices, sending reminders: these 10 everyday tasks can run on their own. Here is what to automate first and how.",
    url,
    type: "article",
    publishedTime: "2026-11-15",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "10 Business Tasks You Can Automate This Month",
    description: "Copying leads into sheets, chasing invoices, sending reminders: these 10 everyday tasks can run on their own. Here is what to automate first and how.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "10 Business Tasks You Can Automate This Month", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "10 Business Tasks You Can Automate This Month",
  description: "Copying leads into sheets, chasing invoices, sending reminders: these 10 everyday tasks can run on their own. Here is what to automate first and how.",
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
            {["Business Automation", "Workflow Automation For Small Business", "Automate Business Processes"].map((tag) => (
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
            10 Business Tasks You Can Automate This Month
          </h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
            <p className="text-sm text-muted leading-relaxed" style={sans}>Most small teams lose hours every week to copy-paste work: moving enquiries into a spreadsheet, sending the same reminder, chasing the same invoice. Workflow automation connects your tools so these jobs run on their own. You do not need to automate everything. Start with the tasks below, which are simple to set up and pay back quickly.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">The 10 tasks to automate first</h3>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">How to pick what to automate</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Score each task on two questions: how often does it happen, and how long does it take? A task done 20 times a week for 5 minutes saves far more than a monthly task. Also ask: what happens if it is missed? Missed follow-ups and reminders cost real money, so they are usually the best first wins.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">The tools that make it work</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Workflow tools such as n8n, Make or Zapier connect apps without heavy code</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Your existing apps: Google Workspace, WhatsApp Business, your CRM, your booking system and accounting software</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">AI steps for reading emails, summarising notes or drafting replies, with a human checking anything important</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Custom code and APIs when a tool does not have a ready-made connection</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Mistakes to avoid</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Automating a messy process. Fix the process on paper first.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">No one owning the automation. Someone should check it is still running.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">No error alerts. If a step fails, the right person should know the same day.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Over-automating customer contact. Keep the human touch where it matters.</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">A simple first automation</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Form submitted → lead added to a Google Sheet → WhatsApp alert to the owner → instant confirmation to the customer → follow-up after 48 hours if no booking. This one flow often stops more leads slipping through the cracks than any marketing change.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">FAQs</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Do I need to be technical to automate tasks? Not for simple flows. Complex ones that touch several systems are best set up by someone experienced, then handed over with clear notes.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Is automation safe for customer data? It can be, if you use trusted tools, limit access and only move the data you need.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>What does automation cost? Many tools have free or low-cost plans for small volumes. The bigger cost is designing the workflow well once.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Next step</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Tell us the task that eats most of your week, and we will show you how to automate it. Book a free automation call.</p>
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
