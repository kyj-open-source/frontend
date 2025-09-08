import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // This ensures Tailwind scans all relevant files
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: "oklch(74% 0.13 190)",
        "theme-l": "oklch(82% 0.14 190)",
        "theme-d": "oklch(65% 0.12 190)",
        accent: "oklch(25% 0.06 230)",
      },
    },
  },
  plugins: [],
};
export default config;
