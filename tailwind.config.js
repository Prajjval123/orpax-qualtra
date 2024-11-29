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
        // banner: "url('/assets/banner.png')",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out forwards",
        "fade-in-later": "fadeIn 1.5s ease-in-out forwards",
        slide: "slide 15s linear infinite", // Animation with linear speed and infinite loop
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, // Moves by 50% width
        },
      },
    },
  },
  plugins: [],
};
