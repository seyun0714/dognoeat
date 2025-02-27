import React, { useEffect, useRef, useState } from "react";
import "./styles/SearchBar.css";
import foodData from "@data/dognoeat.js";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ type, query }) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(query);
  const [suggestion, setSuggestion] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const [data] = useState(foodData);

  const handleClickReset = (e) => {
    e.preventDefault();
    setInputValue("");
    setSuggestion([]);
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    //console.log(value);
    setSelectedIndex(-1);

    if (value.trim() === "") {
      setSuggestion([]);
      setIsOpen(false);
      return;
    }
    const filteredSuggestions = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    const startsWithQuery = filteredSuggestions.filter((item) =>
      item.name.toLowerCase().startsWith(value.toLowerCase())
    );

    const contiansQuery = filteredSuggestions.filter(
      (item) => !item.name.toLowerCase().startsWith(value.toLowerCase())
    );

    const sortedStartWith = startsWithQuery.sort((a, b) =>
      a.name.localeCompare(b.name, "ko")
    );

    const sortedContains = contiansQuery.sort((a, b) =>
      a.name.localeCompare(b.name, "ko")
    );

    const combined = [...sortedStartWith, ...sortedContains].slice(0, 5);

    setSuggestion(combined);
    setIsOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    navigate(`/detail/?query=${inputValue.toString()}`);
  };

  const handleKeyDown = (e) => {
    if (inputValue === "") {
      return;
    }
    if (e.code === "Enter") {
      e.preventDefault();
      setIsOpen(false);
      navigate(`/detail/?query=${inputValue.toString()}`);
    } else if (e.code === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, suggestion.length - 1));
      if (selectedIndex !== -1) setInputValue(suggestion[selectedIndex].name);
    } else if (e.code === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
      if (selectedIndex !== -1) setInputValue(suggestion[selectedIndex].name);
    }
  };

  const handleSuggestionClick = (e, suggestValue) => {
    e.stopPropagation();
    navigate(`/detail/?query=${inputValue.toString()}`);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  const getStatusClassName = (isOkay) => {
    const baseClass = "search-suggestion";
    const statusClass = {
      1: "safe",
      2: "warning",
      3: "danger",
    }[isOkay];

    return `${baseClass} ${statusClass}`;
  };

  return (
    <div className={`search-wrapper ${type}`}>
      <div
        className={
          inputValue !== ""
            ? `search-bar-wrapper isopen ${type}`
            : `search-bar-wrapper ${type}`
        }
      >
        <form className="search-bar-form" onSubmit={handleSubmit}>
          <input
            className="search-bar-input"
            value={inputValue}
            type="text"
            placeholder="검색어를 입력하세요"
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            onFocus={() => setIsOpen(true)}
          />
          <div className="search-bar-button-wrapper">
            <button
              className={
                inputValue
                  ? "search-bar-input-reset"
                  : "search-bar-input-reset hidden"
              }
              onClick={handleClickReset}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            <button className="search-bar-button" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
      {isOpen && suggestion.length > 0 && (
        <div className="search-suggestion-wrapper">
          <ul className="search-suggestion-list">
            {suggestion.map((suggestion) => (
              <li
                key={suggestion.id}
                onClick={(e) => handleSuggestionClick(e, suggestion)}
                className={getStatusClassName(suggestion.isOkay)}
              >
                <span>{suggestion.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
