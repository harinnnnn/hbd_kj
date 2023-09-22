"use client";
import React, { useCallback, useEffect, useRef } from "react";
import Webcam from "react-webcam";

// Styles
import { CelebrationContainer } from "./styles";

export default function Index() {
  useEffect(() => {
    const audio = new Audio("/song.mp3"); // 오디오 파일 경로 설정
    // todo: 노래 다운 받아서 넣어야 함.. public 폴더에 저장
    audio.play();

    return () => {
      // 페이지를 떠날 때 오디오를 정리합니다.
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);
  return <CelebrationContainer>cake image</CelebrationContainer>;
}
