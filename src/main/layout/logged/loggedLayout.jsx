import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as loginActions from '../../store/actions'
import Navbar from './Navbar'
import { Layout, Dropdown, Menu, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom'

const { Content, Header, Footer } = Layout
export default function LoggedLayout(props) {
  const dispatch = useDispatch();
  let history = useHistory()
  const [collapsed, setCollapsed] = useState(false)

  const [style, setStyle] = useState({
    content: {
      marginLeft: 200,

    },
    header: {
      zIndex: '2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    }
  })

  const onCollapse = () => {
    if (collapsed) {
      setStyle({ ...style, content: { marginLeft: 200, transition: '.5s' } })
    } else {
      setStyle({ ...style, content: { marginLeft: 80, transition: '.5s' } })
    }

    setCollapsed(!collapsed)
  }

  const logoutMenu = <Menu>
    <Menu.Item>
      {/* eslint-disable-next-line */}
      <a href="#" onClick={() => {
        dispatch(loginActions.logout())
        history.push('/')
      }} >Sair</a>

    </Menu.Item>
  </Menu>

  return <Layout style={{ minHeight: '100vh' }} hasSider={true}>
    <Navbar collapsed={collapsed} onCollapse={onCollapse} />
    <Layout style={style.content}>
      <Header style={style.header} >
        <Dropdown overlay={logoutMenu}>
          <Avatar icon={<UserOutlined />} />
        </Dropdown>

      </Header>

      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div style={{ padding: 24, minHeight: 360 }}>
          {props.children}


        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Desenvolvido por Phablo ©2020</Footer>
    </Layout>
  </Layout>
}