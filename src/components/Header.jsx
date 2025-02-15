import React from "react";
import "./styles/Header.css";

export default function Header() {
  return (
    <>
      <header>
        <a href="/">
          <div className="header-image"></div>
          <span className="header-title"></span>
        </a>
      </header>
    </>
  );
}
