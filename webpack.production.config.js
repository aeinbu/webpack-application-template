const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const commonConfig = require("./webpack.common.config");
const merge = (...objs) => require("deepmerge").all(objs, {
	arrayMerge: (arr1, arr2) => arr1.concat(arr2)
});

const combinedConfig = merge({}, commonConfig, {
	mode: "production",
	output: {
		path: path.resolve(__dirname, "./dist"),
		libraryTarget: "var",
		filename: "[name].[hash].js",
		chunkFilename: "[name].[hash].js"

	},
	devtool: "#source-map",
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true // set to true if you want JS source maps
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	},
});

module.exports = combinedConfig;