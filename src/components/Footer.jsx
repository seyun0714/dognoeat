import React from "react";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-email-wrapper">
          <a href="mailto:seyun@gmail.com" className="footer-email">
            seyun0714@gmail.com
          </a>
        </div>
        <div className="footer-copyright">
          ©2025 DogNoEat. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
