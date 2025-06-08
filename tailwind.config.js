/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", "sans-serif"],
        cinzel: ['"Cinzel Decorative"', "cursive"],
      },
      colors: {
        primary: "#3a3a3c",
        background: "#141414",
        customDarkBlue: "#1e252d",
      },
      animation: {
        spinSlow: "spin 10s linear infinite",
      },
      keyframes: {
        "slide-fade-in": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "slide-fade-in": "slide-fade-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
