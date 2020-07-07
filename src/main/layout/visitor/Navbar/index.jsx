import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import Logo from '@assets/images/Logo/justLogo.png'


const { Sider } = Layout
const { Item } = Menu

export default function Nav() {
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
        sider: { width: 35, heigth: '100vh', position: 'fixed', backgroundColor: "#fff" },
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
    <div style={style.header}>
      <img style={style.logo} src={Logo} alt="Logo CAC" />
      <Menu mode={style.siderMode.mode} style={style.menu}>
        <Item style={{ backgroundColor: "rgba(0,0,0,0)" }}>
          Home
      </Item>
        <Item>
          Sobre
      </Item>
        <Item>
          Login
      </Item>
      </Menu>
    </div>
  </Sider>)
}
