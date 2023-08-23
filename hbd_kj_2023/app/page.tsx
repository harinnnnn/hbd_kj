"use client";

// Styles
import { HbdContainer } from "@/app/styles";

// Components
import Main from "../pages/main";
import History from "../pages/history";
import Present from "../pages/present";

export default function Home() {
  return (
    <HbdContainer>
      <Main />
      <History />
      <Present />
    </HbdContainer>
  );
}
