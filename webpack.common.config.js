const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		app: [
			"src/index.js",
			"src/index.scss"
		]
	},
	resolve: {
		extensions: [".js"],
		alias: {
			src: path.resolve(__dirname, "src")
		}
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
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader"
				],
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: MiniCssExtractPlugin. loader },
					"css-loader",
					{
						loader: "sass-loader",
						options: {
							implementation: require("sass"), //You have to tell the compiler which sass compiler you want to use -- the default is `node-sass`.
							sourceMap: true
						}
					}
				]
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
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].[hash].css",
			chunkFilename: "[id].[hash].css"
		}),
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		})
	]
}