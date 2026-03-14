/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#af25f4",
        "accent-pink": "#f425b4",
        "accent-orange": "#f47a25",
        "background-light": "#f7f5f8",
        "background-dark": "#1c1022",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "1rem", 
        "lg": "2rem", 
        "xl": "3rem", 
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
