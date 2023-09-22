"use client";

// Styles
import { ModalContainer, ModalOverlay } from "./styles";
import { ModalState } from "@/pages/present";

interface ModalProps {
  modal: ModalState<JSX.Element>;
  hide: Function;
}
export default function Index({ modal, hide }: ModalProps) {
  return modal.isOpen ? (
    <>
      <ModalOverlay />
      <ModalContainer>
        {modal.content}
        <img
          className={"close__btn"}
          src="/assets/img/ico-close-modal.svg"
          alt="close modal"
          onClick={() => hide()}
        />
      </ModalContainer>
    </>
  ) : null;
}
