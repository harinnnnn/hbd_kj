"use client";

// Styles
import { HbdContainer } from "@/app/styles";

// Components
import Main from "../pages/main";
import History from "../pages/history";

export default function Home() {
  return (
    <HbdContainer>
      <Main />
      <History />
    </HbdContainer>
  );
}
