import { competitive } from "@/content";
import SectionHeader from "./SectionHeader";
import ContributionGraph from "./ContributionGraph";

export default function Activity() {
  return (
    <>
      <SectionHeader label="05 — ACTIVITY" title="GitHub activity" />

      <div className="card overflow-x-auto p-4">
        <div className="meta mb-3">@Winger47</div>
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
