import React from "react";
import rock from "./hand-rock-regular.svg";
import paper from "./hand-paper-regular.svg";
import scissors from "./hand-scissors-regular.svg";

const ChoiceCard = ({ choice }) => {
  if (choice === "rock") {
    return <img src={rock} alt="rock" />;
  } else if (choice === "paper") {
    return <img src={paper} alt="paper" />;
  } else if (choice === "scissors") {
    return <img src={scissors} alt="scissors" />;
  }
  return null;
};

export default ChoiceCard;
