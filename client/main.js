import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Meteor } from 'meteor/meteor'
import App from '../imports/ui/features/App'
import Forecast from '../imports/ui/features/Forecast'
import SearchContainer from '../imports/ui/features/SearchContainer'

Meteor.startup(() => {
  ReactDOM.render(
    (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={SearchContainer} />
        <Route path='forecast/:location' component={Forecast} />
        {/* <Route path='forecast/:location/:day' component={ForecastDetails} />*/}
      </Route>
    </Router>
  ),
    document.getElementById('app')
  )
})
