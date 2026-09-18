"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const links = [
  { href: "#home", label: "Profile" },
  { href: "#stack", label: "Stack" },
  { href: "#journey", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-cream/80 border-b border-cream-line"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="#home" aria-label="Aakash Rayamajhi home" className="relative block w-10 h-10 rounded-full overflow-hidden border-2 border-navy/25 hover:border-red transition-colors duration-300">
          <Image
            src="/aakash.jpeg"
            alt="Aakash Rayamajhi"
            fill
            sizes="40px"
            className="object-cover"
          />
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-[0.18em] uppercase text-ink-soft hover:text-red transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-navy text-cream px-5 py-2.5 text-xs tracking-wide uppercase hover:bg-ink transition-colors duration-300"
        >
          Let&apos;s talk
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="md:hidden grid place-items-center w-10 h-10 rounded-lg border border-ink/15 text-ink"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden px-5 pb-5 bg-cream/95 backdrop-blur-md border-b border-cream-line flex flex-col">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm uppercase tracking-wide text-ink-soft border-b border-cream-line last:border-0"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
}
