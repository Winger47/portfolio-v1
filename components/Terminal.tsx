"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { profile, about, pages, type PageKey } from "@/content";

type Line = { cmd?: string; out: string[] };

const SECTIONS: (PageKey | "home")[] = [
  "home",
  "projects",
  "experience",
  "skills",
  "dsa",
  "activity",
  "connect",
];

function istNow() {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

function uptimeStr() {
  const start = new Date("2024-07-01T00:00:00+05:30");
  const now = new Date();
  let y = now.getFullYear() - start.getFullYear();
  let m = now.getMonth() - start.getMonth();
  let d = now.getDate() - start.getDate();
  if (d < 0) {
    m -= 1;
    d += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }
  if (m < 0) {
    y -= 1;
    m += 12;
  }
  return `${y}y ${m}m ${d}d · since first prod deploy, Jul 2024`;
}

const BANNER: Line = {
  out: ["shikhar-os · type `help` for commands, `Esc` to close"],
};

export default function Terminal() {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<Line[]>([BANNER]);
  const [value, setValue] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement;
      const typing = el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);
      if (e.key === "`" && !open && !typing) {
        e.preventDefault();
        openTerm();
      }
    };
    const onOpen = () => openTerm();
    document.addEventListener("keydown", onKey);
    window.addEventListener("open-terminal", onOpen);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("open-terminal", onOpen);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 0);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(t);
      document.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [lines, open]);

  const openTerm = () => {
    triggerRef.current = (document.activeElement as HTMLElement) ?? null;
    setOpen(true);
  };
  const close = () => {
    setOpen(false);
    triggerRef.current?.focus?.();
  };
  const push = (line: Line) => setLines((ls) => [...ls, line]);

  const run = (raw: string) => {
    const cmd = raw.trim();
    if (!cmd) {
      push({ cmd: "", out: [] });
      return;
    }
    const [name, ...args] = cmd.split(/\s+/);
    const arg = args.join(" ");

    switch (name) {
      case "help":
        push({
          cmd,
          out: [
            "help · whoami · ls · cd <section> · cat about · cat resume",
            "contact · date · uptime · clear · sudo hire-me",
          ],
        });
        break;
      case "whoami":
        push({ cmd, out: [`${profile.name} — ${profile.role} · ${profile.location}`] });
        break;
      case "ls":
        push({ cmd, out: [SECTIONS.join("   ")] });
        break;
      case "cd": {
        const target = arg.replace(/^\//, "");
        if (target === "home" || target === "") {
          push({ cmd, out: ["→ /"] });
          close();
          router.push("/");
        } else if ((SECTIONS as string[]).includes(target)) {
          push({ cmd, out: [`→ /${target}`] });
          close();
          router.push(pages[target as PageKey].href);
        } else {
          push({ cmd, out: [`cd: no such section: ${arg}`] });
        }
        break;
      }
      case "cat":
        if (arg === "about") push({ cmd, out: about });
        else if (arg === "resume") {
          push({ cmd, out: ["opening résumé…"] });
          window.open(profile.resumeUrl, "_blank", "noopener,noreferrer");
        } else push({ cmd, out: [`cat: ${arg || "missing file"}: No such file`] });
        break;
      case "contact":
        push({
          cmd,
          out: [
            `email:     ${profile.links.email}`,
            `github:    ${profile.links.github}`,
            `linkedin:  ${profile.links.linkedin}`,
            `codeforces:${profile.links.codeforces}`,
          ],
        });
        break;
      case "date":
        push({ cmd, out: [`${istNow()} IST`] });
        break;
      case "uptime":
        push({ cmd, out: [uptimeStr()] });
        break;
      case "clear":
        setLines([BANNER]);
        break;
      case "sudo":
        if (arg === "hire-me") {
          push({ cmd, out: ["Permission granted ✓ Opening mail client…"] });
          window.location.href = `mailto:${profile.links.email}?subject=Let's work together`;
        } else {
          push({ cmd, out: [`sudo: ${arg || ""}: command not found. try \`sudo hire-me\``] });
        }
        break;
      default:
        push({ cmd, out: [`command not found: ${name}. try \`help\``] });
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    run(value);
    setValue("");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[110]" role="presentation">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={close} aria-hidden />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Terminal"
        className="absolute inset-x-0 bottom-0 flex max-h-[70vh] flex-col overflow-hidden rounded-t-xl border border-line bg-card font-mono text-sm sm:inset-x-auto sm:bottom-auto sm:left-1/2 sm:top-24 sm:max-h-[60vh] sm:w-[92vw] sm:max-w-[620px] sm:-translate-x-1/2 sm:rounded-xl"
      >
        <div className="flex items-center justify-between border-b border-line px-4 py-2">
          <span className="meta">shikhar@portfolio: ~</span>
          <button
            type="button"
            onClick={close}
            aria-label="Close terminal"
            className="text-muted hover:text-fg"
          >
            ✕
          </button>
        </div>
        <div ref={bodyRef} className="flex-1 overflow-y-auto px-4 py-3">
          {lines.map((l, i) => (
            <div key={i} className="whitespace-pre-wrap break-words">
              {l.cmd !== undefined && (
                <div className="text-muted">
                  <span className="text-brand">›</span> {l.cmd}
                </div>
              )}
              {l.out.map((o, j) => (
                <div key={j} className="text-fg">
                  {o}
                </div>
              ))}
            </div>
          ))}
        </div>
        <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-line px-4 py-2">
          <span className="text-brand" aria-hidden>
            ›
          </span>
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            aria-label="Terminal input"
            spellCheck={false}
            autoComplete="off"
            className="w-full bg-transparent text-fg outline-none"
          />
          <span className="term-cursor text-brand" aria-hidden>
            ▌
          </span>
        </form>
      </div>
    </div>
  );
}
