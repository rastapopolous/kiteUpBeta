import React, { Component, PropTypes } from 'react'
import './styles.scss'

export default class LocationInputForm extends Component {
  constructor () {
    super()

    this.state = {
      location: '',
      error: ''
    }

    this.submitLocation = this.submitLocation.bind(this)
    this.handleChangeLocation = this.handleChangeLocation.bind(this)
  }

  handleChangeLocation (e) {
    this.setState({
      location: e.target.value
    })
  }

  submitLocation () {
    if (!this.state.location) {
      const error = 'Error: input field is empty'
      this.setState({
        error
      })
      console.warn(error)
    } else {
      this.setState({
        error: ''
      })
    }
    this.context.router.push({
      pathname: `/forecast/ ${encodeURI(this.state.location)}`
    })
  }

  render () {
    return (
      <div>
        <form
          className='pure-form el-space'
          onSubmit={this.submitLocation}>
          <input
            id='q-weather' className='pure-input-3-4'
            type='text'
            value={this.state.location}
            ref='keywordInput'
            onChange={this.handleChangeLocation}
            placeholder='   Enter City Name' />
          <button
            id='weather-button' className='pure-button pure-button-active el-spacing'
            onClick={this.submitLocation}>
            Get Weather
          </button>
        </form>
      </div>
    )
  }
}

LocationInputForm.contextTypes = {
  router: PropTypes.object.isRequired
}
