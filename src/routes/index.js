import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from '../pages/login'

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </Fragment>
  </BrowserRouter>
)

export default Routes
