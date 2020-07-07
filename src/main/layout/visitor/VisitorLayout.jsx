import React from 'react'
import NavBar from './Navbar'
import { Layout } from 'antd'
import defaultConst from '@/main/defaultConstsCSS.js'


import './visitor.css'

const { Content } = Layout

export default function VisitorLayout(props) {
  const style = {
    container: {
      display: 'flex',
      width: '100%',
      maxWidth: '100vw',
      padding: defaultConst.container,
      zIndex: '1',
    },
    background: {
      width: '100%',
      height: '100%',
      zIndex: '0',
      position: 'absolute',
      top: 0,
      left: 0
    }
  }
  return <div>
    <div className="background" style={style.background}>
      <NavBar />
      <Content style={style.container}>
        {props.children}
      </Content>
    </div>
  </div>
}