import React, { Component } from 'react'
import './styles.scss'

export default class Navbar extends Component {
  constructor () {
    super()
    this.state = {
      none: ''
    }
  }
  render () {
    return (
      <div id='navbar'>
        <p>Dashboard</p>
        <div className='dropdown'>
          <input type='checkbox' id='dropmenu' />
          <label htmlFor='dropmenu'><i className='fa fa-th-large'></i></label>
          <ul className='dropdown-menu'>
            <li><p>Less Info</p></li>
            <li><p>More Info</p></li>
          </ul>
        </div>
      </div>
    )
  }
}
