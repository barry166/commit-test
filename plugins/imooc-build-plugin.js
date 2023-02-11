module.exports = function(api, params) {
  console.log('imooc-build-plugin', process.cwd());
  const { getWebpackConfig } = api
  const config = getWebpackConfig()
  config
  // Interact with entry points
  .entry('index')
    .add('src/index.js')
    .end()
  // Modify output settings
  .output
    .path('dist')
    .filename('[name].bundle.js');
}

