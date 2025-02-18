import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

export default function () {
  return (
    <div className="page-wrapper">
      <Header></Header>
      <div className="detail-content-wrapper">
        <SearchBar type={"detail"}></SearchBar>
      </div>
      <Footer></Footer>
    </div>
  );
}
