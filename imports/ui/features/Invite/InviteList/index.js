import React, { Component } from 'react'
import UserInvite from './UserInvite'

// Check node-uuid from the same author that created this algorithm
const uuid = () => {
  const result = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0
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
      inviteList: []
    }

    this.addEmail = this.addEmail.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.createInviteList = this.createInviteList.bind(this)
    this.removeEmail = this.removeEmail.bind(this)
    this.findEmail = this.findEmail.bind(this)
  }

  addEmail () {
    const id = uuid()
    const email = this.state.email
    const match = this.findEmail(this.state.email)
    if (match.length === 0) {
      this.setState({
        inviteList: this.state.inviteList.concat([{
          id,
          email
        }]),
        email: ''
      })
    }
  }

  findEmail (field) {
    return this.state.inviteList.filter((invite) => {
      let found = null
      Object.keys(invite).forEach((key) => {
        if (field === invite[key]) {
          found = invite
        }
      })
      return found
    })
  }

  handleChange (e) {
    e.preventDefault()
    this.setState({
      email: e.target.value
    })
  }

  removeEmail (id) {
    const match = this.findEmail(id)
    if (match.length === 1) {
      const inviteList = this.state.inviteList.filter((invite) => invite.id !== match[0].id)
      this.setState({ inviteList })
    }
  }

  createInviteList () {
    return (
      this.state.inviteList.map((invite) =>
        <li key={invite.id}>
          <UserInvite id={invite.id} email={invite.email} deleteEmail={this.removeEmail} />
        </li>
      )
    )
  }

  render () {
    return (
      <div>
        <input
          type='email'
          value={this.state.email}
          onChange={this.handleChange}
          placeholder='email here' />
        <button onClick={this.addEmail}>Add Email</button>
        <ul>
          {this.createInviteList()}
        </ul>
      </div>
    )
  }
}
