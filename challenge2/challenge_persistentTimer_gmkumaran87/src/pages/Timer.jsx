import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import onmessage from "../common/worker";

const Timer = (props) => {
  const localMin = localStorage.getItem("minutes");
  const localSec = localStorage.getItem("seconds");

  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(59);
  // const [startTimer, setStartTimer] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  // const [worker, setWorker] = useState(null);

  const handleStart = () => {
    // setStartTimer(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };
  const handleReset = () => {
    setMinutes(24);
    setSeconds(59);
    setIsPaused(false);
  };

  // console.log("Interval: " + interval);

  // Web Worker useEffect
  // useEffect(() => {
  //   const myWorker = new Worker(onmessage);

  //   myWorker.onmessage = function (event) {
  //     console.log("onMessage", event);
  //   };
  //   // Save the worker instance to state
  //   setWorker(myWorker);

  //   // Clean up the worker when the component unmounts
  //   return () => myWorker.terminate();
  // }, []);

  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      if (seconds > 0) {
        // console.log("Seconds", seconds);
        setSeconds((prev) => {
          localStorage.setItem("seconds", prev);
          localStorage.setItem("minutes", minutes);
          return prev - 1;
        });
      } else if (seconds === 0) {
        if (minutes > 0) {
          setSeconds(59);
          setMinutes((prev) => prev - 1);
        } else if (minutes === 0) {
          setMinutes(0);
          setSeconds(0);
          clearInterval(interval);
        }
      }
    }, 1000);

    // console.log("Interval", { isPaused, startTimer, interval });
    if (isPaused) {
      clearInterval(interval);
    }

    return () => {
      // localStorage.setItem("minutes", minutes);
      clearInterval(interval);
    };
  }, [seconds, isPaused]);

  useEffect(() => {
    if (localStorage.getItem("minutes")) {
      setMinutes(localStorage.getItem("minutes"));
      setSeconds(localStorage.getItem("seconds"));
    }
  }, []);

  return (
    <div className="pt-20 w-full flex flex-col items-center justify-center gap-10">
      <div className="text-white text-9xl flex items-center gap-4">
        <div>{minutes}</div>
        <span>:</span>
        <div>{seconds}</div>
      </div>
      <div className="flex items-center gap-4 text-red-primary text-xl font-bold">
        <button
          className="bg-white  rounded-md py-2.5 px-5"
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className="bg-white rounded-md py-2.5 px-5"
          onClick={handlePause}
        >
          Pause
        </button>
        <button
          className="bg-white  rounded-md py-2.5 px-5 "
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

Timer.propTypes = {};

export default Timer;
