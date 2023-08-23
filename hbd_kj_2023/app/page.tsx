"use client";

// Styles
import { HbdContainer } from "@/app/styles";

// Components
import Main from "../pages/main";
import Photos from "../pages/history";

export default function Home() {
  return (
    <HbdContainer>
      <Main />
      <Photos />
    </HbdContainer>
  );
}
