import React, { Component, PropTypes } from 'react'
import './styles.scss'
import { IndexLink } from 'react-router'
import Search from '../Search'
import InviteContainer from '../InviteContainer'
import '../InviteContainer/styles.scss'
import MessageUsers from '../MessageUsers'
import users from '../../../data/users.js'
import UserGrid from '../UserGrid'


export default class App extends Component {
  constructor () {
    super()

    this.state = {
      users,
      filteredUsers: users,
      placeholder: '  search clients...(by name, city, state, skill level)'
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
        <div className='header'>
          <div id='nav-top' className='nav-row'>
            <div id='index-cell' className='nav-row-col'>
              <IndexLink to='/' style={{ textDecoration: 'none', color: 'AliceBlue' }}>
                <span id='index-link'>KiteUp</span>
              </IndexLink >
            </div>
            <div id='search-cell' className='nav-row-col'>
              <Search
                users={this.state.users}
                updatedFilteredUsers={this.updateUsers}
                holder={this.state.placeholder} />
            </div>
          </div>
          <div id='nav-bottom' className='nav-row'>
            <div id='navbuttons-cell' className='nav-row-col'>
              <MessageUsers
                filteredUsers={this.state.filteredUsers}
                users={this.state.users} />
              <InviteContainer />
            </div>
            <div id='gear-admin-cell'className='nav-row-col'>
              <div id='login-name'><span>Admin</span></div>
              <div id='facog'><i className='fa fa-cog fa-2x'></i></div>
            </div>
          </div>
        </div>
        <div>
          <UserGrid users={this.state.filteredUsers} />
        </div>
        {this.props.children}
      </div>
    )
  }
}


App.propTypes = {
  children: PropTypes.node
}
