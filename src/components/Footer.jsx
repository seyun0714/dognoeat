import React from "react";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-email-wrapper">
          <a href="mailto:dognoeat0@gmail.com" className="footer-email">
            dognoeat0@gmail.com
          </a>
        </div>
        <div className="footer-copyright">
          ©2025 DogNoEat. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
