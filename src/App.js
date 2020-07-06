import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Router from './main/routes'
import VisitorLayout from './main/layout/visitor/VisitorLayout'
import LoggedLayout from './main/layout/logged/loggedLayout'

const logged = false;
const Layout = logged ? LoggedLayout : VisitorLayout

function App() {
  return <Layout >
    <
      Router />
    <
    /Layout>
}

export default App;
