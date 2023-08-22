"use client";

// Styles
import { TextCakeContainer } from "./styles";

export default function Home() {
  return (
    <TextCakeContainer>
      <div className={"text-cake__candles"}>
        <img src="/assets/img/ico-candle-three.png" alt="" />
        <img src="/assets/img/ico-candle-zero.png" alt="" />
      </div>
      <div className={"text-cake__first-line"}>HAPPY</div>
      <div className={"text-cake__middle-line"}>BIRTHDAY</div>
      <div className={"text-cake__last-line"}>KYUJIN</div>
    </TextCakeContainer>
  );
}
