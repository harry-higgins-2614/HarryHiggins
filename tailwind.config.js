const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    extend: {
      colors: {
        primaryPurple: '#C38D9E',
        primaryTeal: '#41B3A3',
        primaryBlue: '#85DCB7',
        primaryOrange: '#E8A87C'
      },
      fontFamily: {
        sans: ['Jost', ...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif]
      },
      spacing: {
        7: '1.75rem',
        9: '2.25rem',
        28: '7rem',
        80: '20rem',
        96: '24rem'
      },
      height: {
        '1/2': '50%'
      },
      scale: {
        30: '.3'
      },
      boxShadow: {
        outline: '0 0 0 3px rgba(101, 31, 255, 0.4)'
      }
    }
  },
  plugins: []
}
