"use client";
import React, { useCallback, useRef } from "react";
import Webcam from "react-webcam";

// Styles
import { PhotoContainer } from "./styles";

const Index = () => {
  const webcamRef = useRef<Webcam>(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    // 캡처된 이미지를 저장하는 함수를 호출합니다.
    saveImage(imageSrc);
  }, [webcamRef]);

  const saveImage = (imageSrc: any) => {
    // 이미지를 저장하거나 전송하는 작업을 수행합니다.
    // 여기서는 이미지를 다운로드하는 예제를 보여드립니다.
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = "2023_kj_day.png"; // 파일명 설정
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <PhotoContainer>
      <div className={"title"}>★ welcome to rin&apos;s photobooth ★</div>

      <div className={"polaroid__template"}>
        <Webcam audio={false} ref={webcamRef} screenshotFormat={"image/jpeg"} />
        <div className={"polaroid__text"}>
          🎂2023.09.27🎂
          <br />
          규진이 30번째 생일 기념샷
        </div>
      </div>

      <img
        src="/assets/img/ico-photo.png"
        alt="camera button"
        width={70}
        onClick={capture}
      />
    </PhotoContainer>
  );
};

export default Index;
