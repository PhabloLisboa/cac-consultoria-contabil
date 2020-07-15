import React, { useState, useEffect } from 'react'
import routes from './routerConfigs'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import VisitorLayout from '../layout/visitor/VisitorLayout'
import LoggedLayout from '../layout/logged/loggedLayout'
import { useSelector } from 'react-redux';

export default function RouterMounted() {
  const loggedState = useSelector(({ Login }) => Login.logged)
  const [logged, setLogged] = useState(false)

  useEffect(() => setLogged(localStorage.getItem('logged') ? true : false), [loggedState])

  const Layout = logged ? LoggedLayout : VisitorLayout

  return <Router>
    <Switch>
      <Layout>
        {routes.map((route, index) => <Route key={index}
          path={route.path}
          exact
        >
          {route.component()}
        </Route>
        )}
      </Layout>
    </Switch>
  </Router>
}