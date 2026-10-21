"use client";

import { useEffect, useRef, useState } from "react";
import SkillsView from "./SkillsView";

export default function SkillsDialog() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onOpen = () => {
      triggerRef.current = (document.activeElement as HTMLElement) ?? null;
      setOpen(true);
    };
    window.addEventListener("open-skills", onOpen);
    return () => window.removeEventListener("open-skills", onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "Tab") {
        trapFocus(e);
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(
      () => dialogRef.current?.querySelector<HTMLInputElement>("input")?.focus(),
      0
    );
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      window.clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const close = () => {
    setOpen(false);
    triggerRef.current?.focus?.();
  };

  const trapFocus = (e: KeyboardEvent) => {
    const root = dialogRef.current;
    if (!root) return;
    const f = root.querySelectorAll<HTMLElement>(
      'a[href],button:not([disabled]),input,[tabindex]:not([tabindex="-1"])'
    );
    if (f.length === 0) return;
    const first = f[0];
    const last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90]" role="presentation">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={close} aria-hidden />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Skills"
        className="absolute inset-x-0 bottom-0 flex max-h-[85vh] flex-col overflow-hidden rounded-t-xl border border-line bg-card p-5 sm:inset-x-auto sm:bottom-auto sm:left-1/2 sm:top-20 sm:max-h-[80vh] sm:w-[92vw] sm:max-w-[560px] sm:-translate-x-1/2 sm:rounded-xl"
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-2xl leading-none">Skills</h2>
          <button
            type="button"
            onClick={close}
            aria-label="Close skills"
            className="inline-flex size-8 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-fg/30 hover:text-fg"
          >
            ✕
          </button>
        </div>
        <SkillsView />
      </div>
    </div>
  );
}
