import React from 'react'
import NavBar from './Navbar'

export default function VisitorLayout(props) {
    return <div>
        <NavBar />
        Visitante
        {props.children}
    </div>
}