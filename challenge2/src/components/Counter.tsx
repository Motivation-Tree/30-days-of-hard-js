import { useState } from "react";
import { useCounter, usePersistance, useUnload } from "../hooks";

const Counter: React.FC = () => {
  const lastCount = localStorage.getItem("lastCount");
  const lastIsRunning = localStorage.getItem("isRunning");
  const lastClosedTime = localStorage.getItem("lastClosedTime");

  const calculateBackgroundCount = usePersistance(lastClosedTime);

  const [count, setCount] = useState<number>(
    lastCount ? Number(lastCount) + calculateBackgroundCount : 0
  );
  const [isRunning, setIsRunning] = useState<boolean>(
    lastIsRunning === "true" ? true : false
  );

  useCounter(isRunning, setCount);

  useUnload(
    () => {
      localStorage.setItem("lastClosedTime", Date.now().toString());
      localStorage.setItem("lastCount", String(count));
      localStorage.setItem("isRunning", isRunning.toString());
    },
    { count, isRunning }
  );

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
    localStorage.setItem("isRunning", "false");
  };

  const handleReset = () => {
    localStorage.removeItem("lastCount");
    localStorage.removeItem("isRunning");
    localStorage.removeItem("lastClosedTime");

    setCount(0);
    setIsRunning(false);
  };

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
