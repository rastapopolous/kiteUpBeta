import React, { Component, PropTypes } from 'react'
import { getWeatherByCity } from '../../../api/Weather'
import WeatherCard from '../Weathercard'
import './styles.scss'
// import { link } from 'react-router'

export default class Forecast extends Component {
  constructor () {
    super()
    this.state = {
      forecast: [],
      loading: false
    }
    this.createForecast = this.createForecast.bind(this)
  }

  componentDidMount () {
    getWeatherByCity(this.props.routeParams.location)
      .then(weatherData => {
        console.log(weatherData)
        const data = weatherData.data.list
        this.setState({ forecast: data })
      })
  }

  createForecast (oneDay) {
    const unixTime = oneDay.dt
  //  const location = this.props.routeParams.location
    console.log('oneDay here')
    return (
    //  <link key={unixTime} to={`/Forecast/${location}/${unixTime}`}>
      <WeatherCard key={unixTime} mode='small' cardData={oneDay} />
    //  </link>
    )
  }

  render () {
    return (
      <div>
        <h2 className='seven-day'>Upcoming 7 Day Forecast for {this.props.routeParams.location}</h2>
        <div className='forecastCont' >
          {this.state.forecast.map((oneDay) => this.createForecast(oneDay))}
        </div>
      </div>
    )
  }
}


Forecast.propTypes = {
  routeParams: PropTypes.object.isRequired
}
