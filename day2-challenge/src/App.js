
import Timer from "./Timer";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(null);

  const handleStart = () => {
    console.log("timer started");
    setIsRunning(true);
    setStartTime(Date.now());
  };

  const handleStop = () => {
    console.log("timer stopped");
    setIsRunning(false);
  };

  const handleReset = () => {
    setTimer(0);
    setIsRunning(false);
    setStartTime(null);
  };

  useEffect(() => {
    const storedStartTime = localStorage.getItem("startTime");
    const storedIsRunning = localStorage.getItem("isRunning");

    if (storedStartTime) {
      setStartTime(parseInt(storedStartTime, 10));
    }

    if (storedIsRunning === "true") {
      setIsRunning(true);
    }
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem("startTime", startTime);
      localStorage.setItem("isRunning", isRunning.toString());
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [startTime, isRunning]);

  return (
    <div className="App">
      <Timer
        timer={timer}
        startTime={startTime}
        isRunning={isRunning}
        setTimer={setTimer}
      />
      <button class="button" onClick={handleStart}>
        Start
      </button>
      <button class="button" onClick={handleStop}>
        Stop
      </button>
      <button class="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default App;
