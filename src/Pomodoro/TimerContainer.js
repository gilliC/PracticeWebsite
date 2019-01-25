import React from 'react';
import styled from 'styled-components';
import {primaryColor} from '../app_components';

export default props => {
  let {minutes, seconds} = props;
  if (minutes < 10) minutes = '0' + minutes;
  if (seconds < 10) seconds = '0' + seconds;
  return (
    <TimerContainerDiv color={props.color}>
      <h3>
        {minutes}:{seconds}
      </h3>
    </TimerContainerDiv>
  );
};

const TimerContainerDiv = styled.div`
  border-width: 3px;
  border-style: solid;
  width: 35%;
  padding: 10px;
  border-color: white;
  background-color: ${props => props.color || primaryColor};
  border-radius: 10px;
  transition: all 0.5s;
  h3 {
    color: white;
    text-align: center;
    font-family: Abel;
    font-size: 5em;
    cursor: default;
    transition: all 0.5s;
  }
  :hover {
    background-color: white;
    border-color: ${props => props.color || primaryColor};
    h3 {
      color: ${props => props.color || primaryColor};
    }
  }
`;
