/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#3a3a3a",
        accent: "#ef0909",
        lightAccent: "#ef09096b",
        extraClr: "#eeee",
        green: "#8DBDA5",
        grey: "#E1E1E1",
        black: "#111",
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
      },
    },
    screens: {
      xx: "1px",
      xs: "400px",
      ss: "600px",
      sm: "800px",
      md: "1000px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
