const { def } = require('@vue/shared')
const defaultTheme = require('tailwindcss/defaultTheme')

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}


/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["Fraunces", "serif", ...defaultTheme.fontFamily.serif],
        serif:  [ "serif", ...defaultTheme.fontFamily.serif],
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: withOpacityValue("--main-light-color"),
        accent:  withOpacityValue("--main-accent-color")
        // ...
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
