/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#f3faf7",
        text: "#0f172a",
        primary: "#38bdf8",
        secondary: "#34d399",
      },
    },
  },
  plugins: [],
}
