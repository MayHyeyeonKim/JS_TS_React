import React from 'react'

const WeatherBox = ({weather}) => {
    console.log("weather?", weather)
  return (
    <div className='weather-box'>
        <div>{weather && weather.name}</div>
        <h2>30 / 230</h2>
        <h3>Sunny day</h3>
    </div>
  )
}

export default WeatherBox