import { useState, useEffect } from "react";

export default function useTitleSwitcher(titles = [], intervalTime = 3000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!titles.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [titles, intervalTime]);

  return titles[index];
}
