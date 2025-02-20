import React from "react";
import "./styles/Card.css";

export default function Card({ title, description, isOkay }) {
  return (
    <div className="card-wrapper">
      <div className="card-isokay">
        <span>{isOkay}</span>
      </div>
      <div className="card-text-wrapper">
        <div className="card-text-title">
          <span>{title}</span>
        </div>
        <div className="card-text-description">
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
}
