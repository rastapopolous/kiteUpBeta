import React, { Component } from 'react'

import Search from '../Search'
import UserGrid from '../UserGrid'

const users = [
  {
    _id: 1,
    firstname: 'Diego',
    lastname: 'Concha',
    city: 'Boston',
    skill: 'Intermediate',
    email: 'dapc85@gmail.com',
    phone: '305-720-9243'
  },
  {
    _id: 2,
    firstname: 'Josh',
    lastname: 'Lazar',
    city: 'Boston',
    skill: 'Beginner',
    email: 'jslazar@gmail.com',
    phone: '415-595-1193'
  },
  {
    _id: 3,
    firstname: 'Edwin',
    lastname: 'Castillo',
    city: 'Boston',
    skill: 'Beginner',
    email: 'edgcastillo@gmail.com',
    phone: '401-403-5264'
  }
]

export default class Dashboard extends Component {
  constructor () {
    super()

    this.state = {
      users,
      filteredUsers: users
    }

    this.updatedFilteredUsers = this.updatedFilteredUsers.bind(this)
  }

  updatedFilteredUsers (filteredUsers) {
    this.setState({
      filteredUsers
    })
  }

  render () {
    return (
      <div>
        <h2>Dashboard</h2>
        <Search
          users={this.state.users}
          updatedFilteredUsers={this.updatedFilteredUsers} />
        <UserGrid users={this.state.filteredUsers} />
      </div>
    )
  }
}
