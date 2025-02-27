import React from "react";
import "./styles/Card.css";
import CardIcon from "./CardIcon";
import Tooltip from "./Tooltip";

export default function Card({ title, description, isOkay }) {
  const cardColor = {
    1: "safe",
    2: "warning",
    3: "danger",
  }[isOkay];

  return (
    <div className={`card-wrapper ${cardColor}`}>
      <div className="card-text-top">
        <span className="card-text-title">{title}</span>
        <Tooltip isOkay={isOkay}>
          <CardIcon isOkay={isOkay}></CardIcon>
        </Tooltip>
      </div>
      <div className="card-border"></div>
      <div className="card-text-bottom">
        <span className="card-text-description">{description}</span>
      </div>
    </div>
  );
}
