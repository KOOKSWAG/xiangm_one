import React, { Component } from 'react'
import axios from 'axios'
import { Table, Tag, Space } from 'antd';

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '价格',
      dataIndex: 'msg',
      key: 'msg',
    },
    {
        title: '信息',
        dataIndex: 'hospital',
        key: 'hospital',
    },
    {
        title: '标题',
        dataIndex: 'gender',
        key: 'gender',
    }, 
  ];
export default class Thr extends Component {
    state = {
        arr:[]
    }
    componentDidMount(){
        axios.post('/api/index.php/home/v5/getuser').then(res=>{
           this.setState({
               arr:res.data.users
           })
        })
    }
    render() {
        let {arr} = this.state
        return (
            <div>
                <Table dataSource={arr} columns={columns} style ={{ width:500 }}/>
            </div>
        )
    }
}
