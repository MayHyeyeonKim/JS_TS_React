import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
  return (
    <div className='button-container'>
        <Button variant="dark" className='button'>Current</Button>
        <Button variant="dark" className='button'>Seoul</Button>
        <Button variant="dark" className='button'>New York</Button>
        <Button variant="dark" className='button'>Paris</Button>
        <Button variant="dark" className='button'>Sydney</Button>
    </div>
  )
}

export default WeatherButton