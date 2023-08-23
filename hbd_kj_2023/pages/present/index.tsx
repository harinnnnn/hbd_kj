"use client";

// Styles
import { PresentContainer } from "./styles";

export default function Index() {
  // TODO: 선물에 마우스 오버 하면 똥~ 하면서 커졌다 다시 원래 사이즈로 돌아가는 애니메이션 넣기
  return (
    <PresentContainer>
      <div className={"present__text"}>선물을 눌러보세요!</div>

      <div className={"present__container"}>
        <img
          className={"present__balloons"}
          src="/assets/img/ico-heart-balloons-2.png"
          alt="history 3 img"
        />
        <img
          className={"present__left"}
          src="/assets/img/ico-present-with-heart.png"
          alt="history 1 img"
        />
        <img
          className={"present__middle"}
          src="/assets/img/ico-cake.png"
          alt="history 5 img"
        />
        <img
          className={"present__right"}
          src="/assets/img/ico-present.png"
          alt="history 2 img"
        />
        <img
          className={"present__balloons"}
          src="/assets/img/ico-heart-balloons.png"
          alt="history 4 img"
        />
      </div>
    </PresentContainer>
  );
}
