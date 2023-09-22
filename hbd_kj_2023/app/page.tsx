"use client";

// Styles
import { HbdContainer } from "@/app/styles";

// Components
import Main from "../pages/main";
import History from "../pages/history";
import Present from "../pages/present";
import Photobooth from "../pages/photobooth";
import Celebration from "../pages/celebration";

export default function Home() {
  return (
    <HbdContainer>
      <Main />
      <History />
      <Present />
      <Photobooth />
      <Celebration />
    </HbdContainer>
  );
}
