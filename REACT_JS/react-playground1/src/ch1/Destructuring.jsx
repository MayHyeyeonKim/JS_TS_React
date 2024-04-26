import React from 'react'

function Destructuring() {
    let person={
        name: "may",
        age: 20
    }
    // let name = person.name
    // let age = person['age']

    let {name,age} = person
    console.log(name, age)

    let array = [1,2,3,4]
    let [first,second]=array

    console.log(first,second)
  return (
    <div>
        <div>Destructuring</div>
        <div>{JSON.stringify(person)}</div>
    </div>
    
  )
}

export default Destructuring