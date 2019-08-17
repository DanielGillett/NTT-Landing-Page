const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: "node",
  mode: 'production',
  entry: {
    app: path.resolve('./src/app.js')
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "app.back.bundle.js"
  },
  module: {
    rules: {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }
  },
  externals: [nodeExternals()]
};