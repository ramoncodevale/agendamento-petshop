/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
    fontFamily: {
    inter: ['Inter', 'sans-serif'],
    grotesk: ['"Familjen Grotesk"', 'sans-serif'],
    },
    },
  },
  plugins: [],
}
