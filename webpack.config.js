const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const PrettierPlugin = require("prettier-webpack-plugin");

const prettierConfig = {
  printWidth: 80,               // Specify the length of line that the printer will wrap on.
  tabWidth: 2,                  // Specify the number of spaces per indentation-level.
  useTabs: false,               // Indent lines with tabs instead of spaces.
  semi: true,                   // Print semicolons at the ends of statements.
  encoding: 'utf-8',            // Which encoding scheme to use on files
  extensions: [ ".js", ".ts" ] 
};

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin(), new PrettierPlugin(prettierConfig)],
  module: {
    rules: [
      { test: /\.handlebars$/, loader: "handlebars-loader" },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
  },
  mode: "development"
};
  