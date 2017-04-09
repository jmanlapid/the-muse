import React from 'react'
import { ReactDOM, render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import AppContainer from './containers/app.container.js'

render((
  <Router history={hashHistory}>
    <Route path="/" component={AppContainer}></Route>
  </Router>
), document.getElementById('app'))
