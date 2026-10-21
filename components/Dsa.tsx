import Sparkline from "./Sparkline";
import { competitive, dsaTopics } from "@/content";
import type { CfData } from "@/data/codeforces";
import { CF_PROFILE } from "@/data/codeforces";

function Stat({ label, value }: { label: string; value: string | number | null }) {
  return (
    <div>
      <div className="font-display text-2xl leading-none text-fg">{value ?? "—"}</div>
      <div className="meta mt-1.5 normal-case" style={{ letterSpacing: 0 }}>
        {label}
      </div>
    </div>
  );
}

export default function Dsa({ cf }: { cf: CfData }) {
  // other platforms render only if their data exists
  const others = competitive.filter((c) => c.platform.toLowerCase() !== "codeforces");

  return (
    <div className="space-y-8">
      {/* Codeforces card */}
      <div className="card p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <a
            href={CF_PROFILE}
            target="_blank"
            rel="noreferrer"
            className="font-display text-2xl leading-none text-[#1D4ED8] dark:text-[#93C5FD]"
          >
            Codeforces {cf.rank}
          </a>
          <a
            href={CF_PROFILE}
            target="_blank"
            rel="noreferrer"
            className="meta normal-case text-muted transition-colors hover:text-fg"
            style={{ letterSpacing: 0 }}
          >
            @{cf.handle} ↗
          </a>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-4">
          <Stat label="Current rating" value={cf.rating} />
          <Stat label="Max rating" value={cf.maxRating} />
          <Stat label="Contests" value={cf.contests} />
        </div>

        {cf.history.length >= 2 && (
          <div className="mt-6">
            <div className="meta mb-2">Rating history</div>
            <div style={{ color: "var(--hue-dsa)" }}>
              <Sparkline points={cf.history.map((h) => h.r)} draw width={360} height={60} />
            </div>
          </div>
        )}

        <p className="meta mt-5 normal-case text-muted" style={{ letterSpacing: 0 }}>
          {cf.live ? "Live from the Codeforces API · refreshed daily" : "Showing saved values — live API unavailable"}
        </p>
      </div>

      {/* Topics */}
      <div>
        <div className="meta mb-3">Topics I&apos;m strong in</div>
        <div className="flex flex-wrap gap-2">
          {dsaTopics.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Other platforms (render only if data exists) */}
      {others.length > 0 && (
        <div>
          <div className="meta mb-3">Other platforms</div>
          <div className="grid gap-3 sm:grid-cols-2">
            {others.map((c) => (
              <a
                key={c.platform}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="card card-hover flex items-center justify-between gap-3 p-4"
              >
                <span className="font-display text-lg leading-none">{c.platform}</span>
                <span className="text-right font-mono text-[11px] text-muted">{c.detail}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
