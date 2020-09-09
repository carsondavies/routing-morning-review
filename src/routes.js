import React from 'react'
import Landing from './components/Landing'
import Profile from './components/Profile'
import { Switch, Route } from 'react-router-dom'

export default (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/meet-me/:first/:last' component={Profile} />
  </Switch>
)