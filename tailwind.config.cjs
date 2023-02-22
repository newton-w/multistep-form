/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage : {
        mobileBg : "url('/src/images/bg-sidebar-mobile.svg')",
        desktopBg : "url('/src/images/bg-sidebar-desktop.svg')",
      }
    },
    colors: {
      // primary
      Marineblue: "hsl(213, 96%, 18%)",
      Purplishblue: "hsl(243, 100%, 62%)",
      Pastelblue: "hsl(228, 100%, 84%)",
      Lightblue: "hsl(206, 94%, 87%)",
      Strawberryred: "hsl(354, 84%, 57%)",

      // Neutral
      Coolgray: "hsl(231, 11%, 63%)",
      Magnolia: "hsl(217, 100%, 97%)",
      Alabaster: "hsl(231, 100%, 99%)",
      White: "hsl(0, 0%, 100%)",
    },
    fontFamily : {
      ubuntu : "'Ubuntu', sans-serif",
    }
  },
  plugins: [],
};

