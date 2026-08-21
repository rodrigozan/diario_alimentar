import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D1117",
        surface: "#1A1D24",
        border: "#2A2E37",
        primary: {
          DEFAULT: "#22C55E",
          foreground: "#0D1117",
        },
        macro: {
          carb: "#FBBF24",
          protein: "#F87171",
          fat: "#60A5FA",
          water: "#38BDF8",
        },
        text: {
          primary: "#F5F5F5",
          secondary: "#9CA3AF",
        },
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        display: ["40px", { lineHeight: "44px", fontWeight: "700" }],
        h1: ["24px", { lineHeight: "30px", fontWeight: "600" }],
        h2: ["18px", { lineHeight: "24px", fontWeight: "600" }],
        body: ["14px", { lineHeight: "20px", fontWeight: "400" }],
        caption: ["12px", { lineHeight: "16px", fontWeight: "500" }],
      },
      borderRadius: {
        card: "16px",
        button: "12px",
        pill: "999px",
      },
      spacing: {
        card: "16px",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(245,245,245,0.03) inset, 0 8px 24px -12px rgba(0,0,0,0.6)",
        fab: "0 10px 30px -8px rgba(34,197,94,0.45)",
      },
      keyframes: {
        "ring-in": {
          "0%": { strokeDashoffset: "var(--ring-circumference)" },
          "100%": { strokeDashoffset: "var(--ring-offset)" },
        },
        "rise": {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "ring-in": "ring-in 1s cubic-bezier(0.16,1,0.3,1) forwards",
        rise: "rise 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
