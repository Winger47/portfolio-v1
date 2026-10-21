"use client";

import dynamic from "next/dynamic";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/content";

// Lazy-load overlay UIs (keeps cmdk + dialog out of the initial bundle).
const CommandPalette = dynamic(() => import("./CommandPalette"), { ssr: false });
const SkillsDialog = dynamic(() => import("./SkillsDialog"), { ssr: false });

export default function TopBar() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
        <div className="mx-auto flex max-w-[720px] items-center justify-between px-4 py-3">
          <a
            href="#top"
            aria-label="Back to top"
            className="font-display text-xl leading-none tracking-wide"
          >
            {profile.initials}
          </a>
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
          </div>
        </div>
      </header>
      <CommandPalette />
      <SkillsDialog />
    </>
  );
}
