const path = require('path')

module.exports = function (api) {
  console.log('222 spack.react.plugin')
  const dir = process.cwd()
  const config = api.getWebpackConfig()

  config.module
    .rule('react')
    .test(/\.(js|jsx)$/)
    .exclude.add(/node_modules/)
    .end()
    .use('babel-loader')
    .loader('babel-loader')
    .options({
      presets: ['@babel/preset-env', '@babel/preset-react'],
    })
}
