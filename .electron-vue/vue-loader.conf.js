const { generateCssLoader } = require('./utils')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: generateCssLoader({
    extract: isProduction
  })
}