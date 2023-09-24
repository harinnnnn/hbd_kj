import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const HistoryContainer = styled.section`
  height: fit-content;
  min-height: 100vh;
  padding: 50px;
  position: relative;
  background: linear-gradient(#ffffff, #fef3f5);

  & > .history__title {
    font-size: 50px;
    font-family: bitbit;
    text-align: center;
    margin: 100px 0 50px 0;
  }

  & > .emoji {
    position: absolute;
  }

  & > .emoji1 {
    top: 5%;
    left: 10%;
  }

  & > .emoji2 {
    top: 11%;
    right: 10%;
  }

  & > .emoji3 {
    top: 16%;
    left: 10%;
  }

  & > .emoji4 {
    top: 22%;
    right: 10%;
  }

  & > .emoji5 {
    top: 29%;
    left: 10%;
  }

  & > .emoji6 {
    top: 36%;
    right: 10%;
  }

  & > .emoji7 {
    top: 42%;
    left: 10%;
  }

  & > .emoji8 {
    top: 49%;
    right: 10%;
  }

  & > .emoji9 {
    top: 56%;
    left: 10%;
  }
  & > .emoji10 {
    top: 63%;
    right: 10%;
  }
  & > .emoji11 {
    top: 71%;
    left: 10%;
  }
  & > .emoji12 {
    top: 80%;
    right: 10%;
  }
  & > .emoji13 {
    top: 88%;
    left: 10%;
  }
  & > .emoji14 {
    top: 96%;
    right: 10%;
  }

  & > img {
    display: block;

    &:nth-of-type(2n) {
      margin-left: auto;
    }
  }
`;

// frameInAnimation은 애니메이션 이름
// Emotion에서 애니메이션을 정의하려면 keyframs 라는 속성을 이용해야 함.
const frameInLeftAnimation = keyframes`
  0% {
    opacity: 0; // 투명도 조절
    transform: translateX(-100%); // 위치 이동
  }

  100%{
    opacity: 1;
    transform: translateX(0%);
  }
`;

const frameInRightAnimation = keyframes`
  0% {
    opacity: 0; // 투명도 조절
    transform: translateX(100%); // 위치 이동
  }

  100%{
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const ScrollContainer = styled.div<{ ref: HTMLDivElement | null }>`
  width: 100%;
  //height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  & > .history__emoji {
    margin-bottom: 16px;
  }

  &.frame-in-left {
    // frame-in이라는 클래스 네임이 적용되면 애니메이션 효과가 작동하게 해줌.
    animation: ${frameInLeftAnimation} 2s forwards; // animation 속성에는 애니메이션 이름, 시간, fill-mode를 넣어줌.
  }

  &.frame-in-right {
    // frame-in이라는 클래스 네임이 적용되면 애니메이션 효과가 작동하게 해줌.
    animation: ${frameInRightAnimation} 2s forwards; // animation 속성에는 애니메이션 이름, 시간, fill-mode를 넣어줌.
  }
`;
