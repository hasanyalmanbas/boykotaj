"use client";

import React from "react";

interface ScrollPosition {
  x: number;
  y: number;
}

const useScroll = (): ScrollPosition => {
  const [scrollPosition, setScrollPosition] = React.useState<ScrollPosition>({
    x: 0,
    y: 0,
  });

  const handleScroll = () => {
    setScrollPosition({
      x: window.scrollX,
      y: window.scrollY,
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
};

export default useScroll;
