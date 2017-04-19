const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		app:[
			"./source/index.js",
			"./source/index.css"
		]
	},
	resolve: {
		extensions: ['.js']
	},
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader"
			},
			{
				test: /\.html$/,
				use: "html-loader"
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader",
					publicPath: "/dist"
				})
			},
			{
				test: /.(png|woff|woff2|eot|ttf|svg)(\?.*)?$/,
				use: {
					loader: "url-loader",
					options: {
						limit: 100000
					}
				}
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: "[name].[chunkhash].css",
			disable: false,
			allChunks: true
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: "libs",
			minChunks(module) {
				return module.context && module.context.indexOf('node_modules') !== -1;
			}
		}),
		new HtmlWebpackPlugin({
			template: "./source/index.html"
		})
	]
}