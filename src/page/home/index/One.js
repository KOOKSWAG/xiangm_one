import React, { Component } from 'react'
// import './echarts.min.js'    
// import echarts from 'echarts'
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

// var echarts = require('echarts');
export default class One extends Component {
    componentDidMount() {
        this.fn()
    }
    fn = ()=>{
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('oneBox'));
        // 绘制图表
        myChart.setOption({
            title: { text: 'Line Chart' },
            tooltip: {},
            xAxis: {
                type: 'category',
                data: ['2013', '2014', '2015', '2016', '2017']
            },
            yAxis: {
                type:'value'
            },
            series: [{
                name: '销量',
                type: 'bar',
                data: [500, 1000, 200, 180, 170]
            }]
        });
    }
    render() {
        return (
            <div className="outBox">
                <div id="oneBox"  style={{ width: 400, height: 400 }}></div>
                <div className="twoBox"></div>
                <div className="thrBox"></div>
                <div className="forBox"></div>
            </div>
        )
    }
}
