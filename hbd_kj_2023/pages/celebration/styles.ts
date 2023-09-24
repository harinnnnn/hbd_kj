import styled from "@emotion/styled";

export const CelebrationContainer = styled.section`
  height: 100vh;
  padding-top: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: lightgoldenrodyellow;
  position: relative;

  & > .title {
    font-size: 60px;
    font-family: PyeongChangPeace-Bold;
  }

  & > .emoji {
    position: absolute;
    font-size: 50px;
  }

  & > .emoji1 {
    left: 10%;
  }
  & > .emoji2 {
    top: 35%;
    left: 4%;
  }
  & > .emoji3 {
    top: 50%;
    left: 15%;
  }
  & > .emoji4 {
    top: 80%;
    left: 6%;
  }

  & > .emoji5 {
    top: 15%;
    right: 6%;
  }
  & > .emoji6 {
    top: 40%;
    right: 15%;
  }
  & > .emoji7 {
    top: 55%;
    right: 3%;
  }
  & > .emoji8 {
    top: 80%;
    right: 16%;
  }

  & > .youtube__player {
    margin-top: 60px;
  }
`;
