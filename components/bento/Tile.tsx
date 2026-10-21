"use client";

import Link from "next/link";
import { useRef } from "react";

// Interactive bento tile: hue corner-glow + cursor spotlight (desktop) + hover lift
// + load-stagger fade-up. Full-card <Link> when `href` is set, else a plain card
// (use `titleHref` so the title still links out).
export default function Tile({
  href,
  hue,
  span,
  mono,
  title,
  titleHref,
  delay = 0,
  children,
  label,
}: {
  href?: string;
  hue: string;
  span: string;
  mono: string;
  title: string;
  titleHref?: string;
  delay?: number;
  children: React.ReactNode;
  label?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const inner = (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full blur-2xl"
        style={{
          background: `radial-gradient(circle, color-mix(in srgb, ${hue} 45%, transparent), transparent 70%)`,
          opacity: 0.2,
        }}
      />
      <span
        aria-hidden
        className="tile-spot pointer-events-none absolute inset-0 hidden opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:block"
        style={{
          background: `radial-gradient(180px circle at var(--mx, 50%) var(--my, 0%), color-mix(in srgb, ${hue} 16%, transparent), transparent 70%)`,
        }}
      />
      <div className="relative flex h-full flex-col p-4">
        <div className="meta" style={{ color: hue }}>
          {mono}
        </div>
        {titleHref ? (
          <Link
            href={titleHref}
            className="mt-1 font-display text-xl leading-none underline-offset-2 hover:underline"
          >
            {title}
          </Link>
        ) : (
          <h3 className="mt-1 font-display text-xl leading-none">{title}</h3>
        )}
        {children}
      </div>
    </>
  );

  const common = `tile tile-in card group relative block h-full w-full overflow-hidden ${span}`;
  const style = {
    ["--hue" as string]: hue,
    animationDelay: `${delay}ms`,
  } as React.CSSProperties;

  if (href) {
    return (
      <Link
        href={href}
        aria-label={label ?? title}
        ref={ref as unknown as React.Ref<HTMLAnchorElement>}
        onMouseMove={onMove}
        className={common}
        style={style}
      >
        {inner}
      </Link>
    );
  }
  return (
    <div ref={ref} onMouseMove={onMove} className={common} style={style}>
      {inner}
    </div>
  );
}

export function ViewArrow({ hue }: { hue: string }) {
  return (
    <div className="mt-3 flex justify-end">
      <span className="meta inline-flex items-center gap-1 normal-case" style={{ color: hue }}>
        View
        <span aria-hidden className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </div>
  );
}
