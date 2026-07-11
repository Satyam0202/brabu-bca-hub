/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: { soft: "0 10px 30px -12px rgba(15, 23, 42, 0.18)" },
      keyframes: { rise: { "0%": { opacity: "0", transform: "translateY(12px)" }, "100%": { opacity: "1", transform: "translateY(0)" } } },
      animation: { rise: "rise .5s ease-out both" },
    },
  },
  plugins: [],
};
