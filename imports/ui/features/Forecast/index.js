import React, { Component, PropTypes } from 'react'
import { getWeatherByCity } from '../../../api/Weather'
import WeatherCard from '../'
import { link } from 'react-router'

export default class Forecast extends Component {
  constructor () {
    super()
    this.state = {
      forecast: [],
      loading: false
    }
    this.consoleState = this.consoleState.bind(this)
    this.createForecast = this.createForecast.bind(this)
  }


  componentDidMount () {
    getWeatherByCity(this.props.routeParams.location)
      .then(weatherData => {
        const data = weatherData.data.list
        this.setState({ forecast: data })
      })
  }

  createForecast (oneDay) {
    const unixStamp = oneDay.dt
    const location = this.props.routeParams.locatiaon
    return (
      <link key={unixStamp} to={`/Forecast/${location}/${unixStamp}`}>
        <WeatherCard cardData={oneDay} />
      </link>
    )
  }

  render () {
    return (
      <div>
        <h2>Upcoming 7 Day Forecast for {this.props.routeParams.location}</h2>
        <div>
          {this.state.forecast.map(() => this.createForecast)}
        </div>
      </div>
    )
  }
}


Forecast.propTypes = {
  routeParams: PropTypes.object.isRequired
}
