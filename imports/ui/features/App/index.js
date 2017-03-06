import React, { PropTypes } from 'react'
import { IndexLink } from 'react-router'
import './styles.scss'

const App = () =>
  <div>
    <div className='header'>
      <IndexLink to='/'>
        <h1>KiteUp</h1>
      </IndexLink>
      <span id='login-name'>Admin</span>
      <div><i className='fa fa-cog fa-2x'></i></div>
    </div>
    <div>
      {this.props.children}
    </div>
  </div>

App.propTypes = {
  children: PropTypes.node
}

export default App
