import React from 'react'

function Book(props) {
  return (
    <div>
        <h1>{`The name of this book is ${props.name}`}</h1>
        <h2>{`This book consists of a total of ${props.numOfPage} pages`}</h2>
    </div>
  )
}

export default Book