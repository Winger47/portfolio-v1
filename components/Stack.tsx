"use client";

import { useState } from "react";
import { skills, stackTabs } from "@/content";
import SectionHeader from "./SectionHeader";

export default function Stack() {
  const [active, setActive] = useState<(typeof stackTabs)[number]>("Languages");
  const group = skills.find((s) => s.group === active);

  return (
    <>
      <SectionHeader label="04 — STACK" title="Tech stack" />

      <div role="tablist" aria-label="Filter stack" className="mb-5 flex flex-wrap gap-5">
        {stackTabs.map((t) => {
          const selected = active === t;
          return (
            <button
              key={t}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(t)}
              className={`meta border-b-2 pb-1 transition-colors ${
                selected
                  ? "border-accentInk text-fg"
                  : "border-transparent text-muted hover:text-fg"
              }`}
            >
              {t}
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-2">
        {group?.items.map((it) => (
          <span key={it} className="tag">
            {it}
          </span>
        ))}
      </div>
    </>
  );
}
