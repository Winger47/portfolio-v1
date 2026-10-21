"use client";

import { useRef, useState } from "react";
import { skillGroups, skillCategories } from "@/data/skills";

// Search + category tabs + grouped chips. Used standalone on /skills and inside
// the ⌘K quick-view dialog.
export default function SkillsView({ autoFocus = false }: { autoFocus?: boolean }) {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");
  const inputRef = useRef<HTMLInputElement>(null);

  const q = query.trim().toLowerCase();
  const groups = skillGroups
    .filter((g) => cat === "All" || g.category === cat)
    .map((g) => ({ ...g, items: g.items.filter((it) => it.toLowerCase().includes(q)) }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="flex min-h-0 flex-col">
      <input
        ref={inputRef}
        autoFocus={autoFocus}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search skills…"
        aria-label="Search skills"
        className="w-full rounded-md border border-line bg-bg px-3 py-2 text-sm text-fg outline-none placeholder:text-muted"
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

      <div className="mt-4 min-h-0 space-y-4 overflow-y-auto pr-1">
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
  );
}
