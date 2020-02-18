/**
 * Build configuration
 */

"use strict";

const path = require("path");

const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
              presets: ["@babel/env", "@babel/react"],
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
              presets: ["@babel/env", "@babel/react"],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
};
