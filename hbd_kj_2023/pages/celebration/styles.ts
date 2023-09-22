import styled from "@emotion/styled";

export const CelebrationContainer = styled.section`
  height: 100vh;
  padding-top: 50px;
  text-align: center;
  background: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .title {
    font-size: 30px;
    margin-bottom: 15px;
    font-family: "bitbit";
  }

  & > .polaroid__template {
    width: 700px;
    height: 610px;
    padding-top: 20px;
    background: white;

    & > .polaroid__text {
      margin-top: 14px;
    }
  }

  & > img {
    margin-top: 16px;
  }
`;
