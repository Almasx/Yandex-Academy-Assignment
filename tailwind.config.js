/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#0B0B0B",
      transparent: "transparent",
      stroke: {
        100: "#1B1B1B",
        200: "#1F1F1F",
      },
      surface: "#DCDCFF",
    },
    extend: {
      fontFamily: {
        sans: ["SF Pro Display", "sans-serif"],
        content: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        pfp: "url('./assets/images/pfp.png')",
      },
      opacity: {
        66: ".66",
        33: ".33",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee3: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        marquee4: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      animation: {
        "marquee-infinite": "marquee 15s linear infinite",
        "marquee-infinite2": "marquee2 15s linear infinite",
        "marquee-infinite3": "marquee3 60s linear infinite",
        "marquee-infinite4": "marquee4 60s linear infinite",
        rotation: "rotate 10s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-text-fill-stroke")()],
};
