const pathsConfig = require("./paths");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // Our application entry point.
  entry: [pathsConfig.src + "/index.tsx"],

  // What file name should be used for the result file,
  // and where it should be palced.
  output: {
    filename: "[name].bundle.js",
    path: pathsConfig.build,
    publicPath: "/",
    assetModuleFilename: "assets/[hash][ext][query]",
  },

  // Use all the plugins.
  // the template in html-webpack-plugin is the source html template
  plugins: [
    new HtmlWebPackPlugin({
      template: pathsConfig.src + "/index.html",
      filename: "index.html" // output file
    }),
    new CleanWebpackPlugin(),
    new PrettierPlugin(),
  ],

  // These rules define how to deal
  // with files with given extensions.
  // For example, .tsx files
  // will be compiled with ts-loader,
  // a specific loader for webpack
  // that knows how to work with TypeScript files.
  // babel is not required since typescript is used
  // built-in assets are used instead of url-loader or file-loader since webpack 5
  module: {
    rules: [
      {
        test: /\.(tsx|js|jsx)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },

  // Telling webpack which extensions
  // we are interested in.
  resolve: {
    modules: [pathsConfig.src, "node_modules"],
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias: {
      "@": pathsConfig.src,
    },
  },
};
