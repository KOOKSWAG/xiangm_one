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
import { NavLink } from 'react-router-dom';
const { SubMenu } = Menu;

export default class home extends Component {
    state = {
        collapsed: false,
      };
    
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
                    <span>123</span>
                </div>
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
            Option 2
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Option 3
          </Menu.Item>
          <Menu.Item key="4" icon={<DesktopOutlined />}>
            Option 4
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
            </React.Fragment>
        )
    }
}
