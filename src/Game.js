import React, { Component } from "react";
import ChoiceButton from "./ChoiceButton";
import ScoreCard from "./ScoreCard";
import "./Game.css";

class Game extends Component {
  state = {
    playerChoice: null,
    computerChoice: null,
    resultMsg: null,
    playerScore: 0,
    computerScore: 0
  };

  getComputerChoice = () => {
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
      computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    }
    return computerChoice;
  };

  getWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      return "tie";
    }
    if (playerChoice === "rock") {
      return computerChoice === "scissors" ? "player" : "computer";
    }
    if (playerChoice === "paper") {
      return computerChoice === "rock" ? "player" : "computer";
    }
    if (playerChoice === "scissors") {
      return computerChoice === "rock" ? "computer" : "player";
    }
  };

  updateScoreAndShowResult = (playerChoice, computerChoice) => {
    const winner = this.getWinner(playerChoice, computerChoice);
    console.log("updateScoreAndShowResult, winner", winner);
    switch (winner) {
      case "tie":
        this.setState(prevState => {
          return {
            playerChoice,
            computerChoice,
            playerScore: prevState.playerScore + 1,
            computerScore: prevState.computerScore + 1,
            resultMsg: "it's a tie!"
          };
        });
        break;
      case "computer":
        this.setState(prevState => {
          return {
            playerChoice,
            computerChoice,
            computerScore: prevState.computerScore + 1,
            resultMsg: "computer wins!"
          };
        });
        break;
      case "player":
        this.setState(prevState => {
          return {
            playerChoice,
            computerChoice,
            playerScore: prevState.playerScore + 1,
            resultMsg: "you win!"
          };
        });
        break;
      default:
        break;
    }
  };

  runGame = playerChoice => {
    const computerChoice = this.getComputerChoice();
    this.updateScoreAndShowResult(playerChoice, computerChoice);
  };

  restartGame = () => {
    this.setState({
      playerChoice: null,
      computerChoice: null,
      resultMsg: null
    });
  };

  render() {
    const {
      playerChoice,
      computerChoice,
      playerScore,
      computerScore,
      resultMsg
    } = this.state;
    return (
      <div className="container">
        <div className="score-container">
          <ScoreCard label="you" score={playerScore} choice={playerChoice} />
          <ScoreCard
            label="computer"
            score={computerScore}
            choice={computerChoice}
          />
        </div>
        {resultMsg ? (
          <div className="results">
            <h1>{resultMsg}</h1>
            <button className="restart-btn" onClick={this.restartGame}>
              try again
            </button>
          </div>
        ) : (
          <div className="choice-btn-group">
            <ChoiceButton choice="rock" handleClick={this.runGame} />
            <ChoiceButton choice="paper" handleClick={this.runGame} />
            <ChoiceButton choice="scissors" handleClick={this.runGame} />
          </div>
        )}
      </div>
    );
  }
}

export default Game;
