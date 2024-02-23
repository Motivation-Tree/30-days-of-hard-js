import React from "react";

const App: React.FC = () => {
  const handleStart = () => {};

  const handleStop = () => {};

  const handleReset = () => {};

  return (
    <div>
      {/* <p>{`${Math.floor(seconds / 60)}:${(seconds % 60).toLocaleString(
        "en-US",
        { minimumIntegerDigits: 2 }
      )}`}</p> */}
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default App;
