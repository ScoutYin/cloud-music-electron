// Author: ScoutYin

const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const resolveScssResouce = (name) => {
  return path.join(__dirname, '../src/renderer/assets/scss', name)
}


const generateloadersForScss = () => {
  const loaders = [
    'css-loader', 
    'sass-loader',
    {
      loader: 'sass-resources-loader',
      options: {
        // it need a absolute path
        resources: [resolveScssResouce('var.scss'), resolveScssResouce('global.scss')]
      }
    }
  ]
  return loaders
}

const generateScssLoader = (options) => {
  const loaders = generateloadersForScss()
  if (options.extract) {
    return new ExtractTextPlugin({
      use: loaders,
      fallback: 'vue-style-loader'
    })
  } else {
    return ['vue-style-loader'].concat(loaders)
  }
}

exports.generateCssLoader = (options) => {
  return {
    sass: generateScssLoader(options),
    scss: generateScssLoader(options)
  }
}