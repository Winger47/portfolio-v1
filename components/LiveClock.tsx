"use client";

import { useEffect, useState } from "react";

const fmt = () =>
  new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());

// Ticking IST clock. Renders a placeholder until mounted → no hydration mismatch.
export default function LiveClock({ className = "" }: { className?: string }) {
  const [t, setT] = useState<string | null>(null);
  useEffect(() => {
    setT(fmt());
    const id = window.setInterval(() => setT(fmt()), 1000);
    return () => window.clearInterval(id);
  }, []);
  return (
    <span className={className} suppressHydrationWarning>
      {t ?? "––:––:––"} IST
    </span>
  );
}
