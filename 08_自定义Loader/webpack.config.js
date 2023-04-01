const path = require('path');

const myLoader = require('./my-loader');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.js/i,
        use: 'index'
      }
    ]
  },
  resolveLoader: {
    modules: ['node_modules', './my-loader']
  }
};
