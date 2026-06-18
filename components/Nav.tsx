"use client";

import { useEffect, useState } from "react";
import { profile } from "@/content";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/85 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#home" className="font-mono text-sm text-ink">
          <span className="text-amber">~/</span>shikhar
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="font-mono text-sm text-muted transition-colors hover:text-ink"
            >
              {s.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            className="rounded border border-amber/50 px-3 py-1.5 font-mono text-sm text-amber transition-colors hover:bg-amber-dim"
          >
            resume ↓
          </a>
        </div>
      </nav>
    </header>
  );
}
