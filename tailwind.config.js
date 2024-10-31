/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        "main-bg": "#222831",
        "main-bg-2": "#31363F",
        "main-sc-dark": "#5D5A88",
        "main-sc-light": "#ADABC3",
        "main-black": "#000000",
        "main-black-semi": "#000000AF",
        "main-white": "#EEEEEE",
      },
      height: {
        "screen/2": "50vh",
        "screen-65": "65vh",
      },
    },
    // screens: {
    //   lg: "1195px",
    // },
  },
  plugins: [flowbite.plugin(), require("daisyui")],
};
