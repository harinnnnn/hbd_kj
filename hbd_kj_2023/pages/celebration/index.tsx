"use client";
import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

// Styles
import { CelebrationContainer } from "./styles";

export default function Index() {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const videoOpts: YouTubeProps["opts"] = {
    width: "750",
    height: "500",
    playerVars: { autoplay: 1 },
  };

  return (
    <CelebrationContainer>
      <div className={"title"}>🎸🪩 Special Stage 🎸🪩</div>
      🐓
      <div className={"emoji emoji1"}>🎂</div>
      <div className={"emoji emoji2"}>🍀</div>
      <div className={"emoji emoji3"}>🐰</div>
      <div className={"emoji emoji4"}>✧</div>
      <div className={"emoji emoji5"}>🥳</div>
      <div className={"emoji emoji6"}>✪</div>
      <div className={"emoji emoji7"}>❤️</div>
      <div className={"emoji emoji8"}>🐓</div>
      <div className={"youtube__player"}>
        <YouTube
          videoId={"AWrXKyFzg0o"}
          opts={videoOpts}
          onReady={onPlayerReady}
        />
      </div>
    </CelebrationContainer>
  );
}
