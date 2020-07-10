import React from "react";
import MainLogo from '@assets/images/Logo/justName.png'
import { Transition } from 'react-transition-group';

import '@assets/animations/fadeIn.css'

export default function Home() {

  const style = {
    image: {
      width: 'auto',
      maxHeight: '50vh'
    },
    divImage: {
      display: 'flex',
      verticalAlign: 'middle',
      justifyContent: 'center'

    }
  }
  return <Transition timeout={4000} in={true} appear>
    {
      status => (<div style={style.divImage} className={`box box-${status}`}>
        <img src={MainLogo} alt="Main Logo" style={style.image} />
      </div>)
    }</Transition>
}
