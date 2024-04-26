import React from 'react'

function TernaryOperator() {
    let person = null;

    if(person){
        console.log(person.name)
    } else {
        console.log("There is no person")
    }

    console.log(person? person.name:"There is no person")
  return (
    <div>
        <div>TernaryOperator</div>
        <div>
            {JSON.stringify(person)}
        </div>
    </div>
  )
}

export default TernaryOperator