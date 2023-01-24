const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackCommon = require('./webpack.common')

module.exports = merge(webpackCommon, {
	mode: 'production',
	plugins: [
		new HtmlWebpackPlugin({
			title: 'React from scratch',
			filename: 'index.html',
			template: path.resolve(__dirname, '../public/index.html'),
			minify: true
		}),
	],
})
