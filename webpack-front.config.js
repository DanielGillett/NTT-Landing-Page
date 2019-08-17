const path = require('path');
const webpack = require('webpack');

// webpack is not working right. coming back later
module.exports = {
    target: "web",
    mode: 'production',
    entry: { 
        app: path.resolve('./public/js/main.js')
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.front.bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.resolve('./public/js'),
          use:'babel-loader'
        }
      ]
    },
    stats: {
        colors: true
    },
    devtool: false
};