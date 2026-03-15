import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Noto Sans SC", "sans-serif"],
        chinese: ["Noto Sans SC", "sans-serif"],
      },
      colors: {
        spain: {
          red: "#c60b1e",
          gold: "#ffc400",
          dark: "#1a0a00",
          cream: "#fdf6e3",
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
