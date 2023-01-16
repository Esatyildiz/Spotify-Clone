
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        backdrop: '#121212',
        primary: '#1db954',
        active: '#282828',
        link: '#b3b3b3',
        footer: '#181818'
      },
      backgroundImage: {
        'heart-gradient': 'linear-gradient(135deg,#450af5,#c4efd9);',
      },
      fontSize: {
        s: '0.813rem',
      },
      boxShadow: {
        'Play-btn-shadow': '0 8px 8px rgb(0 0 0 / 30%);',
        'spotify': '0 2px 4px 0 rgb(0 0 0 / 20%);'
      },

    },
  },

  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
