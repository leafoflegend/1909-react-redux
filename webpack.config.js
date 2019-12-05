const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: path.join(__dirname, './client/index.js'),
  module: {
    rules: [
      {
        exclude: /node_modules/,
        use: 'babel-loader'
      },
    ]
  }
};
