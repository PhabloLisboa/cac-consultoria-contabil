import React from 'react'
import { Layout, Menu } from 'antd'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Logo from '@assets/images/Logo/justLogo.png'

const { Sider } = Layout
const { SubMenu } = Menu

export default function Navbar({ collapsed, onCollapse }) {
  const style = {
    sider: {
      overflow: 'auto',
      height: '100vh',
      position: 'fixed',

      // textAlign: 'center',
      zIndex: 99
    },
    logo: {
      alignSelf: 'center',
      heigth: '100%',
      width: 'auto',
      maxWidth: '3.5rem',
    },
  }

  return <Sider collapsible
    style={style.sider}
    breakpoint="md"
    theme="dark"
    collapsed={collapsed}
    onCollapse={onCollapse}>
    <Link to="/dashboard"><img style={style.logo} src={Logo} alt="Logo CAC" /></Link>
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1" icon={<PieChartOutlined />}>
        Option 1
            </Menu.Item>
      <Menu.Item key="2" icon={<DesktopOutlined />}>
        Option 2
            </Menu.Item>
      <SubMenu key="sub1" icon={<UserOutlined />} title="User">
        <Menu.Item key="3">Tom</Menu.Item>
        <Menu.Item key="4">Bill</Menu.Item>
        <Menu.Item key="5">Alex</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
        <Menu.Item key="6">Team 1</Menu.Item>
        <Menu.Item key="8">Team 2</Menu.Item>
      </SubMenu>
      <Menu.Item key="9" icon={<FileOutlined />} />
    </Menu>
  </Sider>
}