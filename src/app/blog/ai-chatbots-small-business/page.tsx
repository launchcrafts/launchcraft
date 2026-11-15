import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/ai-chatbots-small-business`;

export const metadata: Metadata = {
  title: "AI Chatbots for Small Businesses: 8 Use Cases and How to Start",
  description: "An AI chatbot can answer questions, take bookings and capture leads at 2 a.m. Here are 8 practical uses, how to set one up safely, and what to avoid.",
  keywords: [
    "ai chatbot for business",
    "ai chatbot for website",
    "chatbot for small business india",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "AI Chatbots for Small Businesses: 8 Use Cases and How to Start | LaunchCraft",
    description: "An AI chatbot can answer questions, take bookings and capture leads at 2 a.m. Here are 8 practical uses, how to set one up safely, and what to avoid.",
    url,
    type: "article",
    publishedTime: "2026-11-15",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Chatbots for Small Businesses: 8 Use Cases and How to Start",
    description: "An AI chatbot can answer questions, take bookings and capture leads at 2 a.m. Here are 8 practical uses, how to set one up safely, and what to avoid.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "AI Chatbots for Small Businesses: 8 Use Cases and How to Start", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Chatbots for Small Businesses: 8 Use Cases and How to Start",
  description: "An AI chatbot can answer questions, take bookings and capture leads at 2 a.m. Here are 8 practical uses, how to set one up safely, and what to avoid.",
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
            {["Ai Chatbot For Business", "Ai Chatbot For Website", "Chatbot For Small Business India"].map((tag) => (
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
            AI Chatbots for Small Businesses: 8 Use Cases and How to Start
          </h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
            <p className="text-sm text-muted leading-relaxed" style={sans}>An AI chatbot is no longer a clunky menu of buttons. Modern chatbots understand normal questions, answer from your own information and hand over to a person when needed. For a small business, that means fewer missed enquiries, faster replies and less time spent answering the same five questions. Here is where they help most and how to start.</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">8 ways small businesses use AI chatbots</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Answering common questions: timings, prices, location, parking, what to bring</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Booking appointments: checking free slots and confirming a booking without a phone call</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Capturing leads after hours: collecting a name, number and need, then alerting your team</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Qualifying enquiries: asking a few questions so your team calls the right people first</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Order and delivery updates: for e-commerce stores, answering "where is my order?"</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Replying in local languages: answering in Telugu, Hindi or English, as the customer prefers</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Internal help: answering staff questions from your own policies and price lists</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Follow-ups: sending reminders and collecting feedback after a visit</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Rule-based bot vs AI chatbot</h3>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">How to set one up, step by step</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Pick one job first. For example: answer the top 20 questions and capture leads. Do not try to automate everything at once.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Gather the source content. Services, prices, policies and FAQs in plain text. The bot is only as good as what you give it.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Choose where it lives. Your website, WhatsApp, Instagram or all three. Start where most of your enquiries already come from.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Set clear limits. Tell the bot what it must not do: give medical or legal advice, promise discounts, or guess answers it does not know.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Add a human handover. When the bot is unsure, or the customer asks for a person, pass the chat to your team with the conversation so far.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Connect it to your tools. Send leads to your CRM, Google Sheets or email so nothing is lost.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Test with real questions. Ask it 50 real customer questions before launch and fix every wrong answer.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Review weekly. Read conversations, add missing answers and adjust the tone.</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Risks to manage</h3>

            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Wrong answers: keep the bot grounded in your own content and tell it to say "I’ll check with the team" when unsure</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Privacy: collect only the data you need, explain how you use it and keep it secure, especially for health details ([Post 5] covers India’s data protection rules)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
                  <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
                  <span className="leading-relaxed">Annoying customers: always offer an easy way to reach a person</span>
                </li>
            </ul>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">FAQs</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Will a chatbot replace my front-desk staff? No. It handles repetitive questions so your staff can focus on the conversations that need a human.</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Can a chatbot work on WhatsApp? Yes, through the official WhatsApp Business Platform. See [Post 14].</p>

            <p className="text-sm text-muted leading-relaxed" style={sans}>How long does setup take? A focused chatbot for FAQs and lead capture can be live in a couple of weeks, including testing. [Adjust to your real timeline.]</p>

            <h3 className="text-xl italic text-foreground mt-8 mb-3">Next step</h3>

            <p className="text-sm text-muted leading-relaxed" style={sans}>Want a chatbot trained on your business that hands over to your team when it should? See our AI automation services or book a demo call.</p>
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
