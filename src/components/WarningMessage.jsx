import React from "react";
import "./styles/WarningMessage.css";

export default function WarningMessage() {
  return (
    <div className="warning-message-wrapper">
      <span className="warning-message-content">
        강아지마다 알러지 및 건강 상태가 다를 수 있으므로, 안전성이 확인된
        음식이라 하더라도 처음에는 소량만 급여하시고 반응을 주의 깊게 관찰하시기
        바랍니다.
      </span>
    </div>
  );
}
