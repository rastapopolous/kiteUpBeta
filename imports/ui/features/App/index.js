import React, { Component, PropTypes } from 'react'
import './styles.scss'
import { IndexLink } from 'react-router'
import InviteContainer from '../InviteContainer'
import '../InviteContainer/styles.scss'
import MessageUsers from '../MessageUsers'
import users from '../../../data/users.js'
import LocationInputForm from '../LocationInputForm'

export default class App extends Component {
  constructor () {
    super()

    this.state = {
      users,
      filteredUsers: users,
      placeholder: '  search clients (by name, city, state, skill level)',
      city: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.updateUsers = this.updateUsers.bind(this)
  }

  handleChange (e) {
    e.preventDefault()
    this.setState({
      city: this.refs.keywordInput.value
    })
  }

  updateUsers (filteredUsers) {
    this.setState({
      filteredUsers
    })
  }

  // <search/> searches by object.keys through users object, displays in UserGrid component
  // <InviteContainer/>  button that triggers modal w/group send message as string via email or txt
  // <MessageUsers/> button that triggers  modal w/group send message string via email or txt
  render () {
    return (
      <div>
        <div className='header'>
          <div id='nav-top' className='nav-row'>
            <div id='index-cell' className='nav-row-col'>
              <IndexLink
                to='/' style={{ textDecoration: 'none', color: 'AliceBlue' }}>
                <span id='index-link'>KiteUp</span>
              </IndexLink>
            </div>
          </div>
          <div id='nav-bottom' className='nav-row'>
            <div id='navbuttons-cell' className='nav-row-col'>
              <MessageUsers
                filteredUsers={this.state.filteredUsers}
                users={this.state.users} />
              <InviteContainer />
            </div>
            <div id='search-cell' className='nav-row-col'>
            {/*   <Search
                users={this.state.users}
                updatedFilteredUsers={this.updateUsers}
                holder={this.state.placeholder} />
            */}
            </div>
            <div id='weather-cell' className='nav-row-col'>
              <LocationInputForm />
            </div>
          </div>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired
}
