import styled from "@emotion/styled";

export const ModalOverlay = styled.div`
  //width: 100vw;
  //height: 100vh;
  //background: rgba(0, 0, 0, 0.1);
  //opacity: 0.3;
`;
export const ModalContainer = styled.section`
  width: 500px;
  min-height: 400px;
  height: fit-content;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid rebeccapurple;
  border-radius: 15px;
  background: #fff;
  z-index: 1000;
  animation: fadein 0.8s;

  & > .close__btn {
    width: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
