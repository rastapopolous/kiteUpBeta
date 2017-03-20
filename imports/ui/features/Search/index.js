// search should be identical both versions
import React, { Component, PropTypes } from 'react'
import './styles.scss'

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

    const filteredUsers = this.filterUsers(this.props.users, this.state.keyword)
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

      Object.keys(user).forEach((key) => {
        if (!match) {
          let value = user[key]

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
          id='left-addon'
          className='pure-form inner-addon width'
          onSubmit={this.handleSubmit}>
          <i className='fa fa-search'></i>
          <input
            className='pure-input-2-3'
            type='text'
            value={this.state.keyword}
            ref='keywordInput'
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            placeholder={this.props.holder} />
        </form>
      </div>
    )
  }
}

Search.propTypes = {
  users: PropTypes.array.isRequired,
  updatedFilteredUsers: PropTypes.func.isRequired,
  holder: PropTypes.string.isRequired
}
