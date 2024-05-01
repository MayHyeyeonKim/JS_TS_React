import React from 'react'
import './Score.css';

const Score = (props) => {
  return (
    <div className='score'>
        <p>{props.label}</p>
        <p>{props.score}</p>
    </div>
  )
}

export default Score