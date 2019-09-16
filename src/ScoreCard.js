import React from "react";
import ChoiceCard from "./ChoiceCard";
import "./ScoreCard.css";

const ScoreCard = ({ label, score, choice }) => (
  <div className="score-card">
    <h1>{label}</h1>
    <h2>{score} </h2>
    <div className="divider" />
    <div className="choice-card">
      <ChoiceCard choice={choice} />
    </div>
  </div>
);
export default ScoreCard;
