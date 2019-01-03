const webpack = require("webpack");

const commonConfig = require("./webpack.development.config");
const merge = (...objs) => require("deepmerge").all(objs, {arrayMerge: (arr1, arr2) => arr1.concat(arr2) });


const combinedConfigs = merge({}, commonConfig, {
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		publicPath: "/",
		inline: true,
		contentBase: "/",
		disableHostCheck: true	//TODO: Remove when bug is fixed! https://github.com/webpack/webpack-dev-server/issues/1604
	}
});

module.exports = combinedConfigs;
