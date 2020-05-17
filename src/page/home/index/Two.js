import React, { Component } from 'react'
import { Form, Input, InputNumber, Button } from 'antd';
import axios from 'axios'
import qs from 'qs'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not validate email!',
      number: '${label} is not a validate number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

export default class Two extends Component {
    onFinish = values => {
        console.log(values);
        axios.post('https://api.baxiaobu.com/index.php/home/v5/add',qs.stringify(values)).then(res=>{
            if(res.data.status==200){
                this.props.history.push('thr')
                alert('添加成功')
            }
           else{
                alert('添加失败')
           }
        })
      };
    render() {
        return (
            <Form {...layout} name="nest-messages" onFinish={this.onFinish} validateMessages={validateMessages}>
                <Form.Item name={'name'} label="用户名" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={'age'} label="年龄" rules={[{ type: 'number', min: 0, max: 99 }]}>
                    <InputNumber />
                </Form.Item>
                <Form.Item name={'gender'} label="标题" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={'msg'} label="价格" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={'hospital'} label="信息" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        添加
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}
