import './App.css';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';

function App() {
  // const [count, setCount] = useState(0);
  const count = useSelector(state=>state.count)
  const id = useSelector(state=>state.id)
  const password = useSelector(state=>state.password)

  const dispatch = useDispatch()

  const increase=()=>{
    dispatch({type:"INCREMENT", payload: {num:5}})
    // setCount(count + 1);
  }

  const decrease=()=>{
    dispatch({type:"DECREASE", payload:{num:5}})
  }

  const login=()=>{
    dispatch({type:"LOGIN", payload:{id:"Maychu", password:"987"}});
  }

  return (
    <div>
      <h1>{id}, {password}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>increase!</button>
      <button onClick={login}>Login</button>
      <button onClick={decrease}>decrease</button>
      <Box />
    </div>
  );
}

export default App;
