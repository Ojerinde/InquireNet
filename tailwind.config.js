/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2c3e50",
        primary_light: "#44607c",
        primary_dark: "#141c24",
        secondary: "#d8e1e3",
        secondary_light: "#ecf0f1",
        secondary_dark: "#bbc9cd",
      },
      boxShadow: {
        dark: "0 2rem 6rem rgba(0, 0, 0, 0.3)",
        light: "0 2rem 5rem rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
