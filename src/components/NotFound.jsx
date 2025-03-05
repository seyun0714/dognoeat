import React from "react";
import "./styles/NotFound.css";

export default function NotFound({ query, type }) {
  const message = {
    search: `'${query}'에 대한 검색결과가 없습니다.`,
    category: `해당 카테고리에 속하는 결과가 없습니다.`,
  }[type];

  return (
    <div className="notfound-wrapper">
      <div className="notfound-border">
        <span className="notfound-text">{message}</span>
      </div>
    </div>
  );
}
