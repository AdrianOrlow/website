import { useEffect, useState } from "react";

const getScroll = () => ({
  scrollX: typeof window !== "undefined" ? window.scrollX : 0,
  scrollY: typeof window !== "undefined" ? window.scrollY : 0,
});

const useWindowScroll = (onlyOnScrollEnd = true) => {
  const [windowScroll, setWindowScroll] = useState(getScroll());

  useEffect(() => {
    let scrollId;

    const handleScroll = () => {
      if (onlyOnScrollEnd) {
        clearTimeout(scrollId);
        scrollId = setTimeout(() => setWindowScroll(getScroll()), 50);
      } else {
        setWindowScroll(getScroll());
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onlyOnScrollEnd]);

  return windowScroll;
};

export default useWindowScroll;
