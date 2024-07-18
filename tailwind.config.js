/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: { navy: "#111111" },
      animation: {
        fade: "fadeIn .5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      aspectRatio: { poster: "1/1.3" },
      transitionProperty: {
        top: "top",
      },
    },
  },
  plugins: [],
};
