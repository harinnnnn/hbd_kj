import styled from "@emotion/styled";

export const PresentContainer = styled.section`
  height: 100vh;
  padding: 30px;

  & > .present__text {
    font-size: 32px;
    font-family: "Pretendard-Regular";
  }

  & > .present__container {
    text-align: center;
    position: relative;
    margin-top: 120px;

    & > img {
      width: 200px;
      position: absolute;
    }

    & > .present__balloons {
      left: 0;
    }

    & > .present__left {
      width: 300px;
      left: 20%;
      top: 100px;
    }

    & > .present__middle {
      width: 300px;
      left: 50%;
      transform: translate(-50%);
    }

    & > .present__right {
      width: 300px;
      right: 20%;
      top: 100px;
    }
  }
`;
