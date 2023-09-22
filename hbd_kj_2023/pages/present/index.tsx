"use client";
import { useEffect, useState } from "react";

// Styles
import { PresentContainer } from "./styles";

// Components
import Modal from "../../components/Modal";
import { getImgProps } from "next/dist/shared/lib/get-img-props";

export interface ModalState<Content> {
  isOpen: boolean;
  content: Content | null;
}
export default function Index() {
  const [modal, setModal] = useState<ModalState<JSX.Element>>({
    isOpen: false,
    content: null,
  });

  // TODO: 선물에 마우스 오버 하면 똥~ 하면서 커졌다 다시 원래 사이즈로 돌아가는 애니메이션 넣기
  return (
    <PresentContainer>
      <div className={"present__text"}>✧˚ʚ 선물을 눌러보세요! ɞ˚✧</div>
      <Modal
        modal={modal}
        hide={() => setModal({ isOpen: false, content: null })}
      />

      <div className={"present__container"}>
        <img
          src="/assets/img/ico-present-with-heart.png"
          alt="history 1 img"
          onClick={() => alert("기프티콘")}
        />
        <img
          src="/assets/img/ico-cake.png"
          alt="history 5 img"
          onClick={() =>
            setModal({
              isOpen: true,
              content: (
                <img
                  src={"/assets/img/porter_present.png"}
                  alt={"porter"}
                  width={400}
                />
              ),
            })
          }
        />
        <img
          src="/assets/img/ico-present.png"
          alt="history 2 img"
          onClick={() => alert("내 샤진 ㅎ")}
        />
      </div>
    </PresentContainer>
  );
}
