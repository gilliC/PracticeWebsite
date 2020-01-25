const keyCodes = {
  SPACE: 'Space',
  R: 'KeyR',
  L: 'KeyL',
  S: 'KeyS',
};
export const PomodoroTimeIntervals = {
  SHORT_BREAK: 5,
  LONG_BREAK: 10,
  WORK: 25,
};
export function handleKeyBoardPressed(event, isWorking) {
  const { code } = event;
  const res = {
    isRestart: false,
    isStop: false,
    isSpacePressed: false,
    timeInterval: null,
  };
  switch (code) {
    case keyCodes.SPACE:
      res.isSpacePressed = true;
      return res;
    case keyCodes.R:
      res.isStop = true;
      res.isRestart = true;
      res.timeInterval = PomodoroTimeIntervals.WORK;
      return res;
    case keyCodes.L:
      if (!isWorking) {
        res.isRestart = true;
        res.timeInterval = PomodoroTimeIntervals.LONG_BREAK;
      }
      return res;
    case keyCodes.S:
      if (!isWorking) {
        res.isRestart = true;
        res.timeInterval = PomodoroTimeIntervals.LONG_BREAK;
      }
      return res;
    default:
      return res;
  }
}
