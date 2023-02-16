/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        playfair: ["Playfair Display"],
        yrsa: ["yrsa"]
      },
      backgroundImage: {
        index: "url('/background.png')",
        "index-50": "url(/background-50.png)",
        "index-75": "url(/background-75.png)",
      },
    },
  },
  plugins: [],
};
