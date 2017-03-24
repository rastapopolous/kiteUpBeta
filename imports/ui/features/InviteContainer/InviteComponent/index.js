// InviteComponent nearly the same as Edwin's inviteList
// Structure for both nearly the same, small differences
// in id generation, specific order of component
import React, { Component } from 'react'
import UserInvite from '../UserInvite'
import './styles.scss'

// generate random id for each new member
const uuid = () => {
  const result = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 || 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
  return result
}

export default class InviteList extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      emailList: [],
      message: ''
    }

    this.addEmail = this.addEmail.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.removeEmail = this.removeEmail.bind(this)
    this.renderInputForm = this.renderInputForm.bind(this)
    this.renderOutputForm = this.renderOutputForm.bind(this)
    this.renderMessageField = this.renderMessageField.bind(this)
    this.handleChangeMessage = this.handleChangeMessage.bind(this)
  }

  handleChange (e) {
    e.preventDefault()
    this.setState({
      email: e.target.value
    })
  }

  handleChangeMessage (e) {
    e.preventDefault()
    this.setState({
      message: e.target.value
    })
  }
  // receive newly input email, compare w existing members
  // if not existing, add to newArray to be sent invite w other new users
  addEmail () {
    const email = this.state.email
    const match = this.findEmail(email)
    if (match.length === 0) {
      const id = uuid()
      const newArray = this.state.emailList
      newArray.push({ id, email })
      this.setState({
        emailList: newArray,
        email: ''
      })
    }
  }

  // compare input against existing member emails to avoid sending duplicates
  findEmail (arg) {
    const field = typeof arg === 'string' ? arg.toLowerCase() : arg
    return this.state.emailList.filter((email) => {
      let found = null
      Object.keys(email).forEach((key) => {
        if (field === email[key]) {
          found = email
        }
      })
      return found
    })
  }

  // remove email from list of invites
  removeEmail (id) {
    const emailList = this.state.emailList
    const removed = this.state.emailList.indexOf(id)
    emailList.splice(removed, 1)
    this.setState({ emailList })
  }
  // input form for email addresses
  renderInputForm () {
    return (
      <div>
        <div id='input-row'>
          <button
            type='button' className='pure-button pure-button-active' onClick={this.addEmail}>
            Add client
          </button>
          <input
            id=''
            type='email'
            autoFocus
            value={this.state.email}
            onChange={this.handleChange}
            placeholder='email address' />
        </div>
      </div>
    )
  }

  // list of emails entered w/delete buttons
  renderOutputForm () {
    return (
        this.state.emailList.map((item) =>
          <li key={item.id}>
            <UserInvite id={item.id} email={item.email} deleteEmail={this.removeEmail} />
          </li>
        )
    )
  }

  renderMessageField () {
    return (
      <div>
        <textarea
          id='txt-input'
          type='text'
          autoFocus
          value={this.state.message}
          ref='messageInput'
          placeholder='write a message here to be sent with account create link'
          onChange={this.handleChangeMessage}
          rows='5' cols='40'>
        </textarea>
      </div>
    )
  }

  render () {
    return (
      <div>
        <h1 id='top-style'>Invite New Clients</h1>
        <div id='invitecomponent-flex'>
          <div id='top-row'>
            {this.renderInputForm()}
          </div>
        </div>
        <div id='middle-row'>
          <div id='middle-left'>
            <ul>{this.renderOutputForm()}</ul>
          </div>
          {this.renderMessageField()}
          <div id='bottom-row'>
            <div id='confirm-button'>
              <button
                id='confirm-button'
                className='pure-button pure-button-primary pure-button-active'
                onClick={this.toggleModal}> Send Invites
              </button>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
