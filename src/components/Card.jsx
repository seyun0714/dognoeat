import React from "react";
import "./styles/Card.css";

export default function Card({ title, description, isOkay }) {
  const cardColor = {
    1: "safe",
    2: "warning",
    3: "danger",
  }[isOkay];

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
