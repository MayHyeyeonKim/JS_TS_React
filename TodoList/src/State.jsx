import './App.css'
import React, {useState} from 'react';

// 컴포넌트화 시키기 (반복되는 것 -> 재활용)
// 1. 인풋창에 값이 있고 버튼이 있다.
// 2. 인풋창에 값을 입력하고 버튼을 클릭하면 아이템이 추가가 된다.
// 3. 아이템 삭제버튼을 누르면 삭제가 가능하다.
export default function App() {
  let count = 0
  const [count2, setCount2] = useState(0)
  const increase = () =>{
    count = count + 1
    setCount2(count2 + 1)
    console.log('count work?', count, "state count2", count2)
  }
  return (
    <main>
      <div>{count}</div>
      <div>state : {count2}</div>
      <button onClick={increase}>increasing</button>
    </main>
  )
}
