"use client";

// Styles
import { ScrollContainer } from "./styles";

// Hooks
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type props = {
  scrollRef: any;
  description: string;
  direction: string;
  src: string;
};
export default function Item({
  scrollRef,
  description,
  src,
  direction,
}: props) {
  const { isInViewport } = useScrollAnimation({ scrollRef });

  // isInViewport가 true가 되면 ScrollContainer의 className에 frame-in을 삽입
  return (
    <ScrollContainer
      ref={scrollRef}
      className={isInViewport ? `frame-in-${direction}` : ""}
    >
      <div className={"history__emoji"}>{description}</div>
      <img src={src} alt="history 4 img" width={600} />
    </ScrollContainer>
  );
}
