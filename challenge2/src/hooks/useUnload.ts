import { useEffect } from "react";

export const useUnload = (
  callback: () => void,
  args: { count: number; isRunning: boolean }
) => {
  const { count, isRunning } = args;
  useEffect(() => {
    window.addEventListener("beforeunload", callback);

    return () => {
      window.removeEventListener("beforeunload", callback);
    };
  }, [callback, count, isRunning]);
};
