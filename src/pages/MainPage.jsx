import React from "react";
import Header from "../components/Header";
import MainLogo from "../components/MainLogo";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import "./styles/pages.css";

export default function MainPage() {
  return (
    <div className="page-wrapper">
      <Header></Header>
      <div className="main-content-wrapper">
        <MainLogo></MainLogo>
        <SearchBar type={"home"}></SearchBar>
      </div>
      <Footer></Footer>
    </div>
  );
}
