import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './Login/Login'
import LandingPage from './LandingPage/LandingPage'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>

        <Route path='/landing-page'>
          <LandingPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
