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
  }

  filterUsers (users, keyword) {
    // when the keyword is empty return the full users collection
    if (keyword.length === 0) {
      return users
    }

    const lowecaseKeyword = keyword.toLowerCase()

    // return the filtered collection of users
    return users.filter((user) => {
      let match = false

      Object.keys().forEach((key) => {
        let value = user[key]
        if (typeof value === 'string') {
          value = value.toLowerCase()
          match = value.includes(lowecaseKeyword)
        }
      })

      return match
    })
  }

  render () {
    return (
      <div>
        <form
          className='pure-form'
          onSubmit={this.handleSubmit}>
          <input
            type='text'
            autoFocus
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
