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
        black: "#000000",
        sectionDarkBg: "#101521",
        primaryYellow: "#FFCC00",
        subtitleGray: "#9FA9AF",
        videoBorderYellow: "#FFAE00",
        bonusSectionOrange: "#FFAE00",
        ctaGreen: "#4CAF50",
        priceFromRed: "#B4341C",
        priceToRed: "#A6200A",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      keyframes: {
        pulse: {
          "0%, 100%": {
            transform: "scale(1)",
            boxShadow: "0 0 0 0 rgba(76, 175, 80, 0.7)",
          },
          "50%": {
            transform: "scale(1.03)",
            boxShadow: "0 0 0 10px rgba(76, 175, 80, 0)",
          },
        },
      },
      animation: {
        pulse: "pulse 2s infinite",
      },
    },
  },
  plugins: [],
};
export default config;