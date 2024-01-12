/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          seq: "#0F1527",
        },
        red: {
          primary: "rgb(186, 73, 73)",
        },
      },
    },
  },
  plugins: [],
};
