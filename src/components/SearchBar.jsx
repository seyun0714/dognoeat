import React, { useState } from "react";
import "./styles/SearchBar.css";
import foodData from "../database/dognoeat.json";

export default function SearchBar({}) {
  const [inputValue, setInputValue] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [data] = useState(foodData);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    console.log(value);

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

    const combined = [...sortedStartWith, ...sortedContains].slice(0, 3);

    setSuggestion(combined);
    setIsOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <div className="search-wrapper">
      <div className="search-bar-wrapper">
        <form
          className="search-bar-form"
          onSubmit={(event) => handleSubmit(event)}
        >
          <input
            className="search-bar-input"
            value={inputValue}
            type="text"
            placeholder="검색어를 입력하세요"
            onChange={(event) => handleInputChange(event)}
          />
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
        </form>
      </div>
      {isOpen && suggestion.length > 0 && (
        <div className="search-suggestion-wrapper">
          <ul className="search-suggestion-list">
            {suggestion.map((suggestion) =>
              suggestion.isOkay ? (
                <li
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="search-suggestion yes"
                >
                  <span>{suggestion.name}</span>
                </li>
              ) : (
                <li
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="search-suggestion no"
                >
                  <span>{suggestion.name}</span>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
