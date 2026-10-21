import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // All tokens resolve to CSS variables (RGB triplets) in globals.css so
        // `/opacity` modifiers work and the palette flips in one place.
        // `line` maps to --border (avoids clashing with the `border` utility).
        bg: "rgb(var(--bg) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        line: "rgb(var(--border) / <alpha-value>)",
        lineStrong: "rgb(var(--border-strong) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        brand: "rgb(var(--brand) / <alpha-value>)",
        brand2: "rgb(var(--brand-2) / <alpha-value>)",
        accent: "rgb(var(--brand) / <alpha-value>)",
        accentSoft: "rgb(var(--accent-soft) / <alpha-value>)",
        accentInk: "rgb(var(--accent-ink) / <alpha-value>)",
        success: "rgb(var(--success) / <alpha-value>)",
        successSoft: "rgb(var(--success-soft) / <alpha-value>)",
        warning: "rgb(var(--warning) / <alpha-value>)",
        warningSoft: "rgb(var(--warning-soft) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        md: "8px",
        lg: "8px",
      },
    },
  },
  plugins: [],
};

export default config;
