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
      description: "👶🏻 child kyukyu 2",
      direction: "left",
      ref: React.useRef<HTMLDivElement | null>(null),
    },
    {
      description: "😎👶🏻",
      direction: "right",
      ref: React.useRef<HTMLDivElement | null>(null),
    },
    {
      description: "👦🏻 student kyujin",
      direction: "left",
      ref: React.useRef<HTMLDivElement | null>(null),
    },
    {
      description: "🧔🏻‍♀️ Sanchez 🌮",
      direction: "right",
      ref: React.useRef<HTMLDivElement | null>(null),
    },
    {
      description: "😎 college student",
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
      <div className={"history__title"}>History of kyujin</div>
      <div className={"emoji emoji1"}>💘</div>
      <div className={"emoji emoji2"}>😋</div>
      <div className={"emoji emoji3"}>💝</div>
      <div className={"emoji emoji4"}>🥰</div>
      <div className={"emoji emoji5"}>🥳</div>
      <div className={"emoji emoji6"}>🤩</div>
      <div className={"emoji emoji7"}>🐔</div>
      <div className={"emoji emoji8"}>🐰</div>
      <div className={"emoji emoji9"}>🐓</div>
      <div className={"emoji emoji10"}>🍀</div>
      <div className={"emoji emoji11"}>🎂</div>
      <div className={"emoji emoji12"}>💟</div>
      <div className={"emoji emoji13"}>💐</div>
      <div className={"emoji emoji14"}>✨</div>
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
