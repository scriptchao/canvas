/**
 * 版权所有：浙江薪福多网络科技有限公司
 * 作者：Tony
 * 创建时间：2017/7/31
 */
import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {observable, autorun} from 'mobx'

@observer
export default class Index extends Component {

    constructor(...args) {
        super(...args);
    }

    componentDidMount() {
        var canvas = document.getElementById('canvas'),
            ctx = canvas.getContext('2d');

        var cw = canvas.width, ch = canvas.height;

        var gradient = 'rgb(0,0,0)';

        var circle = {
            x: cw / 2,
            y: ch / 2,
            sAngle: 0,
            eAngle: 270,
            r: 90,
            lineWidth: 10,
            speed: 2,
            deg: 0
        };

        function dTor(deg) {
            return deg * (Math.PI / 180);
        }


        function clear() {
            ctx.clearRect(0, 0, cw, ch)
        }

        function updateCircle() {
            if (circle.deg < 360) {
                circle.deg += circle.speed
            } else {
                circle.deg = 0
            }

        }

        function renderCircle() {
            ctx.save();
            ctx.translate(circle.x, circle.y);
            ctx.rotate(dTor(circle.deg));
            ctx.beginPath();
            ctx.arc(0, 0, circle.r, dTor(circle.sAngle), dTor(circle.eAngle));
            ctx.lineWidth = circle.lineWidth;
            ctx.storkeStyle = gradient;
            ctx.stroke();
            ctx.restore();
        }


        function loop() {
            clear();
            updateCircle();
            renderCircle()

            requestAnimationFrame(loop)
        }


        loop()


    }


    render() {
        return (
            <div className="canvas">
                <canvas id="canvas" width="250" height="250"
                        style={{border: '1px solid rgb(0,0,0)'}}>
                </canvas>
            </div>
        )
    }
}