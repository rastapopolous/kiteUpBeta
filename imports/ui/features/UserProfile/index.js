import React, { Component, PropTypes } from 'react'

export default class UserProfile extends Component {

  constructor () {
    super()

    this.state = {
      firstname: '',
      lastname: '',
      city: '',
      province: '',
      email: '',
      phone: '',
      skill: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.user) {
      this.setState({
        firstname: nextProps.user.firstname,
        lastname: nextProps.user.lastname,
        city: nextProps.user.city,
        province: nextProps.user.province,
        email: nextProps.user.email,
        phone: nextProps.user.phone,
        skill: nextProps.user.skill
      })
    }
  }

  handleChange (e) {
    e.preventDefault()

    this.setState({
      firstname: this.refs.firstnameInput.value,
      lastname: this.refs.lastnameInput.value,
      city: this.refs.cityInput.value,
      province: this.refs.provinceInput.value,
      email: this.refs.emailInput.value,
      phone: this.refs.phoneInput.value,
      skill: this.refs.skillInput.value
    })
  }

  render () {
    return (
      <div>
        <form
          className='pure-form pure-form-stacked'>
          <input
            type='text'
            autoFocus
            value={this.state.firstname}
            ref='firstnameInput'
            onChange={this.handleChange}
            placeholder='Firstname' />
          <input
            type='text'
            value={this.state.lastname}
            ref='lastnameInput'
            onChange={this.handleChange}
            placeholder='Lastname' />
          <input
            type='text'
            value={this.state.city}
            ref='cityInput'
            onChange={this.handleChange}
            placeholder='City' />
          <input
            type='text'
            value={this.state.province}
            ref='provinceInput'
            onChange={this.handleChange}
            placeholder='Province' />
          <input
            type='email'
            value={this.state.email}
            ref='emailInput'
            onChange={this.handleChange}
            placeholder='diego@kiteup.com' />
          <input
            type='text'
            value={this.state.phone}
            ref='phoneInput'
            onChange={this.handleChange}
            placeholder='Phone Number' />
          <select
            type='text'
            value={this.state.skill}
            ref='skillInput'
            onChange={this.handleChange}
            placeholder={'Choose skill level'} >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </form>
      </div>
    )
  }
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    province: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired
  })
}

UserProfile.defaultProps = {
  user: {
    _id: 0,
    firstname: '',
    lastname: '',
    city: '',
    province: '',
    email: '',
    phone: '',
    skill: ''
  }
}
