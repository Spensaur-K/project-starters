/**
 * Build configuration
 */

"use strict";

const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const srcPath = path.join(__dirname, "src");

module.exports = {
  entry: [path.join(srcPath, "index.tsx")],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".scss"],
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["env", "react"],
            },
          },
          "ts-loader",
        ],
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["env", "react"],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract("css-loader"),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract("css-loader!sass-loader"),
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new ExtractTextPlugin("[name].css"),
  ],
};
