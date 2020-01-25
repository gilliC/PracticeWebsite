import React, { useState, useEffect } from 'react';
import Sound from 'react-sound';
import ringtone from '../../assets/loving-you.mp3';
import { PomodoroDescription } from './components/PomodoroDescription';
import { PomodoroContainer } from './components/PomodoroContainer';
import { Timer } from './components/Timer';
import {
  handleKeyBoardPressed,
  PomodoroTimeIntervals,
} from './logic/handleKeyBoardPressed';
import { getColorByTimerStatus } from './logic/getColorByTimerStatus';

export const Pomodoro = props => {
  const [count, setCount] = useState(0);
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
    console.log('onPressSpace');
    if (!isWorking) {
      const timer = setInterval(timerFunc, 1000);
      setTimerFunc(timer);
      setIsWorking(true);
      setIsStarted(true);
    } else {
      console.log('else');
      stopTimer();
      setIsWorking(false);
    }
  };

  const timerFunc = async () => {
    const newCount = count + 1;
    console.log('timerFunc: ' + newCount);
    setCount(newCount)
  };

  const stopTimer = () => {
    console.log('stopTimer');
    clearTimeout(timerFuncRef);
  };

  const restartTimer = (duration = PomodoroTimeIntervals.WORK) => {
    console.log('restartTimer: 0');
    setCount(0);
    setIsWorking(false);
    setIsStarted(false);
    setDuration(duration);
  };

  let minutesLeft = duration;
  let secondsLeft = 0;
  let playingStatus = Sound.status.STOPPED;
  const color = getColorByTimerStatus(duration, isWorking);
  if (isStarted) {
    minutesLeft = Math.ceil(duration - 1 - count / 60);
    if (minutesLeft < 0) minutesLeft = 0;
    secondsLeft = Math.round(59 - (count % 60));
    if (minutesLeft === 0 && secondsLeft === 0) {
      stopTimer();
      playingStatus = Sound.status.PLAYING;
    }
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
