/**
 * 版权所有：浙江薪福多网络科技有限公司
 * 作者：Tony
 * 创建时间：2017/7/31
 */

import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import BrowserSyncPlugin from 'browser-sync-webpack-plugin'
import config from './webpack.base'
import {client} from './common-path'

export default merge(config, {
    entry: {
        app: [
            'react-hot-loader/patch',
            'webpack-hot-middleware/client?reload=true',
            path.join(client, 'app.js')
        ]
    },
    output: {
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(), // 跳过编译出错代码
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(client, 'index.html')
        }),
        new BrowserSyncPlugin({
            host: '127.0.0.1',
            port: 6060,
            proxy: 'http://127.0.0.1:6000',
        }, {
            reload: false
        })
    ]
})
