"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import dynamic from "next/dynamic";
import ThemeToggle from "./ThemeToggle";
import { profile, pages, navOrder } from "@/content";

// Global overlays, lazy-loaded (kept out of the initial bundle).
const CommandPalette = dynamic(() => import("./CommandPalette"), { ssr: false });
const SkillsDialog = dynamic(() => import("./SkillsDialog"), { ssr: false });

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const links = navOrder.map((k) => pages[k]);
  const active = (href: string) => pathname === href;

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
        <div className="mx-auto flex max-w-[720px] items-center justify-between px-4 py-3">
          <Link
            href="/"
            aria-label="Home"
            className="font-display text-xl leading-none tracking-wide"
          >
            {profile.initials}
          </Link>

          <nav className="hidden items-center gap-5 sm:flex" aria-label="Sections">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active(l.href) ? "page" : undefined}
                className={`meta border-b-2 pb-0.5 transition-colors ${
                  active(l.href)
                    ? "border-accentInk text-fg"
                    : "border-transparent text-muted hover:text-fg"
                }`}
              >
                {l.title}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event("toggle-command-palette"))}
              aria-label="Open command menu"
              className="pill text-muted transition-colors hover:border-fg/30 hover:text-fg"
            >
              <span aria-hidden>⌘</span>K
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              className="inline-flex size-8 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-fg/30 hover:text-fg sm:hidden"
            >
              <span aria-hidden>{menuOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-line px-4 py-2 sm:hidden" aria-label="Sections">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={active(l.href) ? "page" : undefined}
                    className={`block py-2 font-mono text-sm ${
                      active(l.href) ? "text-fg" : "text-muted"
                    }`}
                  >
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <CommandPalette />
      <SkillsDialog />
    </>
  );
}
