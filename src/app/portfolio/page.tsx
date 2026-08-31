import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "40+ projects delivered by LaunchCraft — web development, AI automation, and brand identity for businesses across India and the UK.",
};

const featuredProjects = [
  {
    num: "01",
    name: "Kensley Aesthetics",
    url: "https://kensleyaesthetics.com/",
    category: "Medical Aesthetics",
    location: "Newcastle, UK",
    description:
      "A doctor-led aesthetic clinic specializing in non-surgical facial treatments. Full website with dedicated treatment pages, a before/after gallery, and a 7-step patient journey flow.",
    tags: ["Next.js", "React", "Tailwind CSS", "SEO"],
    accent: "#2D6B2D",
  },
  {
    num: "02",
    name: "Meditron CDC",
    url: "https://meditroncdc.com",
    category: "Child Development",
    location: "Vijayawada, India",
    description:
      "Pediatric therapy center with multilingual support (Telugu, Hindi, English), appointment booking, and emotional family-centered messaging. Rated 4.9★ on Google.",
    tags: ["React", "i18n", "Tailwind CSS", "Accessibility"],
    accent: "#4A90A4",
    ogImage: "https://meditroncdc.com/images/og-meditron.jpg",
  },
  {
    num: "03",
    name: "PRP Skin",
    url: "https://prp.skin/",
    category: "Medical Aesthetics",
    location: "Newcastle, UK",
    description:
      "High-converting landing page for a PRP treatment clinic — hair restoration, Vampire Facial, and skin rejuvenation. Schema markup for 5.0★ local SEO with 144 verified reviews.",
    tags: ["Next.js", "Schema Markup", "Local SEO", "Conversion"],
    accent: "#C17F5A",
  },
  {
    num: "04",
    name: "Rugby Medical Aesthetics",
    url: "https://rugby-alpha.vercel.app/",
    category: "Medical Aesthetics",
    location: "Rugby, UK",
    description:
      "Minimalist medical aesthetics site — 'Quietly Refined. Entirely You.' Treatment cards with pricing, patient testimonials, and a consultation-first messaging approach.",
    tags: ["Next.js", "React", "Tailwind CSS", "UI Design"],
    accent: "#8B7355",
  },
  {
    num: "05",
    name: "Thread Lift UK",
    url: "https://threadlift.uk/",
    category: "Medical Aesthetics",
    location: "Newcastle, UK",
    description:
      "Comprehensive PDO thread lift clinic with eight treatment categories, before/after galleries, an integrated FAQ system, and social proof from 2800+ patients.",
    tags: ["React", "Tailwind CSS", "Schema Markup", "Local SEO"],
    accent: "#6B4A8B",
  },
];

const BASE = "https://madhusdhan.vercel.app/static/media";
const allThumbnails = [
  { num: 1,  hash: "099e170a6e53cd15a3b5" },
  { num: 2,  hash: "3d9aba184456c6165615" },
  { num: 3,  hash: "d705528777757ec7c711" },
  { num: 4,  hash: "d6ac9baddbaf8b5c0aa9" },
  { num: 5,  hash: "96c17568586440389420" },
  { num: 6,  hash: "748a5d488998789ea4fa" },
  { num: 7,  hash: "ccea968da61346de14e4" },
  { num: 8,  hash: "7066cb6a83fcd61d4e30" },
  { num: 9,  hash: "61e9a52e12cac721c56a" },
  { num: 10, hash: "b7da9dfeef4c40223df8" },
  { num: 11, hash: "389f673dc79444fcbe5c" },
  { num: 12, hash: "219be3ad77baaa2dd7b8" },
  { num: 13, hash: "dcf5930e49da2c427272" },
  { num: 14, hash: "772cf420d7ee77815149" },
  { num: 15, hash: "66c1b8ade9ddf6331f4c" },
  { num: 16, hash: "ed1e490bfebb5dd9c403" },
  { num: 17, hash: "f2c61568ed7cd5bf4d76" },
  { num: 18, hash: "42306ab8100d52684ecb" },
  { num: 19, hash: "4d404e8fa04030a8de82" },
  { num: 20, hash: "981b4f962f737bd2f492" },
  { num: 21, hash: "b6c9c09c84fa46d40229" },
  { num: 22, hash: "017d90fb2853a7d5ff02" },
  { num: 23, hash: "8b20316f7cdb81dca4b8" },
  { num: 24, hash: "fa7f322c29b44847880b" },
  { num: 25, hash: "222b7631e57e3154ce02" },
  { num: 26, hash: "0ad92c28c7f83ce1578e" },
  { num: 27, hash: "bfde67d0a6c680d252cc" },
  { num: 28, hash: "cd24bce51faa6d88296e" },
  { num: 29, hash: "ff69c5da16f886857f30" },
  { num: 30, hash: "7ef999d2587dfe3ca2c9" },
  { num: 31, hash: "332cddb50bec3259fbb8" },
  { num: 32, hash: "cc9c76c437a6fabccec3" },
  { num: 33, hash: "473cbe9c30f221efd247" },
  { num: 34, hash: "4db331715820a7c83519" },
];

const stats = [
  { num: "40+", label: "Projects Delivered" },
  { num: "4+",  label: "Years of Experience" },
  { num: "2",   label: "Countries" },
  { num: "5★",  label: "Client Rating" },
];

