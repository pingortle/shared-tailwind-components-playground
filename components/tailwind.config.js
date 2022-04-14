module.exports = {
  content: ['./src/*.{html,js}'],
  prefix: 'lape-',
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [
    require('./src/tailwind-styles.js')
  ]
  // corePlugins: {
  //   preflight: false
  // }
}
