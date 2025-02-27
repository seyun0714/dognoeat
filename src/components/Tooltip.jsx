import React, { useState } from "react";
import "./styles/Tootip.css";
export default function Tooltip({ children, isOkay }) {
  const [isVisible, setIsVisible] = useState(false);

  const onClickIcon = () => {
    setIsVisible(!isVisible);
  };

  const tooltipContent = {
    1: "안전합니다.",
    2: "주의하세요.",
    3: "위험합니다.",
  }[isOkay];

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onClick={onClickIcon}
    >
      {children}
      {isVisible && <div className="tooltip-box">{tooltipContent}</div>}
    </div>
  );
}
