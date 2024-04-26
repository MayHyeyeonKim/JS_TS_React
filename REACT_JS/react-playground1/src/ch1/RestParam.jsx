import React from 'react'

function RestParam() {
    let array= [5,6,7,8,9]
    let [a,b, ...rest]=array
    console.log(rest)

    let person={name:"Maychu", age:12}
    let person2={...person, address:"seattle", name:"ShibaChu"} //객체복사가 되어 참조값이 달라 완전 다른거임, 속성 추가가능
    let person3=person //주소값 참조

    console.log(person)
    console.log(person2)
    console.log(person3)

    console.log(person==person2) //false
    console.log(person==person3) //true

    let array2 = [10,20]
    let array3 = [...array2, 30,40]
    console.log(array2)
    console.log(array3)


  return (
    <div>
        <div>RestParam</div>
        <div>
            rest parameter
            array는 {JSON.stringify(array)}<br />
            rest는 {JSON.stringify(rest)}
            <br />
            <br />
            spread <br />
            person: {JSON.stringify(person)}<br />
            person2: {JSON.stringify(person2)}<br />
            person2: {JSON.stringify(person3)}<br />
            <br />
            <br />
            spread2 <br />
            person: {JSON.stringify(array2)}<br />
            person2: {JSON.stringify(array3)}<br />
        </div>
    </div>
  )
}

export default RestParam