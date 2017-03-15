import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Meteor } from 'meteor/meteor'
import App from '../imports/ui/features/App'

Meteor.startup(() => {
  ReactDOM.render(
    (
    <Router history={browserHistory}>
      <Route path='/' component={App} />
    </Router>
    ),
    document.getElementById('app')
  )
})
