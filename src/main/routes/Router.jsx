import React from 'react'
import routes from './routerConfigs'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";


export default function Router() {
  return <BrowserRouter>
    <Switch>
      {routes.map((route, index) => <Route key={index} path={route.path}
        component={route.component}
      />)
      }
    </Switch>
  </BrowserRouter>
}