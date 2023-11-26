import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("Setting TimeOut");
    setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("Setting Interval");
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    return clearInterval(timer);
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
