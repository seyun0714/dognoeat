import React from "react";
import "./styles/MainLogo.css";

export default function MainLogo() {
  return (
    <>
      <div className="main-logo-wrapper">
        <div className="main-logo"></div>
        <span className="main-title">DogNoEat</span>
        <span className="main-description">
          강아지가 먹을 수 있는 음식인지 검색하세요.
        </span>
      </div>
    </>
  );
}
