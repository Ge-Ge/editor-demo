const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');


module.exports = {
  devServer: {
    proxy: {
      '/mock': {
        target: 'http://yapi.demo.qunar.com',
      },
      '/api': {
        target: 'https://api.github.com',
        ws: false,
        changeOrigin: true,
      },
    },
  },
  chainWebpack: (config) => {
    // 添加插件
    config.plugin('monaco').use(MonacoWebpackPlugin, [{
      languages: ['markdown'],
      features: ['coreCommands', 'find'],
    }]);
  },
  pages: {
    index: {
      // page 的入口
      entry: 'example/main.js',
    },
  },
  css: {
    loaderOptions: {
      less: {
        // javascriptEnabled: true // old solution
        // HERE is the difference!
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
};
