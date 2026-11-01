/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#edf1f0",
        ink: "#12203a",
        muted: "#4a5870",
        blue: "#2748e8",
        amber: "#f2a900",
        grid: "#d5dedc",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', '"Segoe UI"', "system-ui", "sans-serif"],
        body: ['"Instrument Sans"', '"Segoe UI"', "system-ui", "sans-serif"],
      },
      keyframes: {
        pulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(39, 72, 232, 0.5)" },
          "50%": { boxShadow: "0 0 0 8px rgba(39, 72, 232, 0)" },
        },
      },
      animation: {
        pulse: "pulse 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
