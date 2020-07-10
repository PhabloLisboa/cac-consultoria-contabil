import React from 'react'
import routes from './routerConfigs'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import VisitorLayout from '../layout/visitor/VisitorLayout'
import LoggedLayout from '../layout/logged/loggedLayout'

const logged = false;
const Layout = logged ? LoggedLayout : VisitorLayout



export default function RouterMounted() {
  console.log(routes);
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