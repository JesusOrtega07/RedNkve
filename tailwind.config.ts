import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "melgar-green": "#22c55e",
        "melgar-green-dark": "#16a34a",
        "melgar-green-light": "#86efac",
        "melgar-navy": "#1E3A5F",
        "melgar-navy-dark": "#0D1B2A",
        "melgar-navy-mid": "#142035",
        "melgar-yellow": "#FACC15",
        "melgar-yellow-dark": "#CA8A04",
        "melgar-sky": "#38BDF8",
        "melgar-sky-dark": "#0284C7",
        "melgar-orange": "#FB923C",
        "melgar-orange-dark": "#EA580C",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
