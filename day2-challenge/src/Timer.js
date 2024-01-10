import { useEffect } from "react";
import "./App.css";

function Timer({ timer, startTime, isRunning, setTimer }) {
  useEffect(() => {
    let interval;
    if (isRunning) {
      setTimer(
        startTime !== null ? Math.floor((Date.now() - startTime) / 1000) : 0
      );

      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, setTimer, startTime]);

  return (
    <>
      <div class="heading">Timer in Seconds</div>
      <p class="timer">{timer}</p>
    </>
  );
}
export default Timer;
