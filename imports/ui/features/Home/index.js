import React, { Component } from 'react'

import Search from '../Search'
import UserGrid from '../UserGrid'

export default class Home extends Component {
  render () {
    return (
      <div>
        <h2>Dashboard</h2>
        <Search />
        <UserGrid />
      </div>
    )
  }
}
