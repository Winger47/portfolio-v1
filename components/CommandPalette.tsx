"use client";

import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { profile, sections } from "@/content";
import { toggleTheme } from "@/lib/theme";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);

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
  const go = (id: string) =>
    run(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }));
  const openUrl = (url: string) =>
    run(() => window.open(url, "_blank", "noopener,noreferrer"));
  const copyEmail = () =>
    run(() => navigator.clipboard?.writeText(profile.links.email).catch(() => {}));

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

        <Command.Group heading="Navigate">
          {sections.map((s) => (
            <Command.Item key={s.id} value={`go ${s.label}`} onSelect={() => go(s.id)} className={item}>
              <span>{s.label.replace(/^\d+\s*—\s*/, "")}</span>
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
          <Command.Item value="resume" onSelect={() => openUrl(profile.resumeUrl)} className={item}>
            Résumé <span className={kbd}>↗</span>
          </Command.Item>
        </Command.Group>

        <Command.Group heading="Actions">
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
