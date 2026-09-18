import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { projectsByDivision } from "@/data/projects";

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

      {/* ── International / UK Projects ──────────────── */}
      <section className="py-16 px-6 border-t border-hairline bg-foreground">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-10">
            <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-3">
              International Projects
            </p>
            <h2 className="text-3xl sm:text-4xl italic text-background">UK &amp; Global</h2>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1">
            {projectsByDivision.international.map((project, i) => (
              <FadeIn key={project.id} delay={(i % 8) * 60}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative overflow-hidden aspect-video bg-[#1a1a1a]"
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-600"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className="text-xs italic text-muted text-center px-3"
                        style={{ fontFamily: "var(--font-secondary)" }}
                      >
                        {project.title}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-300 flex items-center justify-center">
                    <span
                      className="text-[10px] tracking-[0.2em] uppercase text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ fontFamily: "var(--font-secondary)" }}
                    >
                      {project.title} &rarr;
                    </span>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other Official Domains (India) ──────────────── */}
      <section className="py-16 px-6 border-t border-[#2a2a2a] bg-foreground">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-10">
            <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-3">
              Official Domains
            </p>
            <h2 className="text-3xl sm:text-4xl italic text-background">Client Websites</h2>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1">
            {projectsByDivision.otherOfficial.map((project, i) => (
              <FadeIn key={project.id} delay={(i % 8) * 60}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative overflow-hidden aspect-video bg-[#1a1a1a]"
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-600"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className="text-xs italic text-muted text-center px-3"
                        style={{ fontFamily: "var(--font-secondary)" }}
                      >
                        {project.title}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-300 flex items-center justify-center">
                    <span
                      className="text-[10px] tracking-[0.2em] uppercase text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ fontFamily: "var(--font-secondary)" }}
                    >
                      {project.title} &rarr;
                    </span>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Local Healthcare Projects ──────────────────── */}
      <section className="py-16 px-6 border-t border-[#2a2a2a] bg-foreground">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-10">
            <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-3">
              Local Projects
            </p>
            <h2 className="text-3xl sm:text-4xl italic text-background">Healthcare &amp; Wellness</h2>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1">
            {projectsByDivision.localHealthcare.map((project, i) => (
              <FadeIn key={project.id} delay={(i % 8) * 60}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative overflow-hidden aspect-video bg-[#1a1a1a]"
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-600"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className="text-xs italic text-muted text-center px-3"
                        style={{ fontFamily: "var(--font-secondary)" }}
                      >
                        {project.title}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-300 flex items-center justify-center">
                    <span
                      className="text-[10px] tracking-[0.2em] uppercase text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ fontFamily: "var(--font-secondary)" }}
                    >
                      {project.title} &rarr;
                    </span>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sample E-commerce & Web Apps ────────────────── */}
      <section className="py-16 px-6 border-t border-[#2a2a2a] bg-foreground">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-10">
            <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-3">
              Sample E-commerce &amp; Web Apps
            </p>
            <h2 className="text-3xl sm:text-4xl italic text-background">Development Samples</h2>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1">
            {projectsByDivision["sample-ecommerce"].map((project, i) => (
              <FadeIn key={project.id} delay={(i % 8) * 60}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative overflow-hidden aspect-video bg-[#1a1a1a]"
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-600"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className="text-xs italic text-muted text-center px-3"
                        style={{ fontFamily: "var(--font-secondary)" }}
                      >
                        {project.title}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-300 flex items-center justify-center">
                    <span
                      className="text-[10px] tracking-[0.2em] uppercase text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ fontFamily: "var(--font-secondary)" }}
                    >
                      {project.title} &rarr;
                    </span>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sample Single Product / Landing Pages ──────── */}
      <section className="py-16 px-6 border-t border-[#2a2a2a] bg-foreground">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-10">
            <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-3">
              Single Product &amp; Landing Pages
            </p>
            <h2 className="text-3xl sm:text-4xl italic text-background">Product Showcases</h2>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1">
            {projectsByDivision["sample-single-product"].map((project, i) => (
              <FadeIn key={project.id} delay={(i % 8) * 60}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative overflow-hidden aspect-video bg-[#1a1a1a]"
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-600"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className="text-xs italic text-muted text-center px-3"
                        style={{ fontFamily: "var(--font-secondary)" }}
                      >
                        {project.title}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-300 flex items-center justify-center">
                    <span
                      className="text-[10px] tracking-[0.2em] uppercase text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ fontFamily: "var(--font-secondary)" }}
                    >
                      {project.title} &rarr;
                    </span>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
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
