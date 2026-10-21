"use client";

import { useEffect, useState } from "react";

type Day = { date: string; count: number; level: number };

// theme-aware amber ramp for levels 0–4 (separate light/dark scales in globals.css)
const LEVELS = ["var(--gh-0)", "var(--gh-1)", "var(--gh-2)", "var(--gh-3)", "var(--gh-4)"];

export default function ContributionGraph({
  username,
  weeks: weekLimit,
  compact = false,
}: {
  username: string;
  weeks?: number; // only render the most recent N weeks
  compact?: boolean; // smaller cells, no legend (for the bento tile)
}) {
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
      <span className="font-mono text-xs text-muted">
        Activity on github.com/{username} →
      </span>
    );
  }

  if (!days) {
    return <p className="font-mono text-xs text-muted">Loading activity…</p>;
  }

  // split the flat list into weekly columns of 7 days
  let weeks: Day[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  if (weekLimit && weeks.length > weekLimit) {
    weeks = weeks.slice(weeks.length - weekLimit);
  }

  const cell = compact ? "h-[9px] w-[9px]" : "h-[11px] w-[11px]";
  const gap = compact ? "gap-[2px]" : "gap-[3px]";

  return (
    <div>
      <div className={`flex ${gap}`}>
        {weeks.map((week, wi) => (
          <div key={wi} className={`flex flex-col ${gap}`}>
            {week.map((d) => (
              <div
                key={d.date}
                title={`${d.count} contribution${d.count === 1 ? "" : "s"} on ${d.date}`}
                className={`${cell} rounded-[2px]`}
                style={{ backgroundColor: LEVELS[d.level] ?? LEVELS[0] }}
              />
            ))}
          </div>
        ))}
      </div>

      {compact ? (
        <div className="mt-2 font-mono text-[11px] text-muted">
          {total !== null ? total.toLocaleString() : "—"} contributions · last year
        </div>
      ) : (
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
      )}
    </div>
  );
}
