//webpack.config.js
const path = require('path');

module.exports = {
  mode: "development",
  watch: true,
  devtool: "inline-source-map",
  entry: ["./src/ts/entry.ts",
        "./src/ts/extension.ts",
        "./src/ts/thirdExtension.ts"
    ],
  output: {
    path: path.resolve(__dirname, './scripts'),
    filename: "bundle.js" // <--- Will be compiled to this single file
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
};