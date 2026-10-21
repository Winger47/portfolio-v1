"use client";

import { topSkills, allSkills } from "@/data/skills";

export default function SkillsCard() {
  const more = allSkills.length - topSkills.length;
  const open = () => window.dispatchEvent(new Event("open-skills"));

  return (
    <button
      type="button"
      onClick={open}
      aria-haspopup="dialog"
      className="card card-hover block w-full border-accent bg-accentSoft p-4 text-left"
    >
      <div className="flex items-center justify-between">
        <span className="meta text-accentInk">Skills</span>
        <span className="pill border-accent bg-card text-accentInk">{allSkills.length}</span>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {topSkills.map((s) => (
          <span key={s} className="tag">
            {s}
          </span>
        ))}
        <span className="tag border-accent text-accentInk">+{more} more →</span>
      </div>
    </button>
  );
}
