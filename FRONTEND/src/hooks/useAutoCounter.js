import { useState, useEffect } from "react";

export default function useAutoCounter(initial = 111111) {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNumber = Math.floor(100000 + Math.random() * 900000);
      setCount(newNumber);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return count;
}
