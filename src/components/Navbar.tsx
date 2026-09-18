"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Expertise" },
  { href: "/portfolio", label: "Work" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="relative flex items-center px-5 border-b border-hairline bg-background z-50">
        {/* Logo — left */}
        <Link href="/" onClick={() => setOpen(false)}>
          <Image
            src="/assets/logo.PNG"
            alt="LaunchCraft"
            width={210}
            height={68}
            priority
          />
        </Link>

        {/* Links — absolutely centered, desktop only */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6">
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

        {/* CTA — right, desktop only */}
        <Link
          href="/contact"
          className="hidden md:inline-block ml-auto text-[10px] tracking-[0.2em] uppercase px-4 py-2 border border-hairline text-muted hover:border-brand-green hover:text-brand-green transition-colors duration-300"
          style={{ fontFamily: "var(--font-secondary)" }}
        >
          Start a Project
        </Link>

        {/* Hamburger — mobile only */}
        <button
          className="ml-auto md:hidden flex flex-col justify-center gap-[5px] p-2 -mr-1"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className={`block w-5 h-px bg-foreground transition-all duration-200 origin-center ${
              open ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-foreground transition-all duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-foreground transition-all duration-200 origin-center ${
              open ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-b border-hairline bg-background flex flex-col z-40 relative">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-6 py-4 text-[10px] tracking-[0.3em] uppercase text-foreground border-b border-hairline hover:text-brand-orange transition-colors duration-300"
              style={{ fontFamily: "var(--font-secondary)" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="px-6 py-4 text-[10px] tracking-[0.3em] uppercase text-brand-green"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            Start a Project &rarr;
          </Link>
        </div>
      )}
    </>
  );
}
