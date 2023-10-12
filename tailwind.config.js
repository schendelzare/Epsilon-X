/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: "Inter",
      permanent: "Permanent Marker",
    },

    extend: {
      backgroundImage: {
        "my-bg": "url('assets/myAssets/hb.png')",
      },
      screens: {
        fs: "1920px",
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
