/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: {
          "100": "#f7f7f8",
          "200": "#eeeef0",
          "300": "rgba(238, 238, 240, 0.5)",
        },
        slategray: "#5d647b",
        gray: {
          "100": "#212529",
          "200": "#192033",
          "300": "#18191b",
          "400": "rgba(24, 25, 27, 0.5)",
          "500": "rgba(124, 124, 124, 0.3)",
        },
        dimgray: "#5c5e65",
        darkgray: "#a5a7ad",
        coral: "#ff7434",
        black: "#000",
        antiquewhite: "#fff1dd",
        lightslategray: "#9094a5",
        dodgerblue: "#0098fd",
        cornflowerblue: "#008deb",
        palevioletred: "#ba5473",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
        mini: "15px",
        "6xs": "7px",
        "5xs-2": "7.2px",
      },
    },
    fontSize: {
      smi: "0.813rem",
      mini: "0.938rem",
      lgi: "1.188rem",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
