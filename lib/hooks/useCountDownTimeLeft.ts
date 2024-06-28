import { useRef, useState, useEffect } from "react";
import { TimeLeft } from "../type";
import { convertToTimeLeft } from "../utils/timer";

export function useCountDownTimeLeft(counterSecond: number): TimeLeft {
  const leftCounterMs = useRef(counterSecond);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    convertToTimeLeft(counterSecond)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(convertToTimeLeft(--leftCounterMs.current));

      if (leftCounterMs.current <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return timeLeft;
}
