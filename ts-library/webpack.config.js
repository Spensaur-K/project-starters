/**
 * Build configuration
 */

"use strict";

const path = require("path");
const webpack = require("webpack");
const PACKAGE = require("./package.json");
const srcPath = path.join(__dirname, "src");

module.exports = {
  entry: [path.join(srcPath, "index.ts")],
  mode: 'production',
  // https://github.com/webpack/webpack/issues/6525 change to universal so that libraryTarget: UMD works
  target: "web",
  output: {
     library: "TODO",
     libraryTarget: "commonjs",
     filename: `lib.js`,
     path: path.resolve(__dirname, `dist`)
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        use: [
          "ts-loader",
          "tslint-loader",
        ]
      },
    ]
  },
  plugins: [],
};
