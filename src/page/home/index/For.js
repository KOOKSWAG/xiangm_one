import React, { Component } from 'react'
import axios from 'axios'
import qs from 'qs'
import { Pagination } from 'antd';
import './css.css'

export default class For extends Component {
    state = {
        arr:[],
        current: 1,
        count: 0,
    }
    componentDidMount(){
        this.onChange(1)
    }
    onChange = page => {
        console.log(page);
        this.setState({
          current: page,
        });
        axios.post('https://blogs.zdldove.top/Home/Apis/listWithPage',qs.stringify({
            page,
            limit: 6,
        })).then(res=>{
           console.log(res.data)
           this.setState({
               arr:res.data.result.list,
               count: res.data.result.count
           })
        })
      };
    render() {
        let {arr,count} = this.state
        return (
            <React.Fragment>
                <div>
                    {
                        arr.map((v,i)=>{
                            return <p key={i} className="box">
                                <span>{v.title}</span>
                            </p>
                        })
                    }
                </div>
                <div className="feny"><Pagination defaultCurrent={1} onChange={this.onChange} total={count} pageSize={6} /></div>;
            </React.Fragment>
        )
    }
}
