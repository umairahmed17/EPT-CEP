/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        vibrate: "vibrate 0.5s linear infinite",
      },
      keyframes: {
        vibrate: {
          "0% 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(2px)" },
        },
      },
    },
  },
  plugins: [],
};
