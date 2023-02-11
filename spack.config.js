module.exports =  {
  entry: 'src/index.js',
  plugins: function() {
    return [
      // "build-test",
      "./plugins/spack.react.plugin.js",
      function(api, options) {
        console.log('this is anonymous plugin', options);
      },
    ];
  },
  hooks: [
    ['start', (context) => {
      console.log('start hook');
    }],
    ['plugin', (context) => {
      console.log('testHook', context.webpackConfig?.toConfig());
    }],
  ],
};
