/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rancho': "'Rancho', cursive",
        'raleway': "'Rancho', cursive",
      },
      colors: {
        "pale-gray": "#ECEAE3",
        "light-gray": "#F4F3F0",
        "slate-gray": '#374151',
        "deep-midnight": "#331A15",
        "light-golden": "#D2B48C",
        "bright-red": "#E64942",
      }
    },
  },
  plugins: [require("daisyui")],
}