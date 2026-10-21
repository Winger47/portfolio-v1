"use client";

import { useEffect, useRef, useState } from "react";
import { skillGroups, skillCategories } from "@/data/skills";

export default function SkillsDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");
  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onOpen = () => {
      triggerRef.current = (document.activeElement as HTMLElement) ?? null;
      setOpen(true);
    };
    window.addEventListener("open-skills", onOpen);
    return () => window.removeEventListener("open-skills", onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 0);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "Tab") {
        trapFocus(e);
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const close = () => {
    setOpen(false);
    setQuery("");
    setCat("All");
    triggerRef.current?.focus?.();
  };

  const trapFocus = (e: KeyboardEvent) => {
    const root = dialogRef.current;
    if (!root) return;
    const f = root.querySelectorAll<HTMLElement>(
      'a[href],button:not([disabled]),input,[tabindex]:not([tabindex="-1"])'
    );
    if (f.length === 0) return;
    const first = f[0];
    const last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  if (!open) return null;

  const q = query.trim().toLowerCase();
  const groups = skillGroups
    .filter((g) => cat === "All" || g.category === cat)
    .map((g) => ({ ...g, items: g.items.filter((it) => it.toLowerCase().includes(q)) }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="fixed inset-0 z-[90]" role="presentation">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={close}
        aria-hidden
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Skills"
        className="absolute inset-x-0 bottom-0 flex max-h-[85vh] flex-col overflow-hidden rounded-t-xl border border-line bg-card p-5 sm:inset-x-auto sm:bottom-auto sm:left-1/2 sm:top-20 sm:max-h-[80vh] sm:w-[92vw] sm:max-w-[560px] sm:-translate-x-1/2 sm:rounded-xl"
      >
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl leading-none">Skills</h2>
          <button
            type="button"
            onClick={close}
            aria-label="Close skills"
            className="inline-flex size-8 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-fg/30 hover:text-fg"
          >
            ✕
          </button>
        </div>

        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search skills…"
          aria-label="Search skills"
          className="mt-4 w-full rounded-md border border-line bg-bg px-3 py-2 text-sm text-fg outline-none placeholder:text-muted"
        />

        <div role="tablist" aria-label="Skill categories" className="mt-3 flex flex-wrap gap-4">
          {skillCategories.map((c) => {
            const selected = cat === c;
            return (
              <button
                key={c}
                role="tab"
                aria-selected={selected}
                onClick={() => setCat(c)}
                className={`meta border-b-2 pb-1 transition-colors ${
                  selected ? "border-accentInk text-fg" : "border-transparent text-muted hover:text-fg"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="mt-4 space-y-4 overflow-y-auto pr-1">
          {groups.length === 0 ? (
            <p className="text-sm text-muted">No skills match “{query}”.</p>
          ) : (
            groups.map((g) => (
              <div key={g.category}>
                <div className="meta mb-2">{g.category}</div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span key={it} className="tag">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
