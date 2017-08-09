import React, { PropTypes } from 'react'
import moment from 'moment'
import './styles.scss'
import { getWeatherPic } from '../../../api/Weather'

function WeatherCard ({ cardData, mode }) {
  const {
    dt
  //  location,
  //  temp,
  //  speed
  } = cardData
  // add , description to cardData.weather below
  const iconCode = cardData.weather[0].icon
  const iconImg = getWeatherPic(iconCode)
  const realDate = moment(dt * 1000).format('dddd, MMMM D')
  if (mode === 'small') {
    return (
      <div className='smWeatherCard'>
        <img className='imgDisplay'src={iconImg} alt={'weather icon'} />
        <h2>{realDate}</h2>
      </div>
    )
  } else if (mode === 'large') {
    return (
      <div>
      </div>
    )
  }
}

WeatherCard.propTypes = {
  cardData: PropTypes.object.isRequired,
  mode: PropTypes.oneOf(['small', 'large']).isRequired
}

WeatherCard.defaultProps = {

}


export default WeatherCard
