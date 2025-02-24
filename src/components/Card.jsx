import React from "react";
import "./styles/Card.css";

export default function Card({ title, description, isOkay }) {
  let cardColor = "";
  switch (isOkay) {
    case 1:
      cardColor = "yes";
      break;
    case 2:
      cardColor = "caution";
      break;
    case 3:
      cardColor = "no";
      break;
  }

  return (
    <div className={`card-wrapper ${cardColor}`}>
      <div className="card-text-title">
        <span>{title}</span>
      </div>
      <div className="card-border"></div>
      <div className="card-text-description">
        <span>{description}</span>
      </div>
    </div>
  );
}
