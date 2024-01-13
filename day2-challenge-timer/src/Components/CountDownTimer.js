import {useState, useEffect} from 'react';

const CountDownTimer = () =>{

    const initialTime = parseInt(localStorage.getItem('timer')) || 0;
    const [time, setTime] = useState(initialTime);
    const [isActive, setIsActive] = useState(false);


  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
        localStorage.setItem('timer', time.toString());
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);



    const handleStart = ()=> {
        setIsActive(true);
    }
    const handleStop = ()=> {
        setIsActive(false);
    }
    const handleReset = ()=> {
        setTime(0);
        setIsActive(false);
        localStorage.removeItem('timer');
    }

    return (
        <div>
                  <h2>Timer: {time}s</h2>
            <button onClick = {handleStart}>Start</button>
            <button onClick = {handleStop}>Stop</button>
            <button onClick = {handleReset}>Reset</button>

        </div>
    );
}
export default CountDownTimer;