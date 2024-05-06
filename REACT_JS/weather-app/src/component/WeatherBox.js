import React from 'react'

const WeatherBox = ({weather}) => {
    console.log("weather?", weather)
  return (
    <div className='weather-box'>
        {/* <div>{weather && weather.name}</div> */}
        <h1>{weather?.name}</h1>
        {/* <h3>{weather?.main.temp}°C / {(weather?.main.temp * 9/5) + 32}°F</h3>
        <h3>Status: {weather?.weather[0].description}</h3>
        <h3>Humidity: {weather?.main.humidity}</h3> */}
    </div>
  )
}

export default WeatherBox