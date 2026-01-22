import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#2d4a3e",
        accent: "#d4873b",
        cream: "#f3ead7",
      },
    },
  },
  plugins: [],
};

export default config;
