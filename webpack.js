// webpack.config.dev.js
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      // serve files from your project root (where index.html lives)
      directory: path.resolve(__dirname, '.'),
    },
    hot: true,
    open: true,
    port: 8080,
  },
});