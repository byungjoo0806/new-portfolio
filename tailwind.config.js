/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
      extend: {
        fontFamily: {
          roboto: ["RobotoMono"],
        },
        keyframes: {
          fade: {
            "0%, 100%" : {opacity: "0"},
            "50%" : {opacity: "1"}
          }
        },
        animation: {
          fade: "fade 2s ease-in-out infinite"
        },
        animationDelay: {
          '2s': '2s',
        },
      },
  },
  plugins: [],
}

