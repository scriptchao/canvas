/**
 * 版权所有：浙江薪福多网络科技有限公司
 * 作者：Tony
 * 创建时间：2017/7/31
 */
import React,{Component} from 'react'
import {observer} from 'mobx-react'
import {observable} from 'mobx'
import './index.sass'

export default class Index extends Component {

    constructor(...args) {
        super(...args)
    }

    render() {
        return (
            <div className="rct">
                WELCOME TO MY REACT TEST113333344445555
                <input type="text"/>
            </div>
        )
    }
}