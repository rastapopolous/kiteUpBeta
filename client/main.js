import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Meteor } from 'meteor/meteor'

import App from '../imports/ui/features/App'
import Home from '../imports/ui/features/Home'
import UserProfile from '../imports/ui/features/UserProfile'

Meteor.startup(() => {
  ReactDOM.render(
    (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='user/add' component={UserProfile} />
      </Route>
    </Router>
    ),
    document.getElementById('app')
  )
})
