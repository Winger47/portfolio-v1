"use client";

import { useState } from "react";
import { projects, projectCategories } from "@/content";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  const [active, setActive] = useState<string>("All");
  const shown =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <SectionHeader label="02 — PROJECTS" title="Selected projects" />

      <div role="tablist" aria-label="Filter projects" className="mb-6 flex flex-wrap gap-5">
        {projectCategories.map((c) => {
          const selected = active === c;
          return (
            <button
              key={c}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(c)}
              className={`meta border-b-2 pb-1 transition-colors ${
                selected
                  ? "border-accentInk text-fg"
                  : "border-transparent text-muted hover:text-fg"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {shown.map((p) => (
          <ProjectCard key={p.name} p={p} />
        ))}
      </div>
    </>
  );
}
