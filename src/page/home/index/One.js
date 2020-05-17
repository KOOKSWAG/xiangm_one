import React, { Component } from 'react'
import echarts from 'echarts'
import './css.css'

export default class One extends Component {
    componentDidMount() {
        //第一个
        var aa = echarts.init(this.aa)
        var aaa = {
            title: {
                text: 'Bar Chart'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        }
        aa.setOption(aaa)
        //第二个
        var bb = echarts.init(this.bb)
        var bbb = {
            title: {
                text: 'Line Chart'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                areaStyle: {}
            }]
        }
        bb.setOption(bbb)
        //第三个
        var cc = echarts.init(this.cc)
        var ccc = {
            title: {
                text: 'Area Chart'
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true
            }]
        }
        cc.setOption(ccc)
        //第四个
        var dd = echarts.init(this.dd)
        var ddd = {
            title: {
                text: 'Doughnut Chart'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 200,
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 335, name: '直接访问' },
                        { value: 310, name: '邮件营销' },
                        { value: 234, name: '联盟广告' },
                        { value: 135, name: '视频广告' },
                        { value: 1548, name: '搜索引擎' }
                    ]
                }
            ]
        }
        dd.setOption(ddd)
    }
    render() {
        return (
            <div className="outBox">
                <div ref={v => this.aa = v} style={{ width: 300, height: 300 }}></div>
                <div ref={v => this.bb = v} style={{ width: 300, height: 300 }}></div>
                <div ref={v => this.cc = v} style={{ width: 300, height: 300 }}></div>
                <div ref={v => this.dd = v} style={{ width: 300, height: 300 }}></div>
            </div>
        )
    }
}
