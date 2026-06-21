import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0F1330",
        "navy-soft": "#161B3F",
        blue: "#1E3ABA",
        "blue-deep": "#172A8A",
        orange: "#FF5722",
        "orange-soft": "#FF7A4D",
        ivory: "#FFFFFF",
        line: "rgba(255,255,255,0.08)",
        "line-dark": "rgba(15,19,48,0.08)",
      },
      fontFamily: {
        sans: ["var(--font-satoshi)", "system-ui", "sans-serif"],
        display: ["var(--font-general-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument)", "Georgia", "serif"],
      },
      fontSize: {
        hero: ["clamp(48px, 7vw, 84px)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        display: ["clamp(36px, 4.5vw, 60px)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        eyebrow: ["12px", { lineHeight: "1", letterSpacing: "0.18em" }],
      },
      spacing: {
        section: "160px",
        "section-sm": "120px",
      },
      maxWidth: {
        content: "1200px",
        wide: "1440px",
      },
      borderRadius: {
        "2xl": "28px",
        "3xl": "32px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,19,48,0.04), 0 12px 40px -12px rgba(15,19,48,0.12)",
        "card-dark": "0 1px 2px rgba(0,0,0,0.4), 0 24px 60px -20px rgba(0,0,0,0.6)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
