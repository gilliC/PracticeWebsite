import React from 'react';
import { TimerContainerDiv } from './components/TimerContainerDiv';

export const Timer = props => {
  let { minutes, seconds, color } = props;
  if (minutes < 10) minutes = '0' + minutes;
  if (seconds < 10) seconds = '0' + seconds;
  const timeLeftDisplay = minutes + ':' + seconds;
  return (
    <TimerContainerDiv color={color}>
      <h3>{timeLeftDisplay}</h3>
    </TimerContainerDiv>
  );
};
