import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Insights on web development, SEO, AI automation, and digital strategy from the LaunchCraft team.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ArticlesPage() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="flex flex-col">
      {/* Header */}
      <section className="py-20 px-6 text-center border-b border-hairline">
        <FadeIn>
          <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-4">
            Insights
          </p>
          <h1 className="text-4xl sm:text-5xl italic text-foreground mb-6">
            Articles
          </h1>
          <div className="w-12 h-px bg-hairline mx-auto mb-6" />
          <p
            className="text-sm text-muted max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            Practical advice on web development, SEO, and growing your business
            online.
          </p>
        </FadeIn>
      </section>

      {/* Article List */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-0 divide-y divide-hairline">
          {sorted.map((article, i) => (
            <FadeIn key={article.slug} delay={i * 80}>
              <Link
                href={`/articles/${article.slug}`}
                className="group block py-10 first:pt-0 last:pb-0"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span
                      className="text-[10px] tracking-[0.2em] uppercase text-muted"
                      style={{ fontFamily: "var(--font-secondary)" }}
                    >
                      {formatDate(article.date)}
                    </span>
                    <span className="text-hairline">·</span>
                    {article.tags.map((tag) => (
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
                    {article.title}
                  </h2>
                  <p
                    className="text-sm text-muted leading-relaxed"
                    style={{ fontFamily: "var(--font-secondary)" }}
                  >
                    {article.excerpt}
                  </p>
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase text-muted group-hover:text-brand-orange transition-colors duration-300"
                    style={{ fontFamily: "var(--font-secondary)" }}
                  >
                    Read Article &rarr;
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
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
