/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f", // Dark background
        secondary: "#9333ea", // Purple (replaced #00f6ff with purple)
        dimWhite: "rgba(255, 255, 255, 0.7)", // Semi-transparent white
        dimPurple: "rgba(147, 51, 234, 0.1)", // Semi-transparent purple (replaced dimBlue)
        purple: {
          100: "#f3e8ff", // Light purple
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea", // Main purple
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87", // Dark purple
        },
        gray: {
          800: "#1f2937", // Dark gray for text
          900: "#111827", // Very dark gray
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Custom font
      },
      animation: {
        underline: "underline 0.3s ease-in-out", // Custom underline animation
      },
      keyframes: {
        underline: {
          "0%": { transform: "scaleX(0)" }, // Start with no width
          "100%": { transform: "scaleX(1)" }, // Full width
        },
      },
    },
    screens: {
      xs: "480px", // Extra small devices
      ss: "620px", // Small devices
      sm: "768px", // Small tablets
      md: "1060px", // Medium devices
      lg: "1200px", // Large devices
      xl: "1700px", // Extra large devices
    },
  },
  plugins: [],
};