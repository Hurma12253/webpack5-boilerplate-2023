const path = require('path')
const EslintPlugin = require('eslint-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const filename = (name, ext) => `${name}.[fullhash].${ext}`

module.exports = {
	entry: path.resolve(__dirname, '../src/index.ts'),
	output: {
		path: path.resolve(__dirname, '../build'),
		filename: filename('bundle', 'js'),
		clean: true,
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'ts-loader'],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	plugins: [
		new EslintPlugin(),
		new MiniCssExtractPlugin({ filename: filename('style', 'css') }),
	],
}
