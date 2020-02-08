import styled from 'styled-components';
import { Container } from 'src/commonComponents/Container';
import { primaryColor } from 'src/styling/colorsPalette';

export const PomodoroContainer = styled(Container)`
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
