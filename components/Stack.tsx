"use client";

import { useState } from "react";
import { skillGroups, skillCategories } from "@/data/skills";
import SectionHeader from "./SectionHeader";

export default function Stack() {
  const [active, setActive] = useState("All");
  const groups =
    active === "All" ? skillGroups : skillGroups.filter((g) => g.category === active);

  return (
    <>
      <SectionHeader label="04 — STACK" title="Tech stack" />

      <div role="tablist" aria-label="Filter stack" className="mb-5 flex flex-wrap gap-5">
        {skillCategories.map((t) => {
          const selected = active === t;
          return (
            <button
              key={t}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(t)}
              className={`meta border-b-2 pb-1 transition-colors ${
                selected ? "border-accentInk text-fg" : "border-transparent text-muted hover:text-fg"
              }`}
            >
              {t}
            </button>
          );
        })}
      </div>

      <div className="space-y-4">
        {groups.map((g) => (
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
        ))}
      </div>
    </>
  );
}
