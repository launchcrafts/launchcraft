import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist. Return to LaunchCraft's homepage.",
};

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-4">
        404
      </p>
      <h1 className="text-4xl sm:text-5xl italic text-foreground mb-6">
        Page not found.
      </h1>
      <div className="w-12 h-px bg-hairline mx-auto mb-6" />
      <p
        className="text-sm text-muted max-w-md mx-auto leading-relaxed mb-10"
        style={{ fontFamily: "var(--font-secondary)" }}
      >
        The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="px-7 py-3 bg-foreground text-background text-[10px] tracking-[0.25em] uppercase hover:bg-brand-green transition-colors duration-300"
        >
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="px-7 py-3 border border-foreground text-foreground text-[10px] tracking-[0.25em] uppercase hover:border-brand-orange hover:text-brand-orange transition-colors duration-300"
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}
