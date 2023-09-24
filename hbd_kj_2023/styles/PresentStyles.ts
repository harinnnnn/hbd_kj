import styled from "@emotion/styled";

export const PresentContainer = styled.section`
  height: 100vh;
  padding: 100px 50px;
  background: linear-gradient(#fef3f5, beige);

  & > .present__text {
    font-size: 46px;
    text-align: center;
    font-weight: bold;
    font-family: "PyeongChangPeace-Bold";
  }

  & > .present__container {
    width: 100%;
    margin-top: 120px;
    display: flex;
    justify-content: space-evenly;

    & > img {
      width: 300px;
      cursor: pointer;
      transition: all 0.3s ease-out;

      &:nth-of-type(2) {
        margin-bottom: 20px;
      }

      &:hover {
        transform: translateY(-50px);
      }
    }
  }
`;
