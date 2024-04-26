import React, { useState } from 'react'

function State() {
    let count_ = 0
    const [count, setCount] = useState(0)
    const increase = () => {
        count_ += 1
        console.log(count_)
        setCount(count + 1)
    }
    console.log(count) //비동기적이다

    //스테이트를 업데이트 시킬 때마다 이 State()함수를 다시 실행하니 count_가 계속 초기화가 되니까 계속 1만 나옴
  return (
    <div>
        <div>State</div>
        <div>{count_}</div>
        <div>{count}</div>
        <button onClick={increase}>increment</button>
    </div>
  )
}

export default State