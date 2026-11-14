import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "600px",
      md: "810px",  // Framer Tablet breakpoint: ebiaht (min-width: 810px)
      lg: "1200px", // Framer Desktop breakpoint: 72rtr7 (min-width: 1200px)
      xl: "1440px", // Framer Desktop Large breakpoint: 193nlgj (min-width: 1440px)
      "2xl": "1920px",
    },
    extend: {
      colors: {
        esper: {
          bg: "#070707",
          surface: "#101010",
          card: "rgba(20, 20, 20, 0.75)",
          gold: "#ffd57e",
          "gold-light": "#ffe8b2",
          "gold-dark": "#b8860b",
          "gold-muted": "rgba(255, 213, 126, 0.7)",
          "gold-border": "rgba(255, 213, 126, 0.2)",
          "gold-border-subtle": "rgba(255, 213, 126, 0.08)",
          text: "#ffffff",
          "text-muted": "rgba(255, 255, 255, 0.75)",
          "text-dim": "rgba(255, 255, 255, 0.5)",
        },
      },
      fontFamily: {
        constantine: ["Constantine", "serif"],
        nebula: ["Nebula", "sans-serif"],
        sans: ["DM Sans", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        instrument: ["Instrument Sans", "sans-serif"],
      },
      boxShadow: {
        "gold-glow": "0 0 25px rgba(255, 213, 126, 0.15)",
        "gold-glow-lg": "0 0 50px rgba(255, 213, 126, 0.25)",
        "gold-glow-sm": "0 0 12px rgba(255, 213, 126, 0.2)",
      },
      letterSpacing: {
        widest: "0.2em",
        eyebrow: "0.22em",
        nav: "0.08em",
        display: "0.02em",
      },
    },
  },
  plugins: [],
};

export default config;
