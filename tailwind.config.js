/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'heading-lg': '48px', // Large heading size
        'paragraph': '20px',  // Paragraph size
      },
      fontWeight: {
        'light': 300,    // Custom light font weight
        'normal': 500,   // Default normal font weight
        'medium': 500,   // Custom medium font weight
        'semibold': 700, // Custom semibold font weight
      },
      colors: {
        primary: "#000000",
        secondary: "#525367",
        tertery: "#5f5f5f",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      boxShadow: {
        'custom': '3px 4px 7px 0px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}