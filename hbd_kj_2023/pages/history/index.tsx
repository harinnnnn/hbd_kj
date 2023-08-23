"use client";

// Styles
import { HistoryContainer } from "./styles";

export default function Index() {
  // TODO: 스크롤 내리면 이미지 하나씩 애니메이션으로 등장하도록 ㅎ
  return (
    <HistoryContainer>
      <div className={"history__title"}>History of kyujin</div>
      {/*<div className={"history__title"}>💟 History of kyujin 💟</div>*/}
      💘💝😋🥰🥳🤩🐔🐰🐓🍀
      <img src="/assets/img/history-1.jpeg" alt="history 1 img" />
      <img src="/assets/img/history-2.jpeg" alt="history 2 img" />
      <img src="/assets/img/history-3.jpeg" alt="history 3 img" />
      <img src="/assets/img/history-4.jpeg" alt="history 4 img" />
      <img src="/assets/img/history-5.jpeg" alt="history 5 img" />
      <img src="/assets/img/history-6.jpeg" alt="history 6 img" />
      <img src="/assets/img/history-7.jpeg" alt="history 7 img" />
      <img src="/assets/img/history-8.jpeg" alt="history 8 img" />
    </HistoryContainer>
  );
}
