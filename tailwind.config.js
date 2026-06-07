/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["var(--font-pacifico)", "cursive"],
        script: ["var(--font-dancing)", "cursive"],
        comic: ['"Comic Sans MS"', '"Comic Sans"', "cursive"],
      },
      colors: {
        crimson: "#DC143C",
        hotpink: "#FF69B4",
      },
      keyframes: {
        jiggle: {
          "0%, 100%": { transform: "rotate(-3deg) scale(1)" },
          "25%": { transform: "rotate(3deg) scale(1.05)" },
          "50%": { transform: "rotate(-2deg) scale(0.98)" },
          "75%": { transform: "rotate(2deg) scale(1.04)" },
        },
        floatUp: {
          "0%": { transform: "translateY(0) scale(0.6)", opacity: "1" },
          "100%": { transform: "translateY(-160px) scale(1.4)", opacity: "0" },
        },
      },
      animation: {
        jiggle: "jiggle 0.4s ease-in-out infinite",
        floatUp: "floatUp 1.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};
