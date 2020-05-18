import React, { Component } from 'react'
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { NavLink, Switch, Route } from 'react-router-dom';
import One from './index/One';
import Two from './index/Two';
import Thr from './index/Thr';
import For from './index/For';
import './css.css'
import {connect} from 'react-redux'
// const { SubMenu } = Menu;

export default @connect(state=>({
    username:state.login.username
}))
class home extends Component {
    state = {
        collapsed: false,
      };
    constructor(props){
        super(props)
        console.log(props)
        if(!props.username){
            props.history.push('/login')
        }
    }
    
      toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    render() {
        return (
            <React.Fragment>
                <div className="top">
                    <span>purple</span>
                    <span><input type="text" placeholder="输入你要搜索的内容"/></span>
                    <span>用户名:{this.props.username}</span>
                </div>
                <div className="box">
                <div style={{ width: 256 }}>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.state.collapsed}
                    >
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        <NavLink to="/home/one">
                        Option 1
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        <NavLink to="/home/two"> 
                        Option 2
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<ContainerOutlined />}>
                    <NavLink to="/home/thr"> 
                        Option 3
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<DesktopOutlined />}>
                    <NavLink to="/home/for"> 
                        Option 4
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<PieChartOutlined />}>
                        Option 5
                    </Menu.Item>
                    <Menu.Item key="6" icon={<ContainerOutlined />}>
                        Option 6
                    </Menu.Item>
                    <Menu.Item key="7" icon={<ContainerOutlined />}>
                        Option 7
                    </Menu.Item>
                    </Menu>
                </div>
            <div>
                <Switch>
                    <Route path="/home/one" component={One}/>
                    <Route path="/home/two" component={Two}/>
                    <Route path="/home/thr" component={Thr}/>
                    <Route path="/home/for" component={For}/>
                    <Route path="/home" component={One}/>
                </Switch>
            </div>
            </div>
            </React.Fragment>
        )
    }
}
