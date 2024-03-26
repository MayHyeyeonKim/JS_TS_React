import React from 'react'

function Clock() {
  return (
    <div>
        <h1>Hello React!</h1>
        <h2>Current Time: {new Date().toLocaleTimeString()}</h2>
    </div>
  )
}

export default Clock