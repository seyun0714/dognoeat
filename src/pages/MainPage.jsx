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
        <SearchBar type={"home"} query={""}></SearchBar>
        <div className="main-content-caution-wrapper">
          <span className="main-content-caution">
            강아지마다 알러지 및 건강 상태가 다를 수 있으므로, 안전성이 확인된
            음식이라 하더라도 처음에는 소량만 급여하시고 반응을 주의 깊게
            관찰하시기 바랍니다.
          </span>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
