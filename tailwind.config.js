/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      heading: ["Luckiest Guy", "cursive"],
    },
    extend: {
      keyframes: {
        comeIn: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        comeIn: "comeIn .2s ease-in",
      },
    },
  },
  plugins: [],
};
