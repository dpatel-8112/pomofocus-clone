import React, { useState, useEffect } from "react";
import style from "./Pomodoro.module.css";

function PomodoroTime(props) {
  const initialMinute = props.initialMinute;
  const initialSecond = 0;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSecond);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start) {
      let myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval);
            setMinutes(initialMinute);
            setSeconds(initialSecond);
            setStart(false);
            document.title = `Time to Work !`;
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);

      document.title = `${minutes < 10 ? "0" + minutes : minutes} : ${
        seconds < 10 ? "0" + seconds : seconds
      } - Time to Work !`;

      return () => {
        clearInterval(myInterval);
        document.title = `Time to Work !`;
      };
    }
  }, [start, seconds, minutes]);

  return (
    <div>
      <h1 className={style.time}>
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </h1>
      <button onClick={() => setStart(!start)} className={style.startButton}>
        {start ? "STOP" : "START"}
      </button>
    </div>
  );
}

export default PomodoroTime;
