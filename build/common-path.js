/**
 * 版权所有：浙江薪福多网络科技有限公司
 * 作者：Tony
 * 创建时间：2017/7/31
 */

import path from 'path'

const rootPath = path.resolve(__dirname, '..');
const client = path.join(rootPath, 'client');
const publicPath = '/';
const dist = path.join(rootPath, 'dist');

export {
    client,
    publicPath,
    rootPath,
    dist
}


