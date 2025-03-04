import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/CategoryMenu.css";

export default function CategoryMenu({ id, isActive }) {
  const navigate = useNavigate();

  const categoryName = {
    1: "과일",
    2: "채소",
    3: "육류",
    4: "기타",
  }[id];

  const onClickCategory = (categoryid) => {
    navigate(`/category/?id=${categoryid}`);
  };

  return (
    <div
      className={
        isActive ? `category-menu-wrapper active` : `category-menu-wrapper`
      }
    >
      <a onClick={() => onClickCategory(id)} className="category-menu-go">
        <span aria-label={categoryName}> {categoryName}</span>
      </a>
    </div>
  );
}
