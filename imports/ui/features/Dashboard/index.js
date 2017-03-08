// changes to imports are invite Container and messageUsers import
// New structure for invite is invitecontainer/inviteComponent/UserInvite
// instead of invite/inviteList
// See notes in inviteList component for changes, mostly added functionality to confirm users
// message users is also now included here, as a modal and modal button
import React, { Component } from 'react'
import InviteContainer from '../InviteContainer'
import MessageUsers from '../MessageUsers'
import Search from '../Search'
import UserGrid from '../UserGrid'


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
  // <search/> searches by object.keys through users object, displays in UserGrid component
  // <InviteContainer/> includes visible button that triggers
  // modal w/group send message as string via email or txt
  // <MessageUsers/> includes visible button that triggers
  // modal w/group send message string via email or txt
  render () {
    return (
      <div>
        <Search
          users={this.state.users}
          updatedFilteredUsers={this.updateUsers}
          holder={this.state.placeholder} />
        <UserGrid users={this.state.filteredUsers} />
        <InviteContainer />
        <MessageUsers
          filteredUsers={this.state.filteredUsers}
          users={this.state.users} />
      </div>
    )
  }
}
