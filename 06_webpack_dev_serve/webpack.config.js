const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: []
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出'
    })
  ],
  optimization: {
    runtimeChunk: 'single'
  },
  mode: 'development'
};
