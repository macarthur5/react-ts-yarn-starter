const webpack = require("webpack");
const common = require("./webpack.common.js");
const pathsConfig = require("./paths");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  plugins: [
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: pathsConfig.build,
    compress: true,
    hot: true,
    port: 9000,
  },
  module: {
    rules: [
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { sourceMap: true, importLoaders: 1, modules: true },
          },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
    ],
  },
});
