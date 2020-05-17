import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios'
import qs from 'qs'
import { NavLink } from 'react-router-dom';

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

export default class login extends Component {
    onFinish = values => {
        console.log('Success:', values);
        axios.post('/api/index.php/home/v1/login',qs.stringify(values)).then(res=>{
            if(res.data.status==200){
                alert('登录成功')
                
            }
           else{
            alert('登录失败')
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
          <h1>登录</h1>
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
                登录
              </Button>
             <NavLink to="/zhuce"> 
                <Button type="primary">
                    注册跳转
                </Button>
              </NavLink>
            </Form.Item>
          </Form>
        )
    }
}
