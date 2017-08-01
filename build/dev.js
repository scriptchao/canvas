/**
 * 版权所有：浙江薪福多网络科技有限公司
 * 作者：Tony
 * 创建时间：2017/7/31
 */

import express from 'express'
import webpack from 'webpack'
import connectHistoryApiFallback from 'connect-history-api-fallback'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from './webpack.dev'
import {publicPath} from './common-path'

const app = express();

const compiler = webpack(config);

app.use(connectHistoryApiFallback());
app.use(webpackDevMiddleware(compiler,{
    noInfo: true,
    publicPath: publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.listen(6000,() => console.log('app listening on port 6000,proxy in 6060'));

