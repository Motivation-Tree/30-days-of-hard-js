import { useEffect } from "react";

export const useCounter = (
  isRunning: boolean,
  setCount: React.Dispatch<React.SetStateAction<number>>
) => {
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> = 0;

    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, setCount]);
};
