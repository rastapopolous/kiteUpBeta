
import React, { Component, PropTypes } from 'react'
import UserCard from '../../UserGrid/UserCard'
import SearchByName from '../SearchByName'
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
        } else {
          this.state.emailList.push(user.email)
        }
      })
    }

    if (this.state.emailList.length !== 0) {
      alert(`sending your email to: ${this.state.emailList}`)
      this.setState({ emailList: [] })
    } else {
      alert(`sending your text to: ${this.state.textList}`)
      this.setState({ textList: [] })
    }
  }

  renderUser () {
    return (
      this.state.filteredUsers.map((user) =>
        <div className='pure-u-lg-1-5 pure-u-md-1-3 pure-u-1-1' key={user._id}>
          <UserCard user={user} onHandleClick={this.removeUser} />
        </div>)
    )
  }

  render () {
    return (
      <div>
        <div id='grid-panell'>
          <div className='add-user'>
            <div className='span-text'>
              <h2>Add clients by first or last name:</h2>
            </div>
            <div className='input-name'>
              <SearchByName
                users={this.state.users}
                addUsers={this.addUsers} />
            </div>
          </div>
          <div className='user-grid'>
            <h4 id='h4-italic'>click on any client to remove from message</h4>
            {this.renderUser()}
          </div>
          <div className='bottom'>
            <div className='bottom-left'>
              <form className='bottomleft-radios'>
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
              </form>
              <div className='bottomleft-button'>
                <button
                  className='pure-button pure-button-primary pure-button-active sendButton'
                  onClick={this.sendMessage}>
                  Send Message
                </button>
              </div>
            </div>
            <div>
              <textarea
                className='bottom-right'
                type='text'
                autoFocus
                value={this.state.message}
                ref='messageInput'
                placeholder='Write your message here'
                onChange={this.handleChange}
                rows='7' cols='40'>
              </textarea>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

MessageUsersComponent.propTypes = {
  filteredUsers: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired
}
