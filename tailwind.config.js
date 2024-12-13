/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#5A5959",
        red: "#D01C28",
        yellow: "#DAF7A6",
        "dark-yellow": "#f1c40f",
        orange: "#f58d0f",
      },
    },
  },
  "plugins": ["prettier-plugin-tailwindcss"]
}