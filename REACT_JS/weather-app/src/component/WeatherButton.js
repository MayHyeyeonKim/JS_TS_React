import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity}) => {
  console.log(cities)
  return (
    <div className='button-container'>
        <Button variant="dark" className='button'>Current</Button>
        {cities.map((item, index)=>(
          <Button key={index} variant="dark" className='button' onClick={()=>{setCity(item)}}>{item}</Button>
        ))}
    </div>
  )
}

export default WeatherButton