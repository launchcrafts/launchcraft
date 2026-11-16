import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const baseUrl = "https://launchcrafts.in";
const url = `${baseUrl}/blog/mvp-development-guide`;

export const metadata: Metadata = {
  title: "How to Build an MVP: A Practical Guide for Founders",
  description: "An MVP isn't a cheap version of your dream product. It's the smallest thing that tests your riskiest assumption. Here's how to scope and build one.",
  keywords: ["mvp development", "minimum viable product", "how to build an mvp", "saas mvp"],
  alternates: { canonical: url },
  openGraph: {
    title: "How to Build an MVP: A Practical Guide for Founders | LaunchCraft",
    description: "An MVP isn't a cheap version of your dream product. It's the smallest thing that tests your riskiest assumption. Here's how to scope and build one.",
    url,
    type: "article",
    publishedTime: "2026-11-17",
    siteName: "LaunchCraft",
    images: [{ url: `${baseUrl}/assets/logo.PNG`, width: 800, height: 260, alt: "LaunchCraft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Build an MVP: A Practical Guide for Founders",
    description: "An MVP isn't a cheap version of your dream product. It's the smallest thing that tests your riskiest assumption. Here's how to scope and build one.",
    images: [`${baseUrl}/assets/logo.PNG`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    { "@type": "ListItem", position: 3, name: "How to Build an MVP: A Practical Guide for Founders", item: url },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Build an MVP: A Practical Guide for Founders",
  description: "An MVP isn't a cheap version of your dream product. It's the smallest thing that tests your riskiest assumption. Here's how to scope and build one.",
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
            {["MVP", "Startups"].map((tag) => (
              <span key={tag} className="text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 border border-hairline text-muted" style={sans}>{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl italic text-foreground max-w-3xl mx-auto leading-[1.2]">How to Build an MVP: A Practical Guide for Founders</h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-2xl mx-auto space-y-4">
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            The word "minimum" misleads most founders. They hear it and think about cutting corners or shipping something embarrassing. The correct mental model is different. An MVP is the smallest investment you can make to test whether your most dangerous assumption is true. Everything else — the extra features, the polished UI, the scaled infrastructure — comes after you have evidence that you are building something people actually want.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            This guide walks through eight practical steps, from writing your problem statement through to making a go or pivot decision after your first real users. It covers both traditional software MVPs and AI-powered products, which have their own distinct considerations. If you are unsure whether you need a website, app or PWA first, read our companion guide on <Link href="/blog/website-vs-app-vs-pwa" className="text-brand-green hover:underline">website vs mobile app vs PWA</Link>.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Step 1: Write the Problem Statement</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Before any design or development work starts, write one clear paragraph describing the problem your product solves. It should name who has the problem, what they currently do instead of using your product, and why that existing approach is inadequate. Keep it to three sentences.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            A strong problem statement sounds like this: "Independent gym owners in Indian tier-2 cities manage member attendance and billing in WhatsApp groups and paper registers. This creates missed payments, no visibility into churn and hours of admin per week. No existing software is affordable and simple enough for a single-staff gym to adopt."
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            A weak problem statement sounds like this: "We are building a gym management app for small gyms." That describes a product, not a problem. If you cannot articulate the problem clearly, your MVP scope will drift in every direction and nothing will get shipped.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Step 2: Identify Your Riskiest Assumption</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Every startup rests on a stack of assumptions. Most of them are probably true. One of them, if wrong, makes the whole thing collapse. That is your riskiest assumption, and your MVP exists to test it.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            To find it, ask yourself these four questions and identify where you have the least actual evidence:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Do these users actually have the problem I described?</strong> Not a hypothetical problem — an active, painful problem they are spending time or money dealing with today.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Will they change their behaviour to solve it?</strong> People tolerate a great deal of friction before changing habits. Willingness to pay is usually a better signal than willingness to try a free tool.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Can I actually build a solution that works well enough?</strong> Some technical bets are more uncertain than they appear. Identify the hardest engineering problem in your product early.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Can I reach these users affordably enough to build a sustainable business?</strong> A product can work beautifully and still fail because customer acquisition costs exceed lifetime value.</span>
            </li>
          </ul>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Write down which assumption has the least evidence. Design your MVP to give you a definitive answer to that one question.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Step 3: Choose Your MVP Type</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            An MVP does not have to be a software product. The goal is to test your assumption with the smallest possible investment. Choose the type that answers your riskiest question most efficiently.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-muted border-collapse" style={sans}>
              <thead>
                <tr className="border-b border-hairline">
                  <th className="text-left py-2 pr-4 text-foreground font-normal italic">MVP Type</th>
                  <th className="text-left py-2 pr-4 text-foreground font-normal italic">What It Is</th>
                  <th className="text-left py-2 text-foreground font-normal italic">Best For Testing</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 font-medium text-foreground">Landing page</td>
                  <td className="py-2 pr-4">A single page describing your product with a waitlist or pre-order CTA</td>
                  <td className="py-2">Whether anyone wants this at all; acquisition channel testing</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 font-medium text-foreground">Concierge</td>
                  <td className="py-2 pr-4">You deliver the service manually behind the scenes while the user thinks they are using software</td>
                  <td className="py-2">Whether users find value in the outcome before you automate it</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 font-medium text-foreground">Wizard of Oz</td>
                  <td className="py-2 pr-4">A realistic-looking interface where humans do the work that the final product would automate</td>
                  <td className="py-2">AI or complex automation ideas before building the model</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 font-medium text-foreground">Single-feature product</td>
                  <td className="py-2 pr-4">A real, working product with only the one core feature that solves the central problem</td>
                  <td className="py-2">Whether the core value proposition works in practice</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-2 pr-4 font-medium text-foreground">Pre-sale</td>
                  <td className="py-2 pr-4">You sell the product before it is built and refund if you do not hit a target</td>
                  <td className="py-2">Whether anyone will pay, not just sign up for free</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Step 4: Scope Ruthlessly</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Take your feature list and divide it into two columns: features that directly test your riskiest assumption, and everything else. Everything in the second column is not in the MVP. It goes on a backlog to be considered after you have validated the core.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Common features that feel essential but rarely are: user roles and permissions (do you have enough users to need this?), admin dashboards (use a spreadsheet or Notion in the beginning), mobile apps (start with a mobile-responsive website), integrations with third-party tools (manual import/export works at small scale), and notification systems (email works fine initially).
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            If you are struggling to cut features, use the brief-writing framework from our <Link href="/blog/website-brief-template" className="text-brand-green hover:underline">website brief template</Link> — writing down what each feature enables helps distinguish must-haves from nice-to-haves.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Step 5: Pick Your Stack</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            For an MVP, your stack should be whatever lets your team ship fastest and iterate most easily. Avoid choosing a technology because it is exciting or because you read about it. The only questions that matter are: does your team know it, can it support the core feature you need, and can you find developers to maintain it if needed?
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            For web-based MVPs, the combination of Next.js on the frontend with a hosted database like Supabase or PlanetScale and an authentication provider like Clerk or Auth.js lets a small team ship a working product in weeks. For mobile, React Native or Flutter enable a single codebase to target iOS and Android without doubling development time.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            For deployment, managed platforms like Vercel, Railway and Render eliminate infrastructure management at the MVP stage. You should not be configuring servers when you are still learning whether your product has users.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Step 6: Build in Short Cycles</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Work in one-week or two-week cycles. At the start of each cycle, define one to three things you will build. At the end of the cycle, demo whatever exists — even if it is broken — to at least one real potential user. The discipline of showing work to real people weekly prevents the common failure mode of building in a vacuum for months and emerging with something nobody wants.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Keep a simple decision log. Each week, note what you shipped, what you learned from user conversations and what you are changing as a result. This log becomes invaluable when you are talking to investors or bringing on a new team member.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Ship to real users as soon as the core action works end to end — even if it looks rough. A broken sign-up flow is a blocker. An unpolished dashboard is acceptable. The user's ability to complete the core task is what matters at this stage.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Step 7: Measure What Matters</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            For an MVP, track four metrics and nothing else. More metrics create noise and analysis paralysis.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Activation rate:</strong> The percentage of sign-ups who complete the core action — the moment they first get value from the product. For a gym management tool, activation might be adding their first five members.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Retention:</strong> Do users come back? A product that gets used once and abandoned is not solving a real, recurring problem. Week-two retention is a leading indicator of whether the core value is real.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Willingness to pay:</strong> Even if you are free during the MVP stage, ask users directly: "If this product cost ₹999 per month, would you use it?" and "What would you pay for it today?" The answers reveal whether you have a business or just a free tool.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Net Promoter Score (NPS):</strong> Ask users "How likely are you to recommend this to a colleague?" on a scale of 0 to 10. An NPS above 40 for a B2B tool at MVP stage is a strong signal. Below 20 and you need significant product work before scaling acquisition.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Step 8: Decide — Persist, Pivot or Stop</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            After six to twelve weeks of working MVP, you have enough data to make one of three decisions. Persist means your assumption was validated — users are activating, retaining and expressing willingness to pay. You build the next layer of the product. Pivot means your assumption was wrong or partially wrong but you learned something that points toward a better idea — a different user segment, a different problem or a different approach to the same problem. Stop means the evidence consistently shows no demand, no retention and no willingness to pay, and no pivot path is obvious. Stopping early is a success: you saved the resources that would have gone into scaling a product nobody wants.
          </p>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            Most founders take too long to make this decision. Set a date — typically 90 days from first user — and commit to being honest about what the data shows.
          </p>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Building an AI MVP: Three Specific Tips</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            AI products introduce additional uncertainty compared to traditional software MVPs. The model's output quality, latency and cost can all vary significantly from your expectations at the prototype stage. Here are three tips specific to building an AI MVP.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Start with a Wizard of Oz approach:</strong> Before connecting a real model, have a human review and send the AI responses manually. This lets you validate that users find the output format useful before spending engineering time on API integration and prompt engineering. It also protects you from bad AI responses damaging your early user relationships.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Build an evaluation dataset early:</strong> From day one, collect examples of good and bad outputs with human labels. As you swap models, adjust prompts or tune parameters, this dataset tells you objectively whether quality improved or regressed. Without it, you are guessing. Even 20 to 30 labelled examples are vastly better than nothing.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Monitor cost per output from the first API call:</strong> AI inference costs at scale can be surprising. Instrument your usage from the beginning so you understand your unit economics before you acquire users aggressively. Many AI MVPs discover a cost problem only after they have commitments they cannot profitably serve. See our guide to <Link href="/blog/ai-chatbots-small-business" className="text-brand-green hover:underline">AI chatbots for small businesses</Link> for practical implementation context.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Common Mistakes</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Building in secret for too long:</strong> Founders delay showing real users the product because they are embarrassed by its incompleteness. The result is months of work based on untested assumptions. If you would not be a little embarrassed to show someone your MVP, you have over-built it.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Confusing engagement with validation:</strong> Users who sign up for free and explore the product once are not validation. Users who return, complete core tasks and express willingness to pay are validation. Watch for the temptation to celebrate sign-up numbers as evidence that the product is working.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Optimising for the wrong metric:</strong> Traffic is not users. Users are not activated users. Activated users are not paying customers. Each stage of the funnel is a different problem. Optimising landing page conversion rates when your real problem is week-two churn wastes time and money.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted" style={sans}>
              <span className="w-4 h-px bg-brand-green flex-shrink-0 mt-2.5" />
              <span className="leading-relaxed"><strong>Hiring before validating:</strong> Some founders hire a full development team before confirming that the product idea has legs. If the assumption proves wrong, the team must either be let go or redirected, both of which are expensive and demoralising. Validate with the smallest possible team, then hire to scale what is proven.</span>
            </li>
          </ul>

          <h3 className="text-xl italic text-foreground mt-8 mb-3">Frequently Asked Questions</h3>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">How long should it take to build an MVP?</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            For a web-based SaaS product, four to eight weeks is a reasonable target for a small team with clear scope. Mobile apps take longer — typically eight to twelve weeks. If your MVP is taking more than three months, the scope has not been cut aggressively enough, or the riskiest assumption has not been identified clearly. Time-box the build: set a deadline and cut scope to meet it rather than moving the deadline to include more features.
          </p>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">How much should an MVP cost?</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            This varies widely depending on complexity and team, but a useful mental model is: spend as little as needed to get a definitive answer to your riskiest assumption. Some MVP tests can be run for under ₹50,000 using no-code tools and manual processes. A custom-built web MVP with a small development team typically costs ₹3 to 10 lakhs in India. If a quote for an MVP is significantly higher, ask which features would be cut to bring it down — the answer reveals a great deal about how well-scoped the project is.
          </p>

          <h3 className="text-lg italic text-foreground mt-6 mb-2">Should I protect my idea before showing it to users?</h3>
          <p className="text-sm text-muted leading-relaxed" style={sans}>
            For the vast majority of startups, the risk of someone stealing the idea is far smaller than the risk of building something nobody wants. Ideas are plentiful; the ability to execute, build a team and acquire customers is what creates value. Talk to potential users early and often. If you are building in a highly regulated or defensible technical domain — biotech, deep hardware, proprietary data — legal advice on IP protection may be warranted, but for most software products, speed of learning matters more than secrecy.
          </p>
        </article>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-hairline text-center">
        <FadeIn>
          <Link href="/blog" className="inline-block px-8 py-3 border border-hairline text-[10px] tracking-[0.2em] uppercase text-foreground hover:border-brand-green hover:text-brand-green transition-colors duration-300 mr-4" style={sans}>More Articles</Link>
          <Link href="/services" className="inline-block px-8 py-3 bg-foreground text-background text-[10px] tracking-[0.2em] uppercase hover:bg-brand-green transition-colors duration-300" style={sans}>Start a Project</Link>
        </FadeIn>
      </section>
    </main>
  );
}
