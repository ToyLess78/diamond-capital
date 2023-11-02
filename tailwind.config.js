/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    height: {
      main: 'calc(100vh - 45px)',
      screen: '100vh',
      auto: 'auto',
    },
    colors: {
      light: {
        '0': '#fafafa',
        '1': '#D0D0D0',
        '2': 'rgba(255, 255, 255, 0.60)',
        '3': 'rgba(255, 255, 255, 0.08)',
      },
      dark: {
        '0': '#191A1E',
        '1': '#121419',
        '2': '#1B1F27',
        '3': '#181A22',
      },
    },

    extend: {

    },
  },
  plugins: [],
  variants: {
    extend: {
      fontWeight: ['hover'],
    }
  }
}

