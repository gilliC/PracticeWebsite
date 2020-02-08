import React, { useState, useEffect } from 'react';
import Sound from 'react-sound';
import ringtone from '../../assets/loving-you.mp3';
import { PomodoroDescription } from './components/PomodoroDescription';
import { PomodoroContainer } from './components/PomodoroContainer';
import { Timer } from './components/Timer';
import { handleKeyBoardPressed, PomodoroTimeIntervals } from './logic/handleKeyBoardPressed';
import { getColorByTimerStatus } from './logic/getColorByTimerStatus';
import { getMinutesAndSecondsFromCounter } from './logic/getMinutesAndSecondsFromCounter';
import { isTimerEnded } from './logic/isTimerEnded';

export const Pomodoro = props => {
  const [timerCounter, setCount] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isWorking, setIsWorking] = useState(false);
  const [duration, setDuration] = useState(PomodoroTimeIntervals.WORK);
  const [timerFuncRef, setTimerFunc] = useState();

  useEffect(() => {
    document.addEventListener('keydown', spaceBarListener, false);
    return function cleanup() {
      document.removeEventListener('keydown', spaceBarListener, false);
    };
  });

  const spaceBarListener = event => {
    const {
      isRestart,
      isStop,
      isSpacePressed,
      timeInterval,
    } = handleKeyBoardPressed(event, isWorking);
    if (isRestart) {
      restartTimer(timeInterval);
    }
    if (isStop) {
      stopTimer();
    }
    if (isSpacePressed) {
      onPressSpace();
    }
  };
  const onPressSpace = () => {
    if (!isWorking) {
      const timer = setInterval(timerFunc, 1000);
      setTimerFunc(timer);
      setIsWorking(true);
      setIsStarted(true);
    } else {
      stopTimer();
      setIsWorking(false);
    }
  };

  const timerFunc = async () => {
    setCount(prevCount => prevCount + 1);
  };

  const stopTimer = () => {
    clearTimeout(timerFuncRef);
  };

  const restartTimer = (duration = PomodoroTimeIntervals.WORK) => {
    setCount(0);
    setIsWorking(false);
    setIsStarted(false);
    setDuration(duration);
  };

  let playingStatus = Sound.status.STOPPED;
  const color = getColorByTimerStatus(duration, isWorking);
  const { minutesLeft, secondsLeft } = getMinutesAndSecondsFromCounter(isStarted, duration, timerCounter);
  if (isTimerEnded(minutesLeft,secondsLeft)) {
    stopTimer();
    playingStatus = Sound.status.PLAYING;
  }

  return (
    <PomodoroContainer color={color}>
      <PomodoroDescription color={color} />
      <Sound
        url={ringtone}
        playStatus={playingStatus}
        onFinishedPlaying={restartTimer}
      />
      <Timer color={color} minutes={minutesLeft} seconds={secondsLeft} />
    </PomodoroContainer>
  );
};
