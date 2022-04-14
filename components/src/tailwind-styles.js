const plugin = require('tailwindcss/plugin')

module.exports = plugin(
  function ({ addUtilities, addComponents, e, prefix, config }) {
    // Add your custom styles here
  },
  {
    theme: {
      colors: {
        blue500: '#00498d'
      }
    }
  }
)
