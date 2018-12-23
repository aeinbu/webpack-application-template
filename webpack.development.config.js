const commonConfig = require("./webpack.common.config");
const merge = (...objs) => require("deepmerge").all(objs, {arrayMerge: (arr1, arr2) => arr1.concat(arr2) });


const combinedConfigs = merge({}, commonConfig, {
	mode: "development",
	output: {
		publicPath: "/",
		filename: "[name].[hash].js"
	},
	devtool: "#eval"
});

module.exports = combinedConfigs;
