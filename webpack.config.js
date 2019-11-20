const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module: {
	rules: [
	  {
		test: /\.js$/,
		exclude: /node_modules/,
		use: {
		  loader: "babel-loader",
		  options: {
            presets: ['@babel/preset-env']
          }
		}
	  },
	  { test: /\.css$/, use: ['style-loader', 'css-loader'], exclude: /node_modules/ },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          },
        ],
      },
	  {
		test: /\.html$/,
		use: [
		  {
			loader: "html-loader",
			options: { minimize: true }
		  }
		]
	  },
	]
  },
  plugins: [
	new HtmlWebPackPlugin({
	  template: "./src/index.html",
	  filename: "index.html",
	  inject: 'body'
	}),
  ]
};