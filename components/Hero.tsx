import Cover from "./Cover";
import Aurora from "./Aurora";
import TypingRole from "./TypingRole";
import LiveStatus from "./LiveStatus";
import Uptime from "./Uptime";
import { profile, about } from "@/content";
import type { LastPush } from "@/data/github";

export default function Hero({ lastPush }: { lastPush: LastPush }) {
  return (
    <div className="relative">
      <Aurora />

      <Cover />

      <div className="mt-4">
        <h1 className="font-display text-4xl leading-tight">{profile.name}</h1>
        <div className="mt-1">
          <TypingRole />
        </div>

        {/* meta row */}
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="meta normal-case" style={{ letterSpacing: 0 }}>
            {profile.location}
          </span>
          <span aria-hidden className="text-muted">
            ·
          </span>
          <a
            href={profile.links.codeforces}
            target="_blank"
            rel="noreferrer"
            className="pill text-[#1D4ED8] dark:text-[#93C5FD]"
            style={{ borderColor: "color-mix(in srgb, #1D4ED8 40%, transparent)" }}
          >
            Codeforces {profile.codeforcesRank}
          </a>
          <span className="pill text-fg">
            <span className="size-1.5 rounded-full bg-success dot-pulse" aria-hidden />
            {profile.status}
          </span>
        </div>

        {/* live status bar */}
        <div className="mt-4">
          <LiveStatus />
        </div>

        {/* uptime + last push */}
        <div className="mt-3 space-y-1 font-mono text-[11px] text-muted">
          <p>
            <Uptime />
          </p>
          {lastPush && (
            <p>
              last push: {lastPush.ago} → {lastPush.repo}
            </p>
          )}
        </div>
      </div>

      {/* About */}
      <div id="about" className="mt-8 scroll-mt-20">
        <div className="meta">01 — ABOUT</div>
        <ul className="mt-3 space-y-3">
          {about.map((para, i) => (
            <li key={i} className="flex gap-3 text-muted">
              <span aria-hidden className="mt-[11px] size-1 shrink-0 rounded-full bg-brand" />
              <span>{para}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
