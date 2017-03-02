
// messageUsers & messageUsersComponent/searchByName are only in josh-invite branch
import React, { Component, PropTypes } from 'react'
import UserCard from '../../UserGrid/UserCard'
import SearchByName from './SearchByName'
import './styles.scss'

export default class MessageUsersComponent extends Component {
  constructor () {
    super()

    this.state = {
      filteredUsers: [],
      users: [],
      additionalUsers: [],
      textList: [],
      emailList: [],
      message: '',
      toggleRadio: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.toggleRadio = this.toggleRadio.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
    this.removeUser = this.removeUser.bind(this)
    this.addUsers = this.addUsers.bind(this)
  }
  // props are received from dashboard userGrid
  componentWillReceiveProps ({ filteredUsers, users }) {
    if (filteredUsers) {
      this.setState({ filteredUsers })
    }
    if (users) {
      this.setState({ users })
    }
  }

  handleChange () {
    this.setState({ message: this.refs.messageInput.value })
  }
  // onclick on userCard removes a user from messaging list before sending group message
  removeUser (user) {
    if (this.state.filteredUsers.length !== 0) {
      const users = this.state.filteredUsers.filter((oneuser) => oneuser._id !== user)
      this.setState({ filteredUsers: users })
    }
  }
  // add users is passed to the msging search component so that
  // users added message list can be verified as current users
  // who are not already in the filteredUsers list
  addUsers (addedUsers) {
    const currentFiltered = this.state.filteredUsers
    const verifiedUsers = addedUsers.filter((user) => {
      let newUser = true

      currentFiltered.forEach((current) => {
        if (user === current) {
          newUser = false
        }
      })
      return newUser
    })

    const allUsers = verifiedUsers.concat(currentFiltered)
    this.setState({ filteredUsers: allUsers })
  }

  toggleRadio () {
    if (this.refs.textButton.checked) {
      this.setState({ toggleRadio: true })
    } else if (this.refs.emailButton.checked) {
      this.setState({ toggleRadio: false })
    }
  }

  sendMessage () {
    if (this.state.toggleRadio === null) {
      alert('please select whether youd like send a text message or an email')
    } else {
      this.state.users.forEach((user) => {
        if (this.refs.textButton.checked) {
          this.state.textList.push(user.phone)
        } else { this.state.emailList.push(user.email) }
      })
    }

    if (this.state.emailList.length !== 0) {
      this.setState({ emailList: [] })
    } else {
      this.setState({ textList: [] })
    }
  }

  renderUser () {
    return (
      this.state.filteredUsers.map((user) =>
        <div className='pure-u-lg-1-6 pure-u-md-1-4 pure-u-1-2' key={user._id}>
          <UserCard user={user} onHandleClick={this.removeUser} />
        </div>)
    )
  }

  render () {
    return (
      <div>
        <div className='formSize'>
          <SearchByName
            users={this.state.users}
            addUsers={this.addUsers} />
          <form >
            <input
              type='radio'
              name='msgRadio'
              id='text'
              value='text'
              ref='textButton'
              onChange={this.toggleRadio} />
            <span> send text message</span><br></br>
            <input
              type='radio'
              name='msgRadio'
              id='email'
              value='email'
              ref='emailButton'
              onChange={this.toggleRadio} />
            <span> send email</span>
            <textarea
              className='textArea'
              type='text'
              autoFocus
              value={this.state.message}
              ref='messageInput'
              placeholder='Write your message here'
              onChange={this.handleChange}
              rows='10' cols='50'>
            </textarea>
          </form>
          <button className='pure-button pure-button-active' onClick={this.sendMessage}>
          Send Message
          </button>
        </div>
        <div className='grid-panel'>
          {this.renderUser()}
        </div>
      </div>
    )
  }
}

MessageUsersComponent.propTypes = {
  filteredUsers: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired
}
