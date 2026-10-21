"use client";

import { useEffect, useState } from "react";

// y/m/d since the first prod deploy (1 Jul 2024 IST).
function since() {
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
  return `${y}y ${m}m ${d}d`;
}

export default function Uptime() {
  const [s, setS] = useState<string | null>(null);
  useEffect(() => {
    setS(since());
    const id = window.setInterval(() => setS(since()), 60000);
    return () => window.clearInterval(id);
  }, []);
  return (
    <span suppressHydrationWarning>
      uptime: {s ?? "—"} · since first prod deploy, Jul 2024
    </span>
  );
}
