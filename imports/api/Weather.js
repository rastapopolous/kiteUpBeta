import axios from 'axios'

const APIKEY = '3290f42de9f8225135723e467d04e91c'
const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast/daily?'
const COUNT = 7

export function getWeatherByCity (cityName) {
  const cityQuery = `q=${cityName}`
  const units = '&units=imperial'
  const fullURL = `${BASE_URL}${cityQuery}${units}&APPID=${APIKEY}&cnt=${COUNT}`


  return (
    axios.get(fullURL)
  )
}

export function getWeatherPic (iconCode) {
  return `http://openweathermap.org/img/w/${iconCode}.png`
}
