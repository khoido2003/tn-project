/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@spartan-ng/ui-core/hlm-tailwind-preset")],
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#04594D",
        secondary: "#009C86",
        tertiary: "#2B9A00",
      },
    },
  },
  plugins: [],
};
