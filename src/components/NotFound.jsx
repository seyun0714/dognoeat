import React from "react";
import "./styles/NotFound.css";

export default function NotFound({ query }) {
  return (
    <div className="notfound-wrapper">
      <div className="notfound-border">
        <span className="notfound-text">{`'${query}'에 대한 검색결과가 없습니다.`}</span>
      </div>
    </div>
  );
}
