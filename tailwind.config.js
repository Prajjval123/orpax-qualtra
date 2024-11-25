module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f2937",
        secondary: "#4b5563",
      },
      backgroundImage: {
        banner: "url('/assets/banner.png')",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out forwards",
        "fade-in-later": "fadeIn 1.5s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
