/**
 * 版权所有：浙江薪福多网络科技有限公司
 * 作者：Tony
 * 创建时间：2017/8/1
 */

import fs from 'fs'
import path from 'path'
import webpack from 'webpack'
import config from './webpack.prod'
import {dist} from './common-path'

webpack(config, (err, stats) => console.log(stats.toString({chunks: false, color: true})));


