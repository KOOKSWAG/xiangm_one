import React, { Component } from 'react'
import axios from 'axios'

export default class For extends Component {
    state = {
        arr:[]
    }
    componentDidMount(){
        axios.post('https://blogs.zdldove.top/Home/Apis/listWithPage').then(res=>{
           console.log(res.data.result.list)
           this.setState({
               arr:res.data.result.list
           })
        })
    }
    render() {
        return (
            <div>
                789789
            </div>
        )
    }
}
