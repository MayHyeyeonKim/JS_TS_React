import React, { useState } from 'react';
import './App.css';
import Box from './component/Box';

//1. 2boxes (title, image, result-value)
//2. rock paper scissors buttons
//3. The value clicked is shown in the box when the button is clicked, 
//4. The computer player selects an item randomly
//5. Decide who is winner based on the results of 3 and 4
//6. The border color will be changed (winner - green, loser - red, tie - black)

const choice = {
  rock:{
    name: "Rock",
    img: "./assets/rock.jpeg",
    
  },
  paper: {
    name: "Paper",
    img: "./assets/paper.jpeg",
  },
  scissors:{
    name: "Scissors",
    img: "./assets/scissors.jpeg",
  }
}
function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const play = (userChoice) => {
    // console.log("선택됨", userChoice);
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
  };

  const randomChoice = () => {
    let randomItem = Math.random()
    
  }
  console.log(randomChoice)
  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect}/>
        <Box title="Computer" item={computerSelect}/>
      </div>
      <div className='main'>
        <button onClick={() => play("rock")}>rock</button>
        <button onClick={() => play("paper")}>paper</button>
        <button onClick={() => play("scissors")}>scissors</button>
      </div>
    </div>
  );
}

export default App;
