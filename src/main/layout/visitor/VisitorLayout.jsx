import React from 'react'
import NavBar from './Navbar'
import { Layout } from 'antd'
import defaultConst from '@/main/defaultConstsCSS.js'
import Particles from 'react-particles-js'


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
      position: 'absolute',
      justifyContent: 'center'
    },
    background: {
      width: '100%',
      height: 'max-content',
      zIndex: '0',
      minHeight: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
    }
  }

  return <div>
    <NavBar />
    <Content style={style.container}>
      {props.children}
    </Content>

    <Particles style={style.background} params={{
      background: {
        color: {
          value: "#e8e8e8"
        }
      }, particles: {
        color: {
          value: "#a39f9f"
        },
        links: {
          color: "#a39f9f",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        collisions: {
          enable: true
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 2,
          straight: false
        },
        number: {
          density: {
            enable: true,
            value_area: 1000
          },
          value: 80
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: "circle"
        },
        size: {
          random: true,
          value: 5
        }
      },

    }} />

  </div>


}
