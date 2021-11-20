const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "dist"),
    chunkFilename: '[id].[chunkhash].js',
    publicPath: '/dist/'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
    watchFiles: './src/index.html'
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html"
    })
  ]
};
