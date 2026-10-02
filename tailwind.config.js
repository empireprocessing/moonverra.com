/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        night: {
          50: "#f4f5fb",
          100: "#e6e8f6",
          200: "#c9cdeb",
          300: "#a3aadc",
          400: "#767fc9",
          500: "#555fb6",
          600: "#434a9a",
          700: "#383d7d",
          800: "#2c2f5e",
          900: "#1c1e3f",
          950: "#101129",
        },
        lavender: {
          50: "#faf8fe",
          100: "#f3eefc",
          200: "#e7dcfa",
          300: "#d4c0f4",
          400: "#bb98eb",
          500: "#a373e0",
          600: "#8d54cf",
        },
        amber: {
          400: "#f5c86b",
          500: "#eab04a",
          600: "#d99932",
        },
      },
      fontFamily: {
        serif: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
