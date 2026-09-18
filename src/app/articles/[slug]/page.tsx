import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import { articles, getArticleBySlug } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = articles
    .filter((a) => a.slug !== slug)
    .filter((a) => a.tags.some((t) => article.tags.includes(t)))
    .slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: "LaunchCraft",
      url: "https://launchcraft.in",
    },
    publisher: {
      "@type": "Organization",
      name: "LaunchCraft",
      url: "https://launchcraft.in",
    },
  };

  return (
    <main className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="py-20 px-6 text-center border-b border-hairline">
        <FadeIn>
          <Link
            href="/articles"
            className="inline-block text-[10px] tracking-[0.2em] uppercase text-muted hover:text-brand-orange transition-colors duration-300 mb-8"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            &larr; All Articles
          </Link>
          <div className="flex items-center justify-center gap-3 flex-wrap mb-4">
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl italic text-foreground max-w-2xl mx-auto leading-[1.2]">
            {article.title}
          </h1>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article
          className="prose-launchcraft max-w-2xl mx-auto"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="py-16 px-6 border-t border-hairline">
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-8">
                Related Articles
              </p>
            </FadeIn>
            <div className="space-y-6">
              {related.map((r, i) => (
                <FadeIn key={r.slug} delay={i * 80}>
                  <Link
                    href={`/articles/${r.slug}`}
                    className="group block py-6 border-b border-hairline last:border-0"
                  >
                    <h3 className="text-xl italic text-foreground group-hover:text-brand-green transition-colors duration-300 mb-2">
                      {r.title}
                    </h3>
                    <p
                      className="text-sm text-muted leading-relaxed"
                      style={{ fontFamily: "var(--font-secondary)" }}
                    >
                      {r.excerpt}
                    </p>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back + CTA */}
      <section className="py-16 px-6 border-t border-hairline text-center">
        <FadeIn>
          <Link
            href="/articles"
            className="inline-block px-8 py-3 border border-hairline text-[10px] tracking-[0.2em] uppercase text-foreground hover:border-brand-green hover:text-brand-green transition-colors duration-300 mr-4"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            More Articles
          </Link>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-foreground text-background text-[10px] tracking-[0.2em] uppercase hover:bg-brand-green transition-colors duration-300"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            Start a Project
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
