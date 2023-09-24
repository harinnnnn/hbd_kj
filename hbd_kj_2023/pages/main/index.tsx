"use client";

// Styles
import { TextCakeContainer } from "./styles";

const Index = () => {
  return (
    <TextCakeContainer>
      <div className={"text-cake__candles"}>
        <img src="/assets/img/ico-candle-three.png" alt="ico-candle-three" />
        <img src="/assets/img/ico-candle-zero.png" alt="ico-candle-zero" />
      </div>
      <div className={"text-cake__first-line"}>HAPPY</div>
      <div className={"text-cake__middle-line"}>BIRTHDAY</div>
      <div className={"text-cake__last-line"}>KYUJIN</div>
    </TextCakeContainer>
  );
};

export default Index;
