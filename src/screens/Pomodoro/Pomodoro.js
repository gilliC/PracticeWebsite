import React, {Component} from 'react';
import styled from 'styled-components';
import Sound from 'react-sound';

import ringtone from '../../assets/loving-you.mp3';
import Timer from './TimerContainer';
import {Title} from '../../components/common_components';
import {Container} from '../../components/Container';
import {
  primaryColor,
  secondaryColor,
  tertiaryColor,
} from '../../app_components';
export default class Pomodoro extends Component {
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
      duration: 25,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.spaceBarListener, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.spaceBarListener, false);
  }
  spaceBarListener(event) {
    if (event.code === 'Space') {
      this.onPressSpace();
    }
    if (event.code === 'KeyR') {
      this.stopTimer();
      this.restartTimer(25);
    }
    if (!this.state.isWorking) {
      if (event.code === 'KeyL') {
        this.restartTimer(10);
      }
      if (event.code === 'KeyS') {
        this.restartTimer(5);
      }
    }
  }
  onPressSpace() {
    if (!this.state.isWorking) {
      let timer = setInterval(this.timer, 1000);
      this.setState({timerFunc: timer, isWorking: true, isStarted: true});
    } else {
      this.stopTimer();
      this.setState({isWorking: false});
    }
  }
  timer() {
    let count = this.state.count + 1;
    this.setState({count: count});
  }
  stopTimer() {
    const timerFunc = this.state.timerFunc;
    clearTimeout(timerFunc);
  }
  restartTimer(duration = 25) {
    this.setState({
      count: 0,
      isWorking: false,
      isStarted: false,
      duration: duration,
    });
  }

  render() {
    const {count, duration, isWorking, isStarted} = this.state;
    let minutesLeft = duration,
      secondsLeft = 0,
      playingStatus = Sound.status.STOPPED;
    let color = primaryColor;
    if (duration !== 25) color = tertiaryColor;
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
        <Title color={color} fontFamily="Gloria Hallelujah">
          Pomodoro Clock
        </Title>
        <p>Press Space to start the timer & to pause it.</p>
        <p>Press R to retstart the timer</p>
        <p>Press L for a long break</p>
        <p>Press S for a short break</p>
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

const PomodoroContainer = styled(Container)`
  height: auto;
  transition: all 0.5s;
  h1 {
    transition: all 0.5s;
  }
  p {
    color: ${props => props.color || primaryColor};
    font-size: 1.25em;
    text-align: left;
    transition: all 0.5s;
    font-family: Abel;
  }
`;
