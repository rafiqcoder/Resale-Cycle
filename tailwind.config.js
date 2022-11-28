/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        teethcares: {
          primary: "#FF5733",
          secondary: "#FFC300",
          success: "#FF5733",

          accent: "#3A4256",
          "base-100": "#FFFBF7",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}