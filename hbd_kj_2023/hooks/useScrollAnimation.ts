import { useEffect, useRef, useState } from "react";

export const useScrollAnimation = ({ scrollRef }: { scrollRef: any }) => {
  const [isInViewport, setIsInViewport] = useState(false);

  // desc: IntersectionObserver의 객체(observer)가 ref를 감지해서 callback을 트리거하는 코드
  useEffect(() => {
    // desc: IntersectionObserverEntry 객체의 속성
    // isIntersecting -> 관찰 대상 요소가 현재 뷰포트 내에 보이는 지 boolean 값으로 리턴
    // intersectionRatio -> 관찰 대상 요소와 뷰포트의 교차 영역 비율이며, 0~1까지의 범위 내에서 0은 교차 영역이 없음, 1은 관찰 대상 요소가 완전히 뷰포트 내에 있음을 의미함.
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry, index) => {
        // 콜백함수 내의 entry에서 사용자의 viewport에 ref를 적용한 ScrollContainer 컴포넌트가 진입했는지 판단
        if (entry.isIntersecting) {
          setIsInViewport(true);
        }
      });
    };

    // observer가 스크롤 감지하고 콜백함수 호출
    const observer = new IntersectionObserver(callback, { threshold: 0.5 });

    if (scrollRef?.current) observer.observe(scrollRef?.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { isInViewport };
};
