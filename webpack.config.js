const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default

module.exports = {
  entry: {
    index: "./src/scripts/index.js"
  },
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [new TerserWebpackPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new ImageminWebpackPlugin({
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].min.js"
  }
}