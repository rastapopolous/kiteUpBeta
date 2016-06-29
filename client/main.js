import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Meteor } from 'meteor/meteor'

import App from '../imports/ui/features/App'
import Home from '../imports/ui/features/Home'

function routes () {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
      </Route>
    </Router>
  )
}

Meteor.startup(() => {
  render(routes(), document.getElementById('app'))
})
