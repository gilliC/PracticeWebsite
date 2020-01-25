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
export function handleKeyBoardPressed(context, event) {
  const { code } = event;
  const { isWorking } = context.state;
  switch (code) {
    case keyCodes.SPACE:
      context.onPressSpace();
      break;
    case keyCodes.R:
      context.stopTimer();
      context.restartTimer(PomodoroTimeIntervals.WORK);
      break;
    case keyCodes.L:
      if (!isWorking) {
        context.restartTimer(PomodoroTimeIntervals.LONG_BREAK);
      }
      break;
    case keyCodes.S:
      if (!isWorking) {
        context.restartTimer(PomodoroTimeIntervals.SHORT_BREAK);
      }
      break;
    default:
      return;
  }
}
