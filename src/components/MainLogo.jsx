import React from "react";
import "./styles/MainLogo.css";
import { useNavigate } from "react-router-dom";

export default function MainLogo() {
  return (
    <>
      <div className="main-logo-wrapper">
        <a className="main-logo" href="/"></a>
        <span className="main-description">
          강아지가 먹을 수 있는 음식인지 검색하세요.
        </span>
      </div>
    </>
  );
}
