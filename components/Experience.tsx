import { experience, expStats } from "@/content";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <>
      <SectionHeader label="03 — EXPERIENCE" title="Experience" />

      {/* vertical timeline */}
      <div className="relative border-l border-line pl-6">
        <span
          aria-hidden
          className="absolute -left-[5px] top-1.5 size-2.5 rounded-full border border-line bg-accent"
        />
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-xl leading-none">{experience.company}</h3>
          <span className="meta">{experience.period}</span>
        </div>
        <p className="mt-1.5 text-muted">
          {experience.title} · {experience.location}
        </p>

        <div className="mt-5 space-y-6">
          {experience.engagements.map((e) => (
            <div key={e.client} className="relative">
              <span
                aria-hidden
                className="absolute -left-[25px] top-2 size-2 rounded-full bg-line"
              />
              <div className="flex flex-wrap items-center gap-2">
                <span className="meta text-fg">{e.client}</span>
                {e.stack.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
              <ul className="mt-2.5 space-y-2">
                {e.points.map((pt, j) => (
                  <li key={j} className="flex gap-2.5 text-muted">
                    <span
                      aria-hidden
                      className="mt-[9px] size-1 shrink-0 rounded-full bg-accentInk"
                    />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* stat cards */}
      <div className="mt-8 grid grid-cols-3 gap-3">
        {expStats.map((s) => (
          <div key={s.label} className="card p-4 text-center">
            <div className="font-display text-2xl leading-none">{s.value}</div>
            <div className="meta mt-2 normal-case" style={{ letterSpacing: "0.04em" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
