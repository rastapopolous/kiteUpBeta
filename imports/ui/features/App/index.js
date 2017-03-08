import React, { Component, PropTypes } from 'react'
import './styles.scss'
import { IndexLink } from 'react-router'
import '../InviteContainer/styles.scss'
import users from '../../data/users.js'

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
/*
<Link to
  className="btn btn-pink"
  role="button"
  to="/"
  onClick={this.handleClick()}
</Link>
*/
