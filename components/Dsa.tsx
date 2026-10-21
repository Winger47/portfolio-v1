import Sparkline from "./Sparkline";
import { dsaTopics } from "@/content";
import type { CfData } from "@/data/codeforces";
import { CF_PROFILE } from "@/data/codeforces";
import type { LcData } from "@/data/leetcode";
import { LC_PROFILE } from "@/data/leetcode";

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

function PlatformCard({
  platform,
  rank,
  titleClass,
  profile,
  handle,
  rating,
  maxRating,
  contests,
  extraLabel,
  extraValue,
  history,
  live,
  sparkClass,
}: {
  platform: string;
  rank: string;
  titleClass: string;
  profile: string;
  handle: string;
  rating: number | null;
  maxRating: number | null;
  contests: number | null;
  extraLabel: string;
  extraValue: string | number | null;
  history: number[];
  live: boolean;
  sparkClass: string;
}) {
  return (
    <div className="card p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <a
          href={profile}
          target="_blank"
          rel="noreferrer"
          className={`font-display text-2xl leading-none ${titleClass}`}
        >
          {platform} {rank}
        </a>
        <a
          href={profile}
          target="_blank"
          rel="noreferrer"
          className="meta normal-case text-muted transition-colors hover:text-fg"
          style={{ letterSpacing: 0 }}
        >
          @{handle} ↗
        </a>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Stat label="Current rating" value={rating} />
        <Stat label="Max rating" value={maxRating} />
        <Stat label="Contests" value={contests} />
        <Stat label={extraLabel} value={extraValue} />
      </div>

      {history.length >= 2 && (
        <div className="mt-6">
          <div className="meta mb-2">Rating history</div>
          <div className={sparkClass}>
            <Sparkline points={history} draw width={360} height={60} />
          </div>
        </div>
      )}

      <p className="meta mt-5 normal-case text-muted" style={{ letterSpacing: 0 }}>
        {live ? "Live from the API · refreshed daily" : "Showing saved values — live API unavailable"}
      </p>
    </div>
  );
}

export default function Dsa({ cf, lc }: { cf: CfData; lc: LcData }) {
  return (
    <div className="space-y-8">
      <PlatformCard
        platform="Codeforces"
        rank={cf.rank}
        titleClass="text-[#1D4ED8] dark:text-[#93C5FD]"
        profile={CF_PROFILE}
        handle={cf.handle}
        rating={cf.rating}
        maxRating={cf.maxRating}
        contests={cf.contests}
        extraLabel="Peak (résumé)"
        extraValue={1633}
        history={cf.history.map((h) => h.r)}
        live={cf.live}
        sparkClass="text-[#1D4ED8] dark:text-[#93C5FD]"
      />

      <PlatformCard
        platform="LeetCode"
        rank={lc.title}
        titleClass="text-[#C2410C] dark:text-[#FF9F1A]"
        profile={LC_PROFILE}
        handle={lc.handle}
        rating={lc.rating}
        maxRating={lc.maxRating}
        contests={lc.contests}
        extraLabel="Top %"
        extraValue={lc.topPercent != null ? `${lc.topPercent.toFixed(2)}%` : null}
        history={lc.history.map((h) => h.r)}
        live={lc.live}
        sparkClass="text-[#C2410C] dark:text-[#FF9F1A]"
      />

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
    </div>
  );
}
