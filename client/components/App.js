/**
 * 版权所有：浙江薪福多网络科技有限公司
 * 作者：Tony
 * 创建时间：2017/7/31
 */
import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Routes from '../routes'

export default class App extends Component {
    render() {
        return (
            <Switch>
                {
                    Routes.map((route, index) =>
                        <Route
                            key={route.path}
                            exact={route.exact}
                            path={route.path}
                            component={route.component}
                        />)
                }
            </Switch>
        )
    }
}