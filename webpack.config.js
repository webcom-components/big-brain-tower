const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
	entry: {
		vendor: [
			'script!phaser',
			'script!jquery',
			'imports?exports=>false&module=>false!webcom'
		],
		app: './src/js/index.js'
	},
	resolve: {
		alias: {
			webcom: 'webcom/webcom.js'
		}
	},
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'bundle.js',
		publicPath: process.env.PUBLIC_PATH || '/'
	},
	module: {
		loaders: [
			{ test: /\.js/, loaders: ['babel'], exclude: /node_modules/ },
			{ test: /\.(jpg)|(png)$/, loader: 'file?name=assets/images/[name].[ext]'},
			{ test: /\.frag$/, loader: 'file?name=assets/shaders/[name].[ext]'},
			{ test: /\.css$/, loader: 'style!css?sourceMap'}
		],
		noParse: [
			/webcom\.js$/
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: 'body'
		}),
		new webpack.OldWatchingPlugin(),
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
	],
	progress: true,
	target: 'web'
};

if (process.env.NODE_ENV !== 'production') {
	config.devtool = 'source-map';
	config.debug = true;
}
else {
	config.plugins = config.plugins.concat([
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		})
	]);
	config.debug = false;
}

module.exports = config;