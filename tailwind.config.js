/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#222",
      white: "#fff",
      orange: "#EB5017",
      primary: {
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81",
      },
      grey: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
        950: "#0a0a0a",
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Open Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
    },
    extend: {
      backgroundImage: {
        flyer: "url('/src/assets/login-flyer.png')",
      },
      transitionProperty: {
        all: {
          transitionProperty: "áll",
          transitionDuration: "300ms",
          transitionTimingFunction: "ease-in-out",
        },
      },
      transitionDuration: {
        300: "300ms",
      },
      keyframes: {
        bouncee: {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.3)",
          },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        bouncee: "bouncee 2s ease-in-out  infinite",
      },
      width: {
        fixedWidth: "600px",
        fluidWidth: "90vw",
      },
      maxWidth: {
        maxWidth: "1120px",
      },
    },
  },
  plugins: [],
};
