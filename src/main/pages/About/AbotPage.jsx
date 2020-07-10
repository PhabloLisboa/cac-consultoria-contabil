import React from 'react'
import { Transition } from 'react-transition-group';
import Logo from '@assets/images/Logo/justLogo.png'
import { Card, Avatar, Typography, Space } from 'antd'

import '@assets/animations/fadeIn.css'

const { Text } = Typography


export default function About() {
  const style = {
    cardContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'justify-around',
      alignItems: 'center'
    }
  }

  return <Transition timeout={4000} in={true} appear>
    {
      status => (
        <Card className={`box box-${status}`} title="Sobre Nós" style={{ width: "100%" }}>
          <Space align="center" size="large" direction="vertical" style={style.cardContent}>
            <Avatar size={128} src={Logo} />
            <Text style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare turpis vitae congue elementum. Phasellus id porttitor diam, in dictum leo. Phasellus a vulputate massa. Morbi accumsan velit ante, at mollis felis bibendum nec. Donec at ultricies orci. Aliquam interdum tortor vel mattis mollis. Nunc egestas suscipit est, non mollis mauris pretium ac. Cras est metus, bibendum vitae quam vitae, gravida sodales metus. Quisque aliquam ut lacus malesuada hendrerit.

            Aliquam erat volutpat. In pretium purus nulla, nec fringilla ante ullamcorper a. Ut sagittis elit non fringilla tempus. Quisque sollicitudin diam sed leo tincidunt efficitur. Duis vitae arcu dignissim, fringilla tortor ut, ultricies lacus. Ut elit odio, pulvinar vel dapibus sit amet, lobortis nec arcu. Quisque ut euismod purus.

            Phasellus efficitur nulla vitae bibendum porttitor. In egestas metus eget luctus varius. Nunc vitae dui eu velit faucibus molestie ut sed nisl. Quisque diam nisl, vulputate id maximus sed, euismod et orci. Fusce vehicula odio non felis varius laoreet. Vivamus libero dui, molestie a sapien quis, dapibus aliquet justo. Sed ullamcorper neque tristique volutpat lacinia. Integer sem erat, accumsan ut risus eu, scelerisque venenatis nisl. Ut ut commodo diam. Nullam vel cursus mauris. Nunc fringilla orci pretium congue porta. Fusce orci enim, hendrerit vel odio quis, dignissim vulputate erat. Phasellus dignissim aliquam ligula, ac mollis mi cursus non.

            Nullam congue nunc a orci dignissim hendrerit. Sed et vehicula magna. Vestibulum non odio ornare, vestibulum turpis a, porttitor mi. Ut eget imperdiet ipsum, eu iaculis enim. Nunc imperdiet gravida sem, in ultrices magna iaculis in. Phasellus condimentum rhoncus tempus. Fusce at pharetra lorem, sit amet feugiat leo. In lacinia metus dolor, sed vulputate ex venenatis aliquam. Nulla luctus pulvinar ultrices.

        Nulla ultricies blandit mauris porta fermentum. Sed ac egestas lacus, vitae suscipit enim. Duis id turpis sem. Pellentesque at lacus a enim rhoncus vulputate a a ex. Aliquam metus leo, vestibulum quis lacus vel, rhoncus congue eros. Nullam sit amet sapien at ligula viverra sollicitudin. Suspendisse dictum faucibus facilisis. Donec felis arcu, porttitor lobortis magna vitae, scelerisque mollis metus. Aenean ullamcorper mi turpis, eget suscipit arcu consequat nec. Curabitur efficitur sollicitudin sagittis. Nunc eu eros dictum, sodales nisi a, semper sapien. Curabitur finibus posuere quam at efficitur. In eget venenatis sapien, quis elementum felis. Ut condimentum metus arcu, et vehicula sapien commodo eget. Pellentesque porttitor, ex ac efficitur placerat, nibh nisl tempus erat, eget cursus quam nulla ac purus. Donec pretium quam quam, eu congue mauris commodo ut.</Text>

          </Space>
        </Card>

      )}
  </Transition >

}