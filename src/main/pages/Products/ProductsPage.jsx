import React from 'react'
import { Card, Row, Col } from 'antd'
import { Transition } from 'react-transition-group';

import '@assets/animations/fadeIn.css'

const { Meta } = Card

export default function Products() {
  const style = {
    card: {
      marginTop: '1rem'
    }
  }

  return <Transition timeout={4000} in={true} appear>
    {
      status => (<Row gutter={16} className={`box box-${status}`}>
        <Col style={style.card}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>

        <Col style={style.card}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>

        <Col style={style.card}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>

        <Col style={style.card}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>

      </Row>)}
  </Transition>



}