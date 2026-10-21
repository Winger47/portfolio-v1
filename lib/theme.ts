// Shared theme helpers. The actual initial theme is set pre-paint by the inline
// script in app/layout.tsx; these run only in event handlers / effects.
export type Theme = "light" | "dark";

export function getTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return (document.documentElement.getAttribute("data-theme") as Theme) || "dark";
}

export function applyTheme(t: Theme) {
  document.documentElement.setAttribute("data-theme", t);
  try {
    localStorage.setItem("theme", t);
  } catch {
    /* storage unavailable (private mode, blocked) — theme still applies for the session */
  }
}

export function toggleTheme(): Theme {
  const next: Theme = getTheme() === "dark" ? "light" : "dark";
  applyTheme(next);
  window.dispatchEvent(new CustomEvent("themechange", { detail: next }));
  return next;
}
