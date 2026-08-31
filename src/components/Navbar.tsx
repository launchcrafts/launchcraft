import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Expertise" },
  { href: "/portfolio", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="relative flex items-center px-5 border-b border-hairline">
      {/* Logo — left */}
      <Link href="/">
        <Image
          src="/assets/logo.PNG"
          alt="LaunchCraft"
          width={210}
          height={68}
          priority
        />
      </Link>

      {/* Links — absolutely centered */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-xs tracking-[0.2em] uppercase text-foreground hover:text-brand-orange transition-colors duration-300"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* CTA — right */}
      <Link
        href="/contact"
        className="ml-auto text-[10px] tracking-[0.2em] uppercase px-4 py-2 border border-hairline text-muted hover:border-brand-green hover:text-brand-green transition-colors duration-300"
        style={{ fontFamily: "var(--font-secondary)" }}
      >
        Start a Project
      </Link>
    </nav>
  );
}
