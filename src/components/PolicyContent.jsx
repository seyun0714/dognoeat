import React from "react";
import "./styles/PolicyContent.css";

export default function PolicyContent() {
  return (
    <div className="policy-detail-content-wrapper">
      <h1>DogNoEat 쿠키 및 개인정보 처리방침</h1>

      <section>
        <h2>1. 소개</h2>
        <p>
          DogNoEat은 사용자의 개인정보를 보호하고, 쿠키를 사용해 더 나은
          서비스를 제공하기 위해 노력합니다. 이 방침은 당사가 어떻게 개인정보를
          수집하고 사용하는지 설명합니다.
        </p>
      </section>

      <section>
        <h2>2. 쿠키란?</h2>
        <p>
          쿠키는 사용자가 웹사이트를 방문할 때 브라우저에 저장되는 작은 텍스트
          파일입니다. 당사는 쿠키를 사용해 사이트 기능 개선 및 맞춤형 광고를
          제공합니다.
        </p>
      </section>

      <section>
        <h2>3. 쿠키 사용 목적</h2>
        <p>
          당사는 Google 애드센스를 통해 광고를 제공하며, 이를 위해 쿠키를
          사용합니다. Google 애드센스는 다음과 같은 목적으로 쿠키를 활용합니다:
        </p>
        <ul>
          <li>(1) 사용자의 관심사에 맞는 광고 표시</li>
          <li>(2) 광고 성과 분석</li>
          <li>(3) 사이트 방문 데이터 수집</li>
        </ul>
      </section>

      <section>
        <h2>4. 수집되는 정보</h2>
        <p>Google 애드센스를 통해 수집되는 정보는 다음과 같습니다:</p>
        <ul>
          <li>(1) IP 주소</li>
          <li>(2) 브라우저 유형</li>
          <li>(3) 방문한 페이지 및 광고 상호작용 데이터</li>
        </ul>
        <p>
          당사는 사용자의 이름, 주소, 이메일 등 개인 식별 정보를 직접 수집하지
          않습니다.
        </p>
      </section>

      <section>
        <h2>5. Google 애드센스와의 데이터 공유</h2>
        <p>
          Google 애드센스는 제3자 광고 네트워크로, 쿠키를 사용해 광고를
          제공합니다. Google의 개인정보 처리방침은{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            여기
          </a>
          에서 확인할 수 있습니다.
        </p>
      </section>

      <section>
        <h2>6. 쿠키 관리</h2>
        <p>
          사용자는 브라우저 설정을 통해 쿠키를 관리하거나 차단할 수 있습니다.
          단, 쿠키를 비활성화하면 일부 광고 기능이 제한될 수 있습니다. Google의
          광고 설정은{" "}
          <a
            href="https://adssettings.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            여기
          </a>
          에서 조정 가능합니다.
        </p>
      </section>

      <section>
        <h2>7. 연락처</h2>
        <p>
          추가 질문이 있으시면{" "}
          <a href="mailto:dognoeat0@gmail.com">dognoeat0@gmail.com</a>로 문의해
          주세요.
        </p>
      </section>

      <section>
        <h2>8. 수정</h2>
        <p>
          이 방침은 필요 시 업데이트될 수 있으며, 최종 수정일은 [2025년 3월
          4일]입니다.
        </p>
      </section>
    </div>
  );
}
