"use client";
import React from "react";

// Styles
import { HistoryContainer, ScrollContainer } from "./styles";

// Hooks
import Item from "@/pages/history/Item";

export default function Index() {
  const items = [
    {
      description: "👶🏻 baby kyukyu",
      direction: "left",
      ref: React.useRef<HTMLDivElement | null>(null),
    },
    {
      description: "👶🏻 child kyukyu",
      direction: "right",
      ref: React.useRef<HTMLDivElement | null>(null),
    },
    {
      description: "👶🏻 cute",
      direction: "left",
      ref: React.useRef<HTMLDivElement | null>(null),
    },
    {
      description: "😎👶🏻",
      direction: "right",
      ref: React.useRef<HTMLDivElement | null>(null),
    },
    {
      description: "student kyujin",
      direction: "left",
      ref: React.useRef<HTMLDivElement | null>(null),
    },
    {
      description: "🧔🏻‍♀️ Sanchez 🌮",
      direction: "right",
      ref: React.useRef<HTMLDivElement | null>(null),
    },
    {
      description: "😎 ",
      direction: "left",
      ref: React.useRef<HTMLDivElement | null>(null),
    },
    {
      description: "😎 now",
      direction: "right",
      ref: React.useRef<HTMLDivElement | null>(null),
    },
  ];

  return (
    <HistoryContainer>
      💘💝😋🥰🥳🤩🐔🐰🐓🍀
      <div className={"history__title"}>History of kyujin</div>
      {items.map((item, index) => {
        return (
          <Item
            scrollRef={item.ref}
            direction={item.direction}
            description={item.description}
            src={`/assets/img/history-${index + 1}.jpeg`}
            key={`history-picture__${index + 1}`}
          />
        );
      })}
    </HistoryContainer>
  );
}
