/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        navbar: "var(--navbar--height)",
      },
      inset: {
        navbar: "var(--navbar--height)",
      },
      fontFamily: {
        manrope: ["Manrope", "Roboto"],
      },
    },
    animation: {
      rightToLeft: "rightToLeft 1.5s ease-in-out ",
      leftToRight: "leftToRight 1.5s ease-in-out",
      underlineNavItem: "fullWidth 150ms ease-in-out forwards",
      loadOpacity: "loadOpacity 400ms cubic-bezier(.42,-0.01,.47,1) forwards",
      scaleProjectGallery:
        "appearWithScale 400ms cubic-bezier(.42,-0.01,.47,1) forwards",
    },
    keyframes: {
      appearWithScale: {
        "0%": { opacity: 0, transform: "scale(0.8)" },
        "100%": { opacity: 100, transform: "scale(1)" },
      },
      appearWithOpacity: {
        "0%": { opacity: 0 },
        "50% , 100%": { opacity: 100 },
      },
      wiggle: {
        "0%, 100%": { transform: "rotate(-3deg)" },
        "50%": { transform: "rotate(3deg)" },
      },
      fullWidth: {
        "0%": { width: "0px" },
        "100%": { width: "100%" },
      },
      loadOpacity: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
    },
  },
  plugins: [],
};
