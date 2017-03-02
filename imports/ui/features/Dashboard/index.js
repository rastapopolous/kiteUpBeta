// changes to imports are invite Container and messageUsers import
// New structure for invite is invitecontainer/inviteComponent/UserInvite
// instead of invite/inviteList
// See notes in inviteList component for changes, mostly added functionality to confirm users
// message users is also now included here, as a modal and modal button
import React, { Component } from 'react'
import Search from '../Search'
import UserGrid from '../UserGrid'
import InviteContainer from '../InviteContainer'
import MessageUsers from '../MessageUsers'
import '../InviteContainer/styles.scss'


// User(member) object to populate app
const users = [
  {
    _id: 1,
    firstname: 'Diego',
    lastname: 'Concha',
    city: 'Boston',
    province: 'Massachusetts',
    skill: 'Intermediate',
    email: 'dapc85@gmail.com',
    phone: '305-720-9243',
    image: 'https://avatars1.githubusercontent.com/u/6045267?v=3&s=400',
    days: [true, false, false, false, false, true, true]
  },
  {
    _id: 2,
    firstname: 'Josh',
    lastname: 'Lazar',
    city: 'Timbuktu',
    province: 'Massachusetts',
    skill: 'Beginner',
    email: 'jslazar@gmail.com',
    phone: '415-595-1193',
    image: 'https://avatars1.githubusercontent.com/u/6877910?v=3&s=400',
    days: [true, false, false, true, false, true, true]
  },
  {
    _id: 3,
    firstname: 'Edwin',
    lastname: 'Castillo',
    city: 'Providence',
    province: 'Rhode Island',
    skill: 'Beginner',
    email: 'edgcastillo@gmail.com',
    phone: '401-403-5264',
    image: 'https://avatars2.githubusercontent.com/u/3250032?v=3&s=400',
    days: [true, false, false, false, false, true, true]
  },
  {
    _id: 4,
    firstname: 'Edwin',
    lastname: 'Castillo',
    city: 'San Diego',
    province: 'California',
    skill: 'Beginner',
    email: 'edgcastillo@gmail.com',
    phone: '401-403-5264',
    image: 'https://avatars2.githubusercontent.com/u/3250032?v=3&s=400',
    days: [true, false, false, false, false, true, true]
  },

  {
    _id: 5,
    firstname: 'Edwin',
    lastname: 'Castillo',
    city: 'Providence',
    province: 'Rhode Island',
    skill: 'Beginner',
    email: 'edgcastillo@gmail.com',
    phone: '401-403-5264',
    image: 'https://avatars2.githubusercontent.com/u/3250032?v=3&s=400',
    days: [true, false, false, false, false, true, true]
  },

  {
    _id: 6,
    firstname: 'Edwin',
    lastname: 'Castillo',
    city: 'Providence',
    province: 'Rhode Island',
    skill: 'Beginner',
    email: 'edgcastillo@gmail.com',
    phone: '401-403-5264',
    image: 'https://avatars2.githubusercontent.com/u/3250032?v=3&s=400',
    days: [true, false, false, false, false, true, true]
  },

  {
    _id: 7,
    firstname: 'Diego',
    lastname: 'Concha',
    city: 'Cochabamba',
    province: 'Dominican Republic',
    skill: 'Intermediate',
    email: 'dapc85@gmail.com',
    phone: '305-720-9243',
    image: 'https://avatars1.githubusercontent.com/u/6045267?v=3&s=400',
    days: [true, false, false, false, false, true, true]
  },

  {
    _id: 8,
    firstname: 'Diego',
    lastname: 'Concha',
    city: 'Akron',
    province: 'Ohio',
    skill: 'Intermediate',
    email: 'dapc85@gmail.com',
    phone: '305-720-9243',
    image: 'https://avatars1.githubusercontent.com/u/6045267?v=3&s=400',
    days: [true, false, false, false, false, true, true]
  },

  {
    _id: 9,
    firstname: 'Edwin',
    lastname: 'Castillo',
    city: 'Somerville',
    province: 'Massachusetts',
    skill: 'Beginner',
    email: 'edgcastillo@gmail.com',
    phone: '401-403-5264',
    image: 'https://avatars2.githubusercontent.com/u/3250032?v=3&s=400',
    days: [true, false, false, false, false, true, true]
  },

  {
    _id: 10,
    firstname: 'Diego',
    lastname: 'Concha',
    city: 'Boston',
    province: 'Massachusetts',
    skill: 'Intermediate',
    email: 'dapc85@gmail.com',
    phone: '305-720-9243',
    image: 'https://avatars1.githubusercontent.com/u/6045267?v=3&s=400',
    days: [true, false, false, false, false, true, true]
  },

  {
    _id: 11,
    firstname: 'Diego',
    lastname: 'Concha',
    city: 'Los Angeles',
    province: 'California',
    skill: 'Intermediate',
    email: 'dapc85@gmail.com',
    phone: '305-720-9243',
    image: 'https://avatars1.githubusercontent.com/u/6045267?v=3&s=400',
    days: [true, false, false, false, false, true, true]
  },

  {
    _id: 12,
    firstname: 'Diego',
    lastname: 'Concha',
    city: 'Boston',
    province: 'Massachusetts',
    skill: 'Intermediate',
    email: 'dapc85@gmail.com',
    phone: '305-720-9243',
    image: 'https://avatars1.githubusercontent.com/u/6045267?v=3&s=400',
    days: [true, false, false, false, false, true, true]
  },
  {
    _id: 13,
    firstname: 'Josh',
    lastname: 'Lazar',
    city: 'Timbuktu',
    province: 'Massachusetts',
    skill: 'Beginner',
    email: 'jslazar@gmail.com',
    phone: '415-595-1193',
    image: 'https://avatars1.githubusercontent.com/u/6877910?v=3&s=400',
    days: [true, false, false, true, false, true, true]
  },
  {
    _id: 14,
    firstname: 'Edwin',
    lastname: 'Castillo',
    city: 'Providence',
    province: 'Rhode Island',
    skill: 'Beginner',
    email: 'edgcastillo@gmail.com',
    phone: '401-403-5264',
    image: 'https://avatars2.githubusercontent.com/u/3250032?v=3&s=400',
    days: [true, false, false, false, false, true, true]
  },
  {
    _id: 15,
    firstname: 'Edwin',
    lastname: 'Castillo',
    city: 'San Diego',
    province: 'California',
    skill: 'Beginner',
    email: 'edgcastillo@gmail.com',
    phone: '401-403-5264',
    image: 'https://avatars2.githubusercontent.com/u/3250032?v=3&s=400',
    days: [true, false, false, false, false, true, true]
  },

  {
    _id: 16,
    firstname: 'Edwin',
    lastname: 'Castillo',
    city: 'Providence',
    province: 'Rhode Island',
    skill: 'Beginner',
    email: 'edgcastillo@gmail.com',
    phone: '401-403-5264',
    image: 'https://avatars2.githubusercontent.com/u/3250032?v=3&s=400',
    days: [true, false, false, false, false, true, true]
  },

  {
    _id: 17,
    firstname: 'Edwin',
    lastname: 'Castillo',
    city: 'Providence',
    province: 'Rhode Island',
    skill: 'Beginner',
    email: 'edgcastillo@gmail.com',
    phone: '401-403-5264',
    image: 'https://avatars2.githubusercontent.com/u/3250032?v=3&s=400',
    days: [true, false, false, false, false, true, true]
  },

  {
    _id: 18,
    firstname: 'Diego',
    lastname: 'Concha',
    city: 'Cochabamba',
    province: 'Dominican Republic',
    skill: 'Intermediate',
    email: 'dapc85@gmail.com',
    phone: '305-720-9243',
    image: 'https://avatars1.githubusercontent.com/u/6045267?v=3&s=400',
    days: [true, false, false, false, false, true, true]
  },

  {
    _id: 19,
    firstname: 'Diego',
    lastname: 'Concha',
    city: 'Akron',
    province: 'Ohio',
    skill: 'Intermediate',
    email: 'dapc85@gmail.com',
    phone: '305-720-9243',
    image: 'https://avatars1.githubusercontent.com/u/6045267?v=3&s=400',
    days: [true, false, false, false, false, true, true]
  },

  {
    _id: 20,
    firstname: 'Edwin',
    lastname: 'Castillo',
    city: 'Somerville',
    province: 'Massachusetts',
    skill: 'Beginner',
    email: 'edgcastillo@gmail.com',
    phone: '401-403-5264',
    image: 'https://avatars2.githubusercontent.com/u/3250032?v=3&s=400',
    days: [true, false, false, false, false, true, true]
  },

  {
    _id: 21,
    firstname: 'Diego',
    lastname: 'Concha',
    city: 'Boston',
    province: 'Massachusetts',
    skill: 'Intermediate',
    email: 'dapc85@gmail.com',
    phone: '305-720-9243',
    image: 'https://avatars1.githubusercontent.com/u/6045267?v=3&s=400',
    days: [true, false, false, false, false, true, true]
  },

  {
    _id: 22,
    firstname: 'Diego',
    lastname: 'Concha',
    city: 'Los Angeles',
    province: 'California',
    skill: 'Intermediate',
    email: 'dapc85@gmail.com',
    phone: '305-720-9243',
    image: 'https://avatars1.githubusercontent.com/u/6045267?v=3&s=400',
    days: [true, false, false, false, false, true, true]
  },

  {
    _id: 23,
    firstname: 'Diego',
    lastname: 'Concha',
    city: 'Boston',
    province: 'Massachusetts',
    skill: 'Intermediate',
    email: 'dapc85@gmail.com',
    phone: '305-720-9243',
    image: 'https://avatars1.githubusercontent.com/u/6045267?v=3&s=400',
    days: [true, false, false, false, false, true, true]
  },
  {
    _id: 24,
    firstname: 'Josh',
    lastname: 'Lazar',
    city: 'Timbuktu',
    province: 'Massachusetts',
    skill: 'Beginner',
    email: 'jslazar@gmail.com',
    phone: '415-595-1193',
    image: 'https://avatars1.githubusercontent.com/u/6877910?v=3&s=400',
    days: [true, false, false, true, false, true, true]
  },
  {
    _id: 25,
    firstname: 'Edwin',
    lastname: 'Castillo',
    city: 'Providence',
    province: 'Rhode Island',
    skill: 'Beginner',
    email: 'edgcastillo@gmail.com',
    phone: '401-403-5264',
    image: 'https://avatars2.githubusercontent.com/u/3250032?v=3&s=400',
    days: [true, false, false, false, false, true, true]
  },
  {
    _id: 26,
    firstname: 'Edwin',
    lastname: 'Castillo',
    city: 'San Diego',
    province: 'California',
    skill: 'Beginner',
    email: 'edgcastillo@gmail.com',
    phone: '401-403-5264',
    image: 'https://avatars2.githubusercontent.com/u/3250032?v=3&s=400',
    days: [true, false, false, false, false, true, true]
  },

  {
    _id: 27,
    firstname: 'Edwin',
    lastname: 'Castillo',
    city: 'Providence',
    province: 'Rhode Island',
    skill: 'Beginner',
    email: 'edgcastillo@gmail.com',
    phone: '401-403-5264',
    image: 'https://avatars2.githubusercontent.com/u/3250032?v=3&s=400',
    days: [true, false, false, false, false, true, true]
  },

  {
    _id: 28,
    firstname: 'Edwin',
    lastname: 'Castillo',
    city: 'Providence',
    province: 'Rhode Island',
    skill: 'Beginner',
    email: 'edgcastillo@gmail.com',
    phone: '401-403-5264',
    image: 'https://avatars2.githubusercontent.com/u/3250032?v=3&s=400',
    days: [true, false, false, false, false, true, true]
  }

]

export default class Dashboard extends Component {
  constructor () {
    super()

    this.state = {
      users,
      filteredUsers: users,
      placeholder: 'Enter any keyword'
    }
    this.updateUsers = this.updateUsers.bind(this)
  }

  updateUsers (filteredUsers) {
    this.setState({
      filteredUsers
    })
  }
  // <search/> searches by object.keys through users object then displays in UserGrid component
  // <InviteContainer/> includes visible button that triggers
  // modal w/group send message as string via email or txt
  // <MessageUsers/> includes visible button that triggers
  // modal w/group send message string via email or txt
  render () {
    return (
      <div>
        <Invite />
        <Search
          users={this.state.users}
          updatedFilteredUsers={this.updateUsers}
          holder={this.state.placeholder} />
        <InviteContainer />
        <MessageUsers
          filteredUsers={this.state.filteredUsers}
          users={this.state.users} />
        <UserGrid users={this.state.filteredUsers} />
      </div>
    )
  }
}
