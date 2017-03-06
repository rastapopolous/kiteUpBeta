import React, { Component, PropTypes } from 'react'
import './styles.scss'

export default class App extends Component {
  render () {
    return (
      <div>
        <div className='header'>
          <IndexLink to='/'>
            <h1>KiteUp</h1>
          </IndexLink>
          <span id='login-name'>Admin</span>
          <div><i className='fa fa-cog fa-2x'></i></div>
        </div>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
}
