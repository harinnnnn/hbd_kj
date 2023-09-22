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
      <div className={"footer"}>
        <div className={"line"}>♡✧。°₊·ˈ∗♡∗ˈ‧₊°。✧♡♡✧。°₊·ˈ∗♡∗ˈ‧₊°。✧♡</div>
        Lots of love for your birthday!
        <div className={"developer"}>made by harin</div>
        <div className={"line"}>♡✧。°₊·ˈ∗♡∗ˈ‧₊°。✧♡♡✧。°₊·ˈ∗♡∗ˈ‧₊°。✧♡</div>
      </div>
    </HbdContainer>
  );
}
