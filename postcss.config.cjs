module.exports = {
  plugins: [
    require('postcss-rtlcss')({ source: 'rtl'  }) // <<<< in "plugins"
  ]
}