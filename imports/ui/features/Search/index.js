import React, { Component, PropTypes } from 'react'

export default class Search extends Component {
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

    const filteredUsers = this.filterUsers(this.props.users, this.refs.keywordInput.value)
    this.props.updatedFilteredUsers(filteredUsers)

    this.setState({
      keyword: ''
    })
  }

  filterUsers (users, keyword) {
    // when the keyword is empty return the full users collection
    if (keyword.length === 0) {
      return users
    }

    keyword = keyword.toLowerCase()

    // return the filtered collection of users
    return users.filter(function (user) {
      let match = false

      for (let key in user) {
        let value = user[key]
        if (typeof value === 'string') {
          value = value.toLowerCase()
          match = value.includes(keyword)
        }

        // break out of for..in loop on match
        if (match) {
          break
        }
      }

      return match
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.keyword}
            ref='keywordInput'
            onChange={this.handleChange}
            placeholder='Enter any keyword' />
        </form>
      </div>
    )
  }
}

Search.propTypes = {
  users: PropTypes.array.isRequired,
  updatedFilteredUsers: PropTypes.func.isRequired
}
