import React from "react";
import Game from "./Game.js";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div>rock paper scissors</div>
      </header>
      <Game />
    </div>
  );
}

export default App;
