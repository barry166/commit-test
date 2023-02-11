const path = require('path')

module.exports = {
  entry: './src/index-origin.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('webpack_dist')
  }
}