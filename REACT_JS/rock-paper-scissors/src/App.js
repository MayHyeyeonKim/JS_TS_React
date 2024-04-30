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
  const [result, setResult] = useState("")

  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user,computer) => {
    // console.log(user, " - ", computer);

    if(user.name == computer.name) return "tie";
    else if (user.name == "Rock") return computer.name == "Scissors" ? "win" : "lose";
    else if (user.name == "Scissors") return computer.name == "Paper" ? "win" : "lose";
    else if (user.name == "Paper") return computer.name = "Rock" ? "win" : "lose";
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이로 만들어주는 함수다
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem]
    console.log(randomItem)
    console.log(itemArray)
    console.log(final)
    return choice[final]

  }
  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
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
