import React from 'react';
import styled from 'styled-components';
import {primaryColor} from '../app_components';
import {Container} from '../components/common_components';

export default props => {
  return (
    <HomeContainer>
      <MovingBorder>
        <h1 className="text">Pratice Website</h1>
        <svg height="120" width="600" xmlns="http://www.w3.org/2000/svg">
          <rect className="shape" height="120" width="600" />
        </svg>
      </MovingBorder>
    </HomeContainer>
  );
};

const HomeContainer = styled(Container)`
  text-align: center;
  height: 100%;
  overflow: hidden;
`;

const MovingBorder = styled.div`
  position: relative;
  transform: translateY(-50%);
  margin: 50px;
  width: 600px;
  .shape {
    stroke-dasharray: 140 2000;
    stroke-dashoffset: -970;
    stroke-width: 8px;
    fill: transparent;
    stroke: ${primaryColor};
    border-bottom: 5px solid black;
    transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
  }
  h1 {
    font-family: Noto Serif TC;
    font-size: 3em;
    line-height: 32px;
    letter-spacing: 8px;
    color: pink;
    top: 100px;
    position: relative;
  }
  :hover .shape {
    stroke-width: 2px;
    stroke-dashoffset: 0;
    stroke-dasharray: 1520;
  }
`;
