export const getMinutesAndSecondsFromCounter = (isStarted, duration, timerCounter) => {
  if (!isStarted) {
    return { minutesLeft: duration, secondsLeft: 0 };
  }
  let minutesLeft;
  minutesLeft = Math.ceil(duration - 1 - timerCounter / 60);
  minutesLeft = minutesLeft < 0 ? 0 : minutesLeft;
  const secondsLeft = Math.round(59 - (timerCounter % 60));
  return { minutesLeft, secondsLeft };
};
