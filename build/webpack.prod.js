/**
 * 版权所有：浙江薪福多网络科技有限公司
 * 作者：Tony
 * 创建时间：2017/8/1
 */

import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import merge from 'webpack-merge'
import config from './webpack.base'
import {client, rootPath, dist} from './common-path'

export default merge(config, {
    entry: {
        app: path.join(client, 'app.js'),
        vendor: [
            'mobx',
            'mobx-react',
            'react',
            'react-dom',
            'react-router-dom',
        ],
    },

    output: {
        path: path.join(dist, 'static'),
        filename: '[name].[chunkhash:6].js',
        publicPath: '/static/'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
            },
            {
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader', use: [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            },
        ]
    },

    plugins: [
        new CleanWebpackPlugin('dist', {
            root: rootPath
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'cache'],
        }),
        new ExtractTextPlugin({
            filename: '[name].[contenthash:6].css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: path.join(client, 'index.html'),
        }),
    ]
})