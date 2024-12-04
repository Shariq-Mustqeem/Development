/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        custom: "all",
      },
      transitionDuration: {
        custom: "0.5s",
      },
      transitionTimingFunction: {
        custom: "ease",
      },
      transitionDelay: {
        custom: "0s",
      },
      colors: {
        "custom-green": "#2ae90e",
      },
      backgroundColor: {
        "custom-black": "#080808",
        "custom-light-black": "#131313",
        "custom-green": "#2ae90e",
      },
    },
  },
  plugins: [],
};
