import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0C10",
        surface: "#12151C",
        surface2: "#1A1E27",
        line: "#232936",
        ink: "#E7E3D8",
        muted: "#8A92A3",
        amber: "#FFB454",
        "amber-dim": "rgba(255,180,84,0.12)",
        live: "#5EC8A8",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1080px",
      },
    },
  },
  plugins: [],
};

export default config;
