"use client";

import { useEffect, useState } from "react";

type Day = { date: string; count: number; level: number };

// theme-aware amber ramp for levels 0–4 (separate light/dark scales in globals.css)
const LEVELS = [
  "var(--gh-0)",
  "var(--gh-1)",
  "var(--gh-2)",
  "var(--gh-3)",
  "var(--gh-4)",
];

export default function ContributionGraph({ username }: { username: string }) {
  const [days, setDays] = useState<Day[] | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((r) => {
        if (!r.ok) throw new Error("bad response");
        return r.json();
      })
      .then((data: { contributions: Day[] }) => {
        if (!active) return;
        setDays(data.contributions);
        setTotal(data.contributions.reduce((s, d) => s + d.count, 0));
      })
      .catch(() => active && setFailed(true));
    return () => {
      active = false;
    };
  }, [username]);

  if (failed) {
    return (
      <a
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noreferrer"
        className="font-mono text-sm text-muted hover:text-fg"
      >
        View activity on github.com/{username} →
      </a>
    );
  }

  if (!days) {
    return <p className="font-mono text-sm text-muted">Loading activity…</p>;
  }

  // split the flat list into weekly columns of 7 days
  const weeks: Day[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return (
    <div>
      <div className="flex gap-[3px]">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.map((d) => (
              <div
                key={d.date}
                title={`${d.count} contribution${d.count === 1 ? "" : "s"} on ${d.date}`}
                className="h-[11px] w-[11px] rounded-[2px]"
                style={{ backgroundColor: LEVELS[d.level] ?? LEVELS[0] }}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between font-mono text-xs text-muted">
        <span>
          {total !== null ? total.toLocaleString() : "—"} contributions in the last year
        </span>
        <span className="flex items-center gap-1">
          less
          {LEVELS.map((c) => (
            <span
              key={c}
              className="h-[10px] w-[10px] rounded-[2px]"
              style={{ backgroundColor: c }}
            />
          ))}
          more
        </span>
      </div>
    </div>
  );
}