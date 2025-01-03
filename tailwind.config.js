const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Bitter: ["Bitter", "serif"],
        Roboto: ["Roboto", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
      },
     
    },
  },
  plugins: [flowbite.plugin()],
};
