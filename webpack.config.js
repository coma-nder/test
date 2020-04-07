const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const sourcePath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: {
    app: sourcePath + '/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: distPath
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: sourcePath + '/index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // { test: /\.html$/, loader: "html-loader" },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
    ]
  },
};