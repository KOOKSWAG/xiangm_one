import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { NavLink } from 'react-router-dom';
import qs from 'qs'
import axios from 'axios'

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
 };
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

export default class zhuce extends Component {
    onFinish = values => {
        console.log('Success:', values);
        axios.post('/api/index.php/home/v1/register',qs.stringify(values)).then(res=>{
            if(res.data.status==200){
                alert('注册成功')
            }
           else{
            alert('注册失败')
           }
        })
      };
    
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
    render() {
        return (
            
            <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
              <h1>注册</h1>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>
      
            <Form.Item
              label="Password"
              name="pwd"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
      
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                注册
              </Button>
              <NavLink to="/login"> 
                <Button type="primary">
                    登录跳转
                </Button>
              </NavLink>
            </Form.Item>
          </Form>
        )
    }
}
