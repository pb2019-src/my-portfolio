const path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'

  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_componenets)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['react'],
        }
      }
    }]
  }
}
