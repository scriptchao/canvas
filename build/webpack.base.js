/**
 * 版权所有：浙江薪福多网络科技有限公司
 * 作者：Tony
 * 创建时间：2017/7/31
 */

import path from 'path'
import ProgressPlugin from 'nyan-progress-webpack-plugin'
import {client} from './common-path'

export default {
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10240&name=[name].[hash].[ext]']
            }
        ]
    },
    plugins: [
        new ProgressPlugin(),
    ]
}
