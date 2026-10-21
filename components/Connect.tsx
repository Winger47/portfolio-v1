"use client";

import { useState } from "react";
import LiveClock from "./LiveClock";
import { GithubIcon, LinkedinIcon, MailIcon, FileIcon, ExternalIcon } from "./icons";
import { profile } from "@/content";

const hue = "var(--hue-connect)";

function Row({
  icon,
  label,
  value,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card flex items-center justify-between gap-3 p-4">
      <div className="flex min-w-0 items-center gap-3">
        <span className="text-muted">{icon}</span>
        <div className="min-w-0">
          <div className="meta normal-case" style={{ letterSpacing: 0 }}>
            {label}
          </div>
          <div className="truncate text-sm text-fg">{value}</div>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-2">{children}</div>
    </div>
  );
}

function Btn({
  children,
  onClick,
  href,
  download,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  download?: boolean;
}) {
  const cls = "pill text-fg transition-colors hover:border-fg/30";
  if (href)
    return (
      <a
        href={href}
        {...(download ? { download: true } : { target: "_blank", rel: "noreferrer" })}
        className={cls}
      >
        {children}
      </a>
    );
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export default function Connect() {
  const [toast, setToast] = useState(false);

  const copyEmail = () => {
    const done = () => {
      setToast(true);
      window.setTimeout(() => setToast(false), 2000);
    };
    if (navigator.clipboard) {
      navigator.clipboard.writeText(profile.links.email).then(done).catch(done);
    } else {
      done();
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="font-display text-3xl leading-tight" style={{ color: hue }}>
        Let&apos;s talk
      </h2>

      <div className="space-y-3">
        <Row icon={<MailIcon />} label="Email" value={profile.links.email}>
          <Btn onClick={copyEmail}>Copy</Btn>
          <Btn href={`mailto:${profile.links.email}`} download={false}>
            Mail
          </Btn>
        </Row>
        <Row icon={<LinkedinIcon />} label="LinkedIn" value="in/shikhar-pandav">
          <Btn href={profile.links.linkedin}>
            Open <ExternalIcon />
          </Btn>
        </Row>
        <Row icon={<GithubIcon />} label="GitHub" value="Winger47">
          <Btn href={profile.links.github}>
            Open <ExternalIcon />
          </Btn>
        </Row>
        <Row icon={<span className="font-mono text-xs">CF</span>} label="Codeforces" value="rs27_cris">
          <Btn href={profile.links.codeforces}>
            Open <ExternalIcon />
          </Btn>
        </Row>
        <Row icon={<FileIcon />} label="Résumé" value="PDF">
          <Btn href={profile.resumeUrl}>View</Btn>
          <Btn href={profile.resumeUrl} download>
            Download
          </Btn>
        </Row>
      </div>

      {profile.calUrl && (
        <a href={profile.calUrl} target="_blank" rel="noreferrer" className="card card-hover block p-4">
          <div className="meta" style={{ color: hue }}>
            Book a call
          </div>
          <p className="mt-1 text-sm text-fg">Grab a slot that works for you →</p>
        </a>
      )}

      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] text-muted">
        <span>Delhi NCR</span>
        <span aria-hidden>·</span>
        <span>IST (UTC+5:30)</span>
        <span aria-hidden>·</span>
        <LiveClock />
        <span aria-hidden>·</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-success dot-pulse" aria-hidden />
          replies within 24h
        </span>
      </div>

      {/* toast */}
      <div
        aria-live="polite"
        className={`pointer-events-none fixed bottom-6 left-1/2 z-[80] -translate-x-1/2 transition-opacity duration-200 ${
          toast ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="pill border-success/40 bg-card text-success shadow-lg">Copied ✓</span>
      </div>
    </div>
  );
}
