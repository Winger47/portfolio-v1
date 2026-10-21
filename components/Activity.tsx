import { competitive, profile } from "@/content";
import ContributionGraph from "./ContributionGraph";
import type { LastPush } from "@/data/github";

export default function Activity({ lastPush }: { lastPush?: LastPush }) {
  return (
    <>
      <div className="card overflow-x-auto p-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="meta normal-case text-muted transition-colors hover:text-fg"
            style={{ letterSpacing: 0 }}
          >
            @Winger47 ↗
          </a>
          {lastPush && (
            <span className="font-mono text-[11px] text-muted">
              last push: {lastPush.ago} → {lastPush.repo}
            </span>
          )}
        </div>
        <div className="min-w-[640px]">
          <ContributionGraph username="Winger47" />
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {competitive.map((c) => (
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
    </>
  );
}
