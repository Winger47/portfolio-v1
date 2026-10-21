"use client";

import { useEffect, useState } from "react";

function parts(d: Date) {
  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(d);
  const date = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(d);
  const hour = Number(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      hour12: false,
    }).format(d)
  );
  return { time, date, hour };
}

function statusFor(h: number) {
  if (h < 7) return "🌙 probably asleep · I'll reply in the morning";
  if (h < 10) return "☕ morning coffee";
  if (h < 19) return "⚡ probably coding";
  return "🔧 shipping side projects";
}

// Live status bar. Renders the clock/status only after mount → no hydration mismatch.
export default function LiveStatus() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const online = (
    <span className="pill text-fg">
      <span className="size-1.5 rounded-full bg-success dot-pulse" aria-hidden />
      ONLINE
    </span>
  );

  if (!now) {
    return (
      <div className="flex flex-wrap items-center gap-2" suppressHydrationWarning>
        {online}
        <span className="pill text-muted">––:––:–– IST</span>
      </div>
    );
  }

  const { time, date, hour } = parts(now);
  return (
    <div className="flex flex-wrap items-center gap-2" suppressHydrationWarning>
      {online}
      <span className="pill text-fg">{time} IST</span>
      <span className="pill text-muted normal-case" style={{ letterSpacing: 0 }}>
        {date}
      </span>
      <span className="pill text-fg normal-case" style={{ letterSpacing: 0 }}>
        {statusFor(hour)}
      </span>
    </div>
  );
}
