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
    phone: '305-720-9243',
    image: 'https://avatars1.githubusercontent.com/u/6045267?v=3&s=400'
  },
  {
    _id: 2,
    firstname: 'Josh',
    lastname: 'Lazar',
    city: 'Timbuktu',
    skill: 'Beginner',
    email: 'jslazar@gmail.com',
    phone: '415-595-1193',
    image: 'https://avatars1.githubusercontent.com/u/6877910?v=3&s=400'
  },
  {
    _id: 3,
    firstname: 'Edwin',
    lastname: 'Castillo',
    city: 'Providence',
    skill: 'Beginner',
    email: 'edgcastillo@gmail.com',
    phone: '401-403-5264',
    image: 'https://avatars2.githubusercontent.com/u/3250032?v=3&s=400'
  },
  {
    _id: 4,
    firstname: 'Edwin',
    lastname: 'Castillo',
    city: 'California',
    skill: 'Beginner',
    email: 'edgcastillo@gmail.com',
    phone: '401-403-5264',
    image: 'https://avatars2.githubusercontent.com/u/3250032?v=3&s=400'
  },

  {
    _id: 5,
    firstname: 'Edwin',
    lastname: 'Castillo',
    city: 'Providence',
    skill: 'Beginner',
    email: 'edgcastillo@gmail.com',
    phone: '401-403-5264',
    image: 'https://avatars2.githubusercontent.com/u/3250032?v=3&s=400'
  },

  {
    _id: 6,
    firstname: 'Edwin',
    lastname: 'Castillo',
    city: 'Providence',
    skill: 'Beginner',
    email: 'edgcastillo@gmail.com',
    phone: '401-403-5264',
    image: 'https://avatars2.githubusercontent.com/u/3250032?v=3&s=400'
  },

  {
    _id: 7,
    firstname: 'Diego',
    lastname: 'Concha',
    city: 'Cochabamba',
    skill: 'Intermediate',
    email: 'dapc85@gmail.com',
    phone: '305-720-9243',
    image: 'https://avatars1.githubusercontent.com/u/6045267?v=3&s=400'
  },

  {
    _id: 8,
    firstname: 'Diego',
    lastname: 'Concha',
    city: 'Akron',
    skill: 'Intermediate',
    email: 'dapc85@gmail.com',
    phone: '305-720-9243',
    image: 'https://avatars1.githubusercontent.com/u/6045267?v=3&s=400'
  },

  {
    _id: 9,
    firstname: 'Edwin',
    lastname: 'Castillo',
    city: 'Somerville',
    skill: 'Beginner',
    email: 'edgcastillo@gmail.com',
    phone: '401-403-5264',
    image: 'https://avatars2.githubusercontent.com/u/3250032?v=3&s=400'
  },

  {
    _id: 10,
    firstname: 'Diego',
    lastname: 'Concha',
    city: 'Boston',
    skill: 'Intermediate',
    email: 'dapc85@gmail.com',
    phone: '305-720-9243',
    image: 'https://avatars1.githubusercontent.com/u/6045267?v=3&s=400'
  },

  {
    _id: 11,
    firstname: 'Diego',
    lastname: 'Concha',
    city: 'Los Angeles',
    skill: 'Intermediate',
    email: 'dapc85@gmail.com',
    phone: '305-720-9243',
    image: 'https://avatars1.githubusercontent.com/u/6045267?v=3&s=400'
  }
]

export default class Dashboard extends Component {
  constructor () {
    super()

    this.state = {
      users,
      filteredUsers: users
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
        <h2>Dashboard</h2>
        <Search
          users={this.state.users}
          updatedFilteredUsers={this.updateUsers} />
        <UserGrid users={this.state.filteredUsers} />
      </div>
    )
  }
}
