import React from 'react'

function Practice() {
    let name = "name";
    let age = 17;
    let person={
        name,
        age,
    }
    console.log(person)
  return (
    <div>
        <div>ch1/Practice</div>
        <div>object shorthand assignment</div>
        <br />
        <div>
            {JSON.stringify(person)}
        </div>
    </div>
  )
}

export default Practice