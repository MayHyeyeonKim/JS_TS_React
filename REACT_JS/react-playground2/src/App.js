import React from 'react';
import { useState } from "react"
import "./App.css";
import Box from "./component/Box"

function App() {
  let [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter+1);
  };
  return (
    <div>
      <Box name="Lisa" num={1}/>
      <Box name="Jennie" num={2}/>
      <Box name="Jisoo" num={3}/>
      <Box name="Rose" num={4}/>
      <div>state: {counter}</div>
      <button onClick={increase}>click!</button>
    </div>
  );
}

export default App;
