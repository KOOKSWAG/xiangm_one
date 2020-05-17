import React, { Component } from 'react'
import axios from 'axios'
import { Table, Tag, Space } from 'antd';
import qs from 'qs'
  
export default class Thr extends Component {
    state = {
        arr:[]
    }
    del = (id) =>{
        axios.post('https://api.baxiaobu.com/index.php/home/v5/deleteUser',qs.stringify({id})).then(res=>{
            alert(res.data.info)
        })
        axios.post('/api/index.php/home/v5/getuser').then(res=>{
            this.setState({
                arr:res.data.users
            })
         })
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
            {
                title: '',
                render :(id)=> <b onClick={()=>this.del(id.id)}>删除</b>
            }, 
          ];
        return (
            <div>
                <Table dataSource={arr} columns={columns} style ={{ width:600 }} rowKey={v => v.id}/>
            </div>
        )
    }
}
