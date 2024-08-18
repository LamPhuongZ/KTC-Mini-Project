/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#f62682",
        secondary: "#6f5cf1",
        third: "#ffb86c",
        four: "#0f172a",
        "custom-primary": "#737373",
      },
      backgroundImage: {
        "primary-gradient": `linear-gradient(
          86.88deg,
          #7d6aff 1.38%,
          #ffb86c 64.35%,
          #fc2872 119.91%
        )`,
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
};
