
import React, { Component } from 'react'
import users from '../../../data/users.js'
import './styles.scss'
import Search from '../Search'
import UserGrid from '../UserGrid'

export default class SearchContainer extends Component {
  constructor () {
    super()

    this.state = {
      users,
      filteredUsers: users,
      placeholder: '  search clients (by name, city, state, skill level)'
    }
    this.updateUsers = this.updateUsers.bind(this)
  }

  updateUsers (filteredUsers) {
    this.setState({
      filteredUsers
    })
  }

  render () {
    return (
      <div>
        <div id='searchBox'>
          <Search
            users={this.state.users}
            updatedFilteredUsers={this.updateUsers}
            holder={this.state.placeholder} />
        </div>
        <div>
          <UserGrid users={this.state.filteredUsers} />
        </div>
      </div>
    )
  }
}
