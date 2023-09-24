import styled from "@emotion/styled";

export const HbdContainer = styled.main`
  & > .footer {
    text-align: center;
    padding: 20px 0;
    background: linear-gradient(lightgoldenrodyellow, #fef3f5);

    & > .line {
      font-size: 10px;
      margin: 10px 0;
    }

    & > .developer {
      font-size: 12px;
      margin-top: 5px;
    }
  }
`;
