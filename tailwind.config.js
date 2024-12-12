export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
      },
      colors: {
        primary: "#1f2937",
        secondary: "#4b5563",
      },
      backgroundImage: {
        banner: "url('/assets/For_Developing/Background/Motion_Line.png')",
      },
      animation: {
        popup: "popup 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.8s ease-in-out forwards",
        "fade-in-slow": "fadeIn 1.5s ease-in-out forwards",
        "slide-left": "slideLeft 1s ease-in-out forwards",
        "slide-right": "slideRight 1s ease-in-out forwards",
        "bounce": "bounce 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards",
        spin: "spin 1s linear infinite",
        "zoom-in": "zoomIn 0.8s ease-out forwards",
        slide: "slide 30s linear infinite", // added this line
      },
      keyframes: {
        popup: {
          "0%": { opacity: 0, transform: "scale(0.8)" },
          "60%": { opacity: 1, transform: "scale(1.1)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        zoomIn: {
          "0%": { transform: "scale(0.5)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
