import React, { useState } from 'react';
import './App.css'
import TodoBoard from "./components/TodoBoard.jsx"



// 컴포넌트화 시키기 (반복되는 것 -> 재활용)
// 1. 인풋창에 값이 있고 버튼이 있다.
// 2. 인풋창에 값을 입력하고 버튼을 클릭하면 아이템이 추가가 된다.
// 3. 아이템 삭제버튼을 누르면 삭제가 가능하다.

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addItem = () => {
    console.log("I am here!", inputValue);
    setTodoList([...todoList, inputValue]);
  };

  const deleteItem = () => {

  };

  return (
    <main>
      <input
        value={inputValue}
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={addItem}>추가</button>
      <button onClick={deleteItem}>삭제</button>
      <TodoBoard todoList={todoList} />
    </main>
  );
}
