import React, { Component } from 'react'
import BoxClass from './component/box/BoxClass'
import ScoreClass from './component/score/ScoreClass';
import ButtonClass from './component/button/ButtonClass'

const choice = {
    rock: {
      name: "Rock",
      img: "./assets/rock.jpeg",
    },
    paper: {
      name: "Paper",
      img: "./assets/paper.jpeg",
    },
    scissors: {
      name: "Scissors",
      img: "./assets/scissors.jpeg",
    },
  };

export default class AppClass extends Component {
    constructor(){
        super();
        this.state = {
            userSelect: null,
            computerSelect: null,
            result: "",
            userScore: 0,
            computerScore: 0,
        };
        console.log("constructor")
    }

    play = (userChoice)=>{
        let computerChoice = this.randomeChoice();
        this.setState({
            userSelect: choice[userChoice],
            computerSelect: computerChoice,
            result: this.judgement(choice[userChoice], computerChoice),
        });
        console.log("play", this.state);
    };

    randomeChoice = () =>{
        let itemArray = Object.keys(choice);
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];
        return choice[final];
        console.log("randomeChoice", this.state);
    };

    judgement = (user, computer) => {
        if (user.name === computer.name) {
            return "tie";
          } else if (
            (user.name === "Rock" && computer.name === "Scissors") ||
            (user.name === "Scissors" && computer.name === "Paper") ||
            (user.name === "Paper" && computer.name === "Rock")
          ) {
            this.setState({userScore: this.state.userScore + 1});
            return "win";
          } else {
            this.setState({computerScore: this.state.computerScore + 1});
            return "lose";
          }
          console.log("judgement", this.state);
    };
    componentDidMount(){
      console.log("componentDidMount")
    }
    componentDidUpdate(){
      console.log("componentDidUpdate", this.state);
    }
  render() {
    console.log("render")
    return (
        <div className="app-main">
        <div className="main">Class Fun Rock Paper Scissors</div>
        <div className="score-main">
          <ScoreClass label="User Score" score={this.state.userScore} />
          {this.state.userScore < 3 && <ScoreClass label="Computer Score" score={this.state.computerScore} />}
        </div>
        <div className="box-main">
          <BoxClass title="You" item={this.state.userSelect} result={this.state.result} />
          <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result} />
        </div>
        <div className="button-main">
          <ButtonClass onClick={this.play} choice="rock" />
          <ButtonClass onClick={this.play} choice="paper" />
          <ButtonClass onClick={this.play} choice="scissors" />
        </div>
      </div>
    )
  }
}
