const nodeExternals = require("webpack-node-externals");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: [
		"./source/index.jsx",
		"./source/index.css"
	],
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader",
			query: {
				presets: ["latest"],
				plugins: ["transform-object-rest-spread"]
			}
		}, {
			test: /\.html$/,
			loader: "html-loader"
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract({
				fallbackLoader: "style-loader",
				loader: "css-loader",
				publicPath: "/dist"
			})


		}, {
			test: /.(png|woff|woff2|eot|ttf|svg)(\?.*)?$/,
			loader: "url-loader?limit=100000"
		}]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: "bundle.css",
			disable: false,
			allChunks: true
		}),
		new HtmlWebpackPlugin({
			template: "./source/index.html"
		})
	]
}