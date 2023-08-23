import styled from "@emotion/styled";

export const TextCakeContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  //font-family: bitbit;
  font-family: EF_jejudoldam;
  background-image: url("/assets/bg/bg-confetti.gif");
  //background-repeat: no-repeat;
  background-size: 140%;

  & > .text-cake__candles {
    & > img:first-of-type {
      width: 60px;
    }
    & > img:nth-of-type(2) {
      width: 62px;
    }
  }

  & > .text-cake__first-line {
    font-size: 50px;
  }

  & > .text-cake__middle-line {
    font-size: 55px;
    line-height: 58px;
  }

  & > .text-cake__last-line {
    font-size: 90px;
    line-height: 130px;
  }
`;
