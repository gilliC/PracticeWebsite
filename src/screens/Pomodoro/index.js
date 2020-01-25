import React, { Component } from 'react';
import Sound from 'react-sound';
import ringtone from '../../assets/loving-you.mp3';
import {
  primaryColor,
  secondaryColor,
  tertiaryColor,
} from '../../app_components';
import { PomodoroDescription } from './components/PomodoroDescription';
import { PomodoroContainer } from './components/PomodoroContainer';
import { Timer } from './components/Timer';
import {
  handleKeyBoardPressed,
  PomodoroTimeIntervals,
} from './logic/handleKeyBoardPressed';
export class Pomodoro extends Component {
  constructor(props) {
    super(props);
    this.onPressSpace = this.onPressSpace.bind(this);
    this.timer = this.timer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.restartTimer = this.restartTimer.bind(this);
    this.spaceBarListener = this.spaceBarListener.bind(this);
    this.state = {
      count: 0,
      isStarted: false,
      isWorking: false,
      duration: PomodoroTimeIntervals.WORK,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.spaceBarListener, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.spaceBarListener, false);
  }
  spaceBarListener(event) {
    handleKeyBoardPressed(this, event);
  }
  onPressSpace() {
    if (!this.state.isWorking) {
      let timer = setInterval(this.timer, 1000);
      this.setState({ timerFunc: timer, isWorking: true, isStarted: true });
    } else {
      this.stopTimer();
      this.setState({ isWorking: false });
    }
  }
  timer() {
    let count = this.state.count + 1;
    this.setState({ count: count });
  }
  stopTimer() {
    const timerFunc = this.state.timerFunc;
    clearTimeout(timerFunc);
  }
  restartTimer(duration = PomodoroTimeIntervals.WORK) {
    this.setState({
      count: 0,
      isWorking: false,
      isStarted: false,
      duration: duration,
    });
  }

  render() {
    const { count, duration, isWorking, isStarted } = this.state;
    let minutesLeft = duration,
      secondsLeft = 0,
      playingStatus = Sound.status.STOPPED;
    let color = primaryColor;
    if (duration !== PomodoroTimeIntervals.WORK) color = tertiaryColor;
    if (isStarted) {
      minutesLeft = Math.ceil(duration - 1 - count / 60);
      if (minutesLeft < 0) minutesLeft = 0;
      secondsLeft = Math.round(59 - (count % 60));
      if (minutesLeft === 0 && secondsLeft === 0) {
        this.stopTimer();
        playingStatus = Sound.status.PLAYING;
      }
      if (isWorking) color = secondaryColor;
    }

    return (
      <PomodoroContainer color={color}>
        <PomodoroDescription color={color} />
        <Sound
          url={ringtone}
          playStatus={playingStatus}
          onFinishedPlaying={this.restartTimer}
        />
        <Timer color={color} minutes={minutesLeft} seconds={secondsLeft} />
      </PomodoroContainer>
    );
  }
}
