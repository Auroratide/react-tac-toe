const path = require('path');

module.exports = {
  name: 'client',
  mode: 'production',
  entry: path.join(__dirname, 'src', 'client.jsx'),
  output: {
    filename: 'client.js',
    path: path.join(__dirname, 'public')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [ {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    } ]
  }
};