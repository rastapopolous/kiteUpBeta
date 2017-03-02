// InviteComponent nearly the same as Edwin's inviteList
// Structure for both nearly the same, small differences
// in id generation, specific order of component
import React, { Component } from 'react'
import UserInvite from '../UserInvite'

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
      emailList: []
    }

    this.addEmail = this.addEmail.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.removeEmail = this.removeEmail.bind(this)
    this.renderInputForm = this.renderInputForm.bind(this)
    this.renderOutputForm = this.renderOutputForm.bind(this)
  }

  handleChange (e) {
    e.preventDefault()
    this.setState({
      email: e.target.value
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
      <form className='pure-form'>
        <input
          type='email'
          autoFocus
          value={this.state.email}
          onChange={this.handleChange}
          placeholder='email here' />
        <button
          type='button' className='pure-button pure-button-active' onClick={this.addEmail}>
          Add email
        </button>
      </form>
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

  render () {
    return (
      <div>
        <div>
          {this.renderInputForm()}
        </div>
        <ul>{this.renderOutputForm()}</ul>
        <div>
          <button
            className='pure-button pure-button-active'
            onClick={this.toggleModal}>Invite Users
          </button>
        </div>
      </div>
    )
  }
}
