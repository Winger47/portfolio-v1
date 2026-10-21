"use client";

import { useEffect, useState } from "react";
import { getTheme, toggleTheme, type Theme } from "@/lib/theme";
import { SunIcon, MoonIcon } from "./icons";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(getTheme());
    const onChange = (e: Event) => setTheme((e as CustomEvent).detail as Theme);
    window.addEventListener("themechange", onChange);
    return () => window.removeEventListener("themechange", onChange);
  }, []);

  return (
    <button
      type="button"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      onClick={() => setTheme(toggleTheme())}
      className="inline-flex size-8 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-fg/30 hover:text-fg"
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
