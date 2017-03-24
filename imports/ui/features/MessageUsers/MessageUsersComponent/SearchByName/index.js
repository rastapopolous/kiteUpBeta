// form receives input to keywordInput, filters users against userData object,
// (this.props.users) then passes them to addUsers prop passed in from messageUsersComponent,
// for comparison against existing filtered users already displayed in messaging component
import React, { Component, PropTypes } from 'react'

export default class SearchByName extends Component {
  constructor () {
    super()

    this.state = {
      keyword: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    e.preventDefault()

    this.setState({
      keyword: this.refs.keywordInput.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()

    const addedUsers = this.filterUsers(this.props.users, this.state.keyword)
    this.props.addUsers(addedUsers)
  }

  filterUsers (users, keyword) {
    // when the keyword is empty return the full users collection
    if (keyword.length === 0) {
      return users
    }

    const lowecaseKeyword = keyword.toLowerCase()

    return users.filter((user) => {
      let match = false
      const fullname = [user.firstname, user.lastname]

      fullname.forEach((part) => {
        if (!match) {
          let value = part
          if (typeof value === 'string') {
            value = value.toLowerCase()
            match = value.includes(lowecaseKeyword)
          }
        }
      })
      return match
    })
  }

  render () {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}>
          <input
            type='text'
            autoFocus
            value={this.state.keyword}
            ref='keywordInput'
            onChange={this.handleChange}
            placeholder='Enter name here' />
        </form>
      </div>
    )
  }
}

SearchByName.propTypes = {
  users: PropTypes.array.isRequired,
  addUsers: PropTypes.func.isRequired
}