export default function PortfolioPage() {
  return (
    <main className="flex flex-col">

      {/* ── Page Header ────────────────────────────────── */}
      <section className="py-20 px-6 text-center border-b border-hairline">
        <FadeIn>
          <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-4">
            Our Work
          </p>
          <h1 className="text-4xl sm:text-5xl italic text-foreground mb-6">Portfolio</h1>
          <div className="w-12 h-px bg-hairline mx-auto mb-6" />
          <p
            className="text-sm text-muted max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            A selection of projects from 40+ delivered across web development, brand identity, and AI automation.
          </p>
        </FadeIn>
      </section>

      {/* ── Stats ──────────────────────────────────────── */}
      <section className="border-b border-hairline py-10 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 80} className="flex flex-col items-center gap-2">
              <span className="text-3xl sm:text-4xl italic text-foreground">{s.num}</span>
              <span
                className="text-[10px] tracking-[0.2em] uppercase text-muted"
                style={{ fontFamily: "var(--font-secondary)" }}
              >
                {s.label}
              </span>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Featured Projects ──────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-10">
              Featured Work
            </p>
          </FadeIn>
          <div className="space-y-6">
            {featuredProjects.map((p, i) => (
              <FadeIn key={p.name} delay={i * 80}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border border-hairline hover:border-brand-green transition-colors duration-300"
                >
                  <div className="flex flex-col sm:flex-row">
                    <div
                      className="sm:w-1 w-full h-1 sm:h-auto flex-shrink-0"
                      style={{ backgroundColor: p.accent }}
                    />
                    <div className="flex-1 p-8">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                        <div>
                          <div className="flex items-center gap-4 mb-2">
                            <span
                              className="text-[10px] tracking-[0.2em] uppercase text-muted"
                              style={{ fontFamily: "var(--font-secondary)" }}
                            >
                              {p.num}
                            </span>
                            <span
                              className="text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 border border-hairline text-muted"
                              style={{ fontFamily: "var(--font-secondary)" }}
                            >
                              {p.category}
                            </span>
                          </div>
                          <h2 className="text-2xl sm:text-3xl italic text-foreground">{p.name}</h2>
                          <p
                            className="text-xs text-muted mt-1"
                            style={{ fontFamily: "var(--font-secondary)" }}
                          >
                            {p.location}
                          </p>
                        </div>
                        <span className="text-muted group-hover:text-brand-green transition-colors duration-300 text-xl flex-shrink-0">
                          &rarr;
                        </span>
                      </div>

                      {p.ogImage && (
                        <div className="mb-5 overflow-hidden border border-hairline">
                          <Image
                            src={p.ogImage}
                            alt={`${p.name} preview`}
                            width={800}
                            height={418}
                            className="w-full h-40 sm:h-52 object-cover object-top"
                          />
                        </div>
                      )}

                      <p
                        className="text-sm text-muted leading-relaxed mb-6"
                        style={{ fontFamily: "var(--font-secondary)" }}
                      >
                        {p.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 bg-foreground text-background"
                            style={{ fontFamily: "var(--font-secondary)" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full Gallery (all 34) ───────────────────────── */}
      <section className="py-16 px-6 border-t border-hairline bg-foreground">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-3">
                Complete Portfolio
              </p>
              <h2 className="text-3xl sm:text-4xl italic text-background">40+ Projects</h2>
            </div>
            <a
              href="https://madhusdhan.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline text-[10px] tracking-[0.2em] uppercase text-muted hover:text-brand-orange transition-colors duration-300 mb-1"
              style={{ fontFamily: "var(--font-secondary)" }}
            >
              Full Portfolio Site &rarr;
            </a>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1">
            {allThumbnails.map((img, i) => (
              <FadeIn key={img.num} delay={(i % 8) * 60}>
                <a
                  href="https://madhusdhan.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative overflow-hidden aspect-video bg-[#1a1a1a]"
                >
                  <Image
                    src={`${BASE}/project${img.num}.${img.hash}.png`}
                    alt={`Project ${img.num}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-600"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-300 flex items-center justify-center">
                    <span
                      className="text-[10px] tracking-[0.2em] uppercase text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ fontFamily: "var(--font-secondary)" }}
                    >
                      View &rarr;
                    </span>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-10">
            <a
              href="https://madhusdhan.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-[#2a2a2a] text-[10px] tracking-[0.25em] uppercase text-muted hover:border-brand-orange hover:text-brand-orange transition-colors duration-300"
              style={{ fontFamily: "var(--font-secondary)" }}
            >
              Visit Full Portfolio Site &rarr;
            </a>
          </FadeIn>
        </div>
      </section>

      <section className="py-8 px-6 border-t border-[#2a2a2a] bg-foreground text-center">
        <p
          className="text-xs text-muted/60 italic"
          style={{ fontFamily: "var(--font-secondary)" }}
        >
          Many client projects are under NDA and not publicly displayed.
        </p>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-hairline text-center">
        <FadeIn>
          <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-6">
            Your Project, Next
          </p>
          <h2 className="text-3xl sm:text-4xl italic text-foreground mb-8">
            Ready to add yours to the list?
          </h2>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-foreground text-background text-[10px] tracking-[0.3em] uppercase hover:bg-brand-green transition-colors duration-300"
          >
            Start a Project
          </Link>
        </FadeIn>
      </section>

    </main>
  );
}
