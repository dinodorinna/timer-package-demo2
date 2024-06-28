import { TimeLeft } from "../type";

export function convertToTimeLeft(counterMs: number): TimeLeft {
  const day = Math.floor(counterMs / 86400);
  const hour = Math.floor((counterMs - day * 86400) / 3600);
  const minute = Math.floor((counterMs - day * 86400 - hour * 3600) / 60);
  const second = counterMs - day * 86400 - hour * 3600 - minute * 60;

  return {
    day,
    hour,
    minute,
    second,
  };
}
