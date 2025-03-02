import React from "react";
import "./styles/Header.css";

export default function Header() {
  return (
    <>
      <header>
        <a href="/" aria-label="홈페이지 이동">
          <div className="header-image"></div>
        </a>
      </header>
    </>
  );
}
