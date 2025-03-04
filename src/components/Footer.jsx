import React from "react";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-go-wrapper">
          <a href="mailto:dognoeat0@gmail.com" className="footer-email">
            문의: dognoeat0@gmail.com
          </a>
          <a className="footer-privacy-policy" href="/policy">
            쿠키 및 개인정보 처리 방침
          </a>
        </div>
        <div className="footer-copyright">
          ©2025 DogNoEat. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
