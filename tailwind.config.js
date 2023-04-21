/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        _blue: {
          400: "#4B5374",
          500: "#383E56",
          600: "#31364B",
        },
        _orange: {
          400: "#F9A826",
          500: "#f7931a",
          600: "#F68B1F",
        },
        _brown: {
          300: "#FAEBE4",
          400: "#EEDAD1",
          500: "#EFCFC1",
          600: "#E7CAC6",
          700: "#D4B5B0",
          800: "#D1A29A",
        },
        _black: {
          400: "#39414E",
          500: "#222831",
          600: "#171D26",
        },
        _white: {
          300: "#F9F9F3",
          400: "#F1F1F1",
          500: "#EAEAE3",
          600: "#E5E5E5",
        },
        _green: {
          400: "#12A1AA",
          500: "#008891",
          600: "#087178",
        },
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        grow: {
          "0%,100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out",
        grow: "grow 200ms ease-in-out",
        fade: "fadein 200ms ease-in-out",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
