import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Sound from 'react-sound';

import ringtone from '../../assets/loving-you.mp3';
import TimerContainer from './TimerContainer';
import {MainButton, Title, Container} from '../../commonComponents/common_components';
import {primaryColor, secondaryColor} from '../../app_components';
export default class Pomodoro extends Component {
  constructor(props) {
    super(props);
    this.onPressSpace = this.onPressSpace.bind(this);
    this.timer = this.timer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.restartTimer = this.restartTimer.bind(this);
    this.state = {
      count: 0,
      duration: this.props.duration,
    };
  }
  timer() {
    let count = this.state.count + 1;
    this.setState({count: count});
  }
  startTimer() {
    if (!this.state.isWorking) {
      let timer = setInterval(this.timer, 100);
      this.setState({timerFunc: timer, isWorking: true, isStarted: true});
    }
  }
  stopTimer() {
    const timerFunc = this.state.timerFunc;
    clearTimeout(timerFunc);
  }
  restartTimer() {
    this.setState({count: 0, isWorking: false, isStarted: false});
  }
  render() {
    const {count, timerDone, duration, isWorking, isStarted} = this.state;
    let minutesLeft = duration,
      secondsLeft = 0,
      playingStatus = Sound.status.STOPPED;
    let color = primaryColor;
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
      <div>
        <Sound
          url={ringtone}
          playStatus={playingStatus}
          onFinishedPlaying={this.restartTimer}
        />
        <TimerContainer
          color={color}
          minutes={minutesLeft}
          seconds={secondsLeft}
        />
      </div>
    );
  }
}
