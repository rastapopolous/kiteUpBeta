// edwin version
import React, { Component, PropTypes } from 'react'
import './styles.scss'

const weekDays = {
  0: 'Mo',
  1: 'Tu',
  2: 'We',
  3: 'Th',
  4: 'Fr',
  5: 'Sa',
  6: 'Su'
}

export default class UserProfile extends Component {
  constructor () {
    super()

    this.state = {
      user: {
        image: '',
        firstname: '',
        lastname: '',
        city: '',
        province: '',
        email: '',
        phone: '',
        skill: '',
        days: []
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
    this.checkboxStatus = this.checkboxStatus.bind(this)
  }

  componentWillReceiveProps ({ user }) {
    if (user) {
      this.setState({ user })
    }
  }

  handleChange (key) {
    const user = this.state.user
    return (event) => {
      user[key] = event.target.value
      this.setState({ user })
    }
  }

  handleCheckbox (e) {
    e.stopPropagation()
    const user = this.state.user
    const bool = e.target.checked
    const index = e.target.id
    user.days.splice(index, 1, bool)
    this.setState({ user })
  }

  checkboxStatus (dayIdx) {
    return this.state.user.days[dayIdx]
  }

  render () {
    const checkboxes = this.state.user.days.map((day, dayIdx) =>
      <span key={dayIdx}>
        <input
          type='checkbox'
          checked={this.checkboxStatus(dayIdx)}
          onChange={this.handleCheckbox}
          id={dayIdx} />
        <label htmlFor={dayIdx}>{weekDays[dayIdx]}</label>
      </span>
    )
    return (
      <div className='user-profile'>
        <div className='pure-g pure-u-1-4'>
          <img className='pure-img' src={this.state.user.image} alt='Profile' />
        </div>
        <form
          className='pure-form'>
          <fieldset className='pure-group'>
            <input
              className='pure-input-1'
              type='text'
              autoFocus
              ref='firstname'
              value={this.state.user.firstname}
              onChange={this.handleChange('firstname')}
              placeholder='Firstname' />
          </fieldset>
          <fieldset className='pure-group'>
            <input
              className='pure-input-1'
              type='text'
              value={this.state.user.lastname}
              onChange={this.handleChange('lastname')}
              placeholder='Lastname' />
          </fieldset>
          <fieldset className='pure-group'>
            <input
              className='pure-input-1'
              type='text'
              value={this.state.user.city}
              onChange={this.handleChange('city')}
              placeholder='City' />
          </fieldset>
          <fieldset className='pure-group'>
            <input
              className='pure-input-1'
              type='text'
              value={this.state.user.province}
              onChange={this.handleChange('province')}
              placeholder='Province' />
          </fieldset>
          <fieldset className='pure-group'>
            <input
              className='pure-input-1'
              type='email'
              value={this.state.user.email}
              onChange={this.handleChange('email')}
              placeholder='diego@kiteup.com' />
          </fieldset>
          <fieldset className='pure-group'>
            <input
              className='pure-input-1'
              type='text'
              value={this.state.user.phone}
              onChange={this.handleChange('phone')}
              placeholder='Phone Number' />
          </fieldset>
          <fieldset>
            <select
              className='pure-u-1-4'
              type='text'
              value={this.state.user.skill}
              onChange={this.handleChange('skill')}
              placeholder={'Choose skill level'} >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
            <div className='weekdays-selector pure-u-lg-1-3 pure-u-md-1-2 pure-u-sm-1'>
              {checkboxes}
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    province: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired,
    days: PropTypes.array.isRequired
  })
}

UserProfile.defaultProps = {
  user: {
    _id: 0,
    image: '',
    firstname: '',
    lastname: '',
    city: '',
    province: '',
    email: '',
    phone: '',
    skill: '',
    days: [false, false, false, false, false, false, false]
  }
}
