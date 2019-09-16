import React from "react";
import ChoiceCard from "./ChoiceCard";
import "./ChoiceButton.css";

const ChoiceButton = ({ choice, handleClick }) => (
  <button className="choice-btn" onClick={() => handleClick(choice)}>
    <ChoiceCard choice={choice} />
  </button>
);

export default ChoiceButton;
