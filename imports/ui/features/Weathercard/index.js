import React, { PropTypes } from 'react'
import moment from 'moment'
import './styles.scss'
import { getWeatherPic } from '../../../api/Weather'

function WeatherCard ({ cardData }) {
  const {
    date
  //  location,
  //  temp,
  //  speed
  } = cardData
  const { iconCode, description } = cardData.weather[0]
  const iconImg = getWeatherPic({ iconCode })
  const realDate = moment({ date } * 1000).format('dddd, MMMM D')

  if (this.props.mode === 'small') {
    return (
      <div className='smWeatherCard'>
        <img src={iconImg} alt={'weather icon'} />
        <h2>{realDate}</h2>
      </div>
    )
  } else if (this.props.mode === 'large') {
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
  weather: [{ icon: '01d' }],
  mode: 'small'
}


export default WeatherCard
