"use client";

import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { profile, pages, type PageKey } from "@/content";
import { toggleTheme } from "@/lib/theme";

const NAV: { key: "home" | PageKey; label: string; href: string }[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "projects", label: pages.projects.title, href: pages.projects.href },
  { key: "experience", label: pages.experience.title, href: pages.experience.href },
  { key: "skills", label: pages.skills.title, href: pages.skills.href },
  { key: "dsa", label: pages.dsa.title, href: pages.dsa.href },
  { key: "activity", label: pages.activity.title, href: pages.activity.href },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const onToggle = () => setOpen((o) => !o);
    document.addEventListener("keydown", onKey);
    window.addEventListener("toggle-command-palette", onToggle);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("toggle-command-palette", onToggle);
    };
  }, []);

  const run = (fn: () => void) => {
    setOpen(false);
    fn();
  };
  const go = (href: string) => run(() => router.push(href));
  const openUrl = (url: string) =>
    run(() => window.open(url, "_blank", "noopener,noreferrer"));
  const downloadResume = () =>
    run(() => {
      const a = document.createElement("a");
      a.href = profile.resumeUrl;
      a.download = "";
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
  const viewSkills = () => run(() => window.dispatchEvent(new Event("open-skills")));
  const copyEmail = () =>
    run(() => {
      if (navigator.clipboard) navigator.clipboard.writeText(profile.links.email).catch(() => {});
    });

  const item =
    "flex cursor-pointer items-center justify-between gap-3 rounded px-3 py-2 text-sm text-fg data-[selected=true]:bg-accent/30";
  const kbd = "font-mono text-[11px] text-muted";

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command menu"
      overlayClassName="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
      contentClassName="fixed left-1/2 top-24 z-[101] w-[92vw] max-w-[520px] -translate-x-1/2 overflow-hidden rounded-md border border-line bg-card shadow-xl"
    >
      <Command.Input
        placeholder="Type a command or search…"
        className="w-full border-b border-line bg-transparent px-4 py-3 text-sm text-fg outline-none placeholder:text-muted"
      />
      <Command.List className="max-h-[320px] overflow-y-auto p-2">
        <Command.Empty className="px-3 py-6 text-center text-sm text-muted">
          No results found.
        </Command.Empty>

        <Command.Group heading="Go to">
          {NAV.map((n) => (
            <Command.Item key={n.key} value={`go ${n.label}`} onSelect={() => go(n.href)} className={item}>
              <span>{n.label}</span>
              <span className={kbd}>↵</span>
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group heading="Links">
          <Command.Item value="github" onSelect={() => openUrl(profile.links.github)} className={item}>
            GitHub <span className={kbd}>↗</span>
          </Command.Item>
          <Command.Item value="linkedin" onSelect={() => openUrl(profile.links.linkedin)} className={item}>
            LinkedIn <span className={kbd}>↗</span>
          </Command.Item>
          <Command.Item value="codeforces" onSelect={() => openUrl(profile.links.codeforces)} className={item}>
            Codeforces <span className={kbd}>↗</span>
          </Command.Item>
          <Command.Item value="open resume" onSelect={() => openUrl(profile.resumeUrl)} className={item}>
            Open résumé <span className={kbd}>↗</span>
          </Command.Item>
          <Command.Item value="download resume" onSelect={downloadResume} className={item}>
            Download résumé <span className={kbd}>↓</span>
          </Command.Item>
        </Command.Group>

        <Command.Group heading="Actions">
          <Command.Item value="view all skills" onSelect={viewSkills} className={item}>
            View all skills <span className={kbd}>↵</span>
          </Command.Item>
          <Command.Item value="copy email" onSelect={copyEmail} className={item}>
            Copy email <span className={kbd}>{profile.links.email}</span>
          </Command.Item>
          <Command.Item value="toggle theme" onSelect={() => run(() => toggleTheme())} className={item}>
            Toggle theme <span className={kbd}>light / dark</span>
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}
