import { PomodoroTimeIntervals } from './handleKeyBoardPressed';
import {
  secondaryColor,
  tertiaryColor,
  primaryColor,
} from 'src/styling/colorsPalette';

export const getColorByTimerStatus = (duration, isWorking) => {
  if (duration !== PomodoroTimeIntervals.WORK) {
    return tertiaryColor;
  }
  if (isWorking) {
    return secondaryColor;
  }
  return primaryColor;
};
