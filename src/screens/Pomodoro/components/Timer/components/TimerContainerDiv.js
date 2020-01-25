import styled from 'styled-components';
import { primaryColor } from 'src/app_components';

export const TimerContainerDiv = styled.div`
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
