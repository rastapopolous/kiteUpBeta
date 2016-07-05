import React, { Component } from 'react'

export default class UserGrid extends Component {
  constructor () {
    super()

    this.renderUser = this.renderUser.bind(this)
  }

  renderUser (user) {
    return (
      <li key={user._id}>User: {user.firstname} {user.lastname}</li>
    )
  }

  render () {
    return (
      <div>
        <h2>User Grid</h2>
        <ul>
          {this.props.users.map(this.renderUser)}
        </ul>
      </div>
    )
  }
}
