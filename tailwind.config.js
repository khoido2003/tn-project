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
      aspectRatio: {
        "4/5": "4 / 5",
      },
      gridTemplateColumns: {
        news: "repeat(9, minmax(376px, 1fr));",
      },
    },
  },
  plugins: [],
};
