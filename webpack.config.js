const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		js: './src/index.js'
	},
	output: {
		path: path.resolve('dist'),
		publicPath: 'dist',
		filename: 'index_bundle.js'
	},
	// Automatically reload the page when compilation is done.
	devServer: {
		inline: true
	},
	module: {
		rules: [{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: [{
						loader: "css-loader"
					}, {
						loader: "sass-loader"
					}],
					// use style-loader in development
					fallback: "style-loader"
				})
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("bundle.css")
	]
}