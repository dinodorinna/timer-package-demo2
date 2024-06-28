import { useCountDownTimeLeft } from "../hooks/useCountDownTimeLeft";

type CountDownTimerProps = {
  counterSecond: number;
};

export function CountDownTimer({ counterSecond }: CountDownTimerProps) {
  const timeLeft = useCountDownTimeLeft(counterSecond);

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <div>{timeLeft.day}</div>:
      <div>
        {timeLeft.hour.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </div>
      :
      <div>
        {timeLeft.minute.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </div>
      :
      <div>
        {timeLeft.second.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </div>
    </div>
  );
}
