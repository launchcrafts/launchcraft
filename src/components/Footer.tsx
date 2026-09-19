import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10">
          <div>
            <Link href="/">
              <Image src="/assets/logo.PNG" alt="LaunchCraft" width={160} height={52} />
            </Link>
            <p
              className="text-xs text-muted mt-3 max-w-xs leading-relaxed"
              style={{ fontFamily: "var(--font-secondary)" }}
            >
              We craft digital experiences that last.
            </p>
          </div>
          <nav className="flex flex-col sm:flex-row gap-5 sm:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[10px] tracking-[0.2em] uppercase text-muted hover:text-foreground transition-colors duration-300"
                style={{ fontFamily: "var(--font-secondary)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t border-hairline mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-[10px] tracking-[0.15em] uppercase text-muted"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            © 2025 LaunchCraft · launchcrafts.in
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/launchcrafts.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-[0.2em] uppercase text-muted hover:text-brand-orange transition-colors duration-300"
              style={{ fontFamily: "var(--font-secondary)" }}
            >
              Instagram
            </a>
            <p
              className="text-[10px] tracking-[0.15em] uppercase text-muted"
              style={{ fontFamily: "var(--font-secondary)" }}
            >
              Web Development &nbsp;·&nbsp; AI Automation &nbsp;·&nbsp; Brand Identity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
