import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./styles/pages.css";
import PolicyContent from "../components/PolicyContent";

export default function MainPage() {
  return (
    <div className="page-wrapper">
      <Header></Header>
      <div className="policy-content-wrapper">
        <PolicyContent />
      </div>
      <Footer></Footer>
    </div>
  );
}
