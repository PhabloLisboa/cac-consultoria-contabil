import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import Logo from '@assets/images/Logo/justLogo.png'
import { Link } from 'react-router-dom';
import LoginModal from '../Login'


const { Sider } = Layout
const { Item } = Menu

export default function Nav() {
  const [showLogin, setShowLogin] = useState(false)
  const headerMobile = {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column'

  }
  const headerWeb = {
    padding: "0 10rem",
    display: 'flex',
    justifyContent: 'space-between'
  }
  const [style, setStyle] = useState({
    sider: { width: 100 },
    header: headerWeb,
    siderMode: {
      mode: 'horizontal'
    },
    mobile: {},
    web: {},
    logo: {
      alignSelf: 'center',
      heigth: '100%',
      width: 'auto',
      maxWidth: '4rem'
    },
    menu: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: "rgba(0,0,0,0)"
    }
  })


  const onBroken = (broken) => {
    if (broken) {
      setStyle({
        ...style,
        sider: { width: 35, heigth: '100vh', position: 'fixed', backgroundColor: "#fff", zIndex: 99 },
        siderMode: { mode: 'vertical' },
        header: headerMobile,
        menu: {
          display: 'flex',
          alignItems: 'center',
          border: 0,
          flexDirection: 'column'
        }
      })
    } else {
      setStyle({
        ...style,
        sider: { width: 100, heigth: 'auto', zIndex: 99, backgroundColor: "rgba(0,0,0,0)" },
        siderMode: { mode: 'horizontal' },
        header: headerWeb,
        menu: {
          display: 'flex',
          alignItems: 'center',
          border: 0,
          flexDirection: 'row'
        }

      })
    }
  }

  return (<Sider collapsedWidth={0}
    breakpoint="md"
    theme="light"
    style={style.sider}
    width={`${style.sider.width}%`}
    onBreakpoint={onBroken}
  >
    <LoginModal visible={showLogin}
      onCancel={() => setShowLogin(false)}
      title="Login"
      cancelText="Cancelar"
      okText="Entrar"
      centered={true}
      footer={null}
    />
    <div style={style.header}>
      <Link to="/"><img style={style.logo} src={Logo} alt="Logo CAC" /></Link>
      <Menu mode={style.siderMode.mode} style={style.menu}>
        <Item >
          <Link to="/">
            Home
          </Link>
        </Item>

        <Item>
          <Link to="/about">
            Sobre
          </Link>
        </Item>
        <Item>
          <Link to="/products">
            Produtos
          </Link>
        </Item>

        <Item>
          <Button type="primary" onClick={() => setShowLogin(true)}>Login</Button>

        </Item>
      </Menu>
    </div>
  </Sider>)
}
