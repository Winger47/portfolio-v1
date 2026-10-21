"use client";

import { profile } from "@/content";

export default function Footer() {
  return (
    <footer className="section sep flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event("open-terminal"))}
          aria-label="Open terminal"
          className="pill text-muted transition-colors hover:border-fg/30 hover:text-fg"
        >
          ›_
        </button>
        <span className="meta normal-case" style={{ letterSpacing: 0 }}>
          psst — press <kbd className="rounded border border-line px-1">`</kbd> to open the terminal
        </span>
      </div>
      <span className="meta normal-case" style={{ letterSpacing: 0 }}>
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </span>
    </footer>
  );
}
