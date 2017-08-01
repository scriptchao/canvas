/**
 * 版权所有：浙江薪福多网络科技有限公司
 * 作者：Tony
 * 创建时间：2017/7/31
 */
import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'mobx-react'
import createHistory from 'history/createBrowserHistory'
import {AppContainer} from 'react-hot-loader'
import App from './components/App'

const history = createHistory();
const MOUNT_NODE = document.getElementById('app');

const render = Component => {
    ReactDom.render(
        <AppContainer>
            <Provider>
                <BrowserRouter history={history}>
                    <Component />
                </BrowserRouter>
            </Provider>
        </AppContainer>,
        MOUNT_NODE
    );
};

render(App);

if (module.hot) {
    console.log('react-hot-loader');
    module.hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default;
        render(NextApp)
    })
}