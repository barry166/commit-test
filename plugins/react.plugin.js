module.exports = function(api, params) {
  console.log('react plugin ... 1')
  const dir = process.cwd()
  const { getWebpackConfig } = api
  const config = getWebpackConfig()
  config
  .entry('index')
    .add('src/index.js')
    .end()
  .output
    .path('dist')
    .filename('[name].bundle.js');
}


