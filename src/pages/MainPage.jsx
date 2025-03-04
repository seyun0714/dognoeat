import React from "react";
import Header from "../components/Header";
import MainLogo from "../components/MainLogo";
import SearchBar from "../components/SearchBar";
import WarningMessage from "../components/WarningMessage";
import Footer from "../components/Footer";
import "./styles/pages.css";
import CategoryMenu from "../components/CategoryMenu";

export default function MainPage() {
  return (
    <div className="page-wrapper">
      <Header></Header>
      <div className="main-content-wrapper">
        <MainLogo></MainLogo>
        <SearchBar type={"home"} query={""}></SearchBar>
        <div className="category-nav">
          <CategoryMenu id={1}></CategoryMenu>
          <CategoryMenu id={2}></CategoryMenu>
          <CategoryMenu id={3}></CategoryMenu>
          <CategoryMenu id={4}></CategoryMenu>
        </div>
        <WarningMessage />
      </div>
      <Footer></Footer>
    </div>
  );
}
