/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      NotoSans: ["Noto Sans", "sans-serif"],
    },
    extend: {
      colors: {
        veryDarkBlue: "hsl(237, 43%, 10%)",
        darkBlue: "hsl(232, 41%, 18%)",
        blue: "hsl(225, 87%, 62%)",
        orange: "hsl(33, 89%, 53%)",
        silver: "hsl(0, 0%, 95%)",
      },
    },
  },
  plugins: [],
};
