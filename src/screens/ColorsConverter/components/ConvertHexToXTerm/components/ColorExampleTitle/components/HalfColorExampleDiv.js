import styled from 'styled-components';
import { primaryColor } from 'src/styling/colorsPalette';

export const HalfColorExampleDiv = styled.div`
  height: 150px;
  width: 350px;
  background-color: ${props => props.bgColor || primaryColor};
  align-items: center;
  display: flex;
  justify-content: center;
  display: -webkit-flex;
  -webkit-align-items: center;
  border-bottom-right-radius: ${props => (props.side === 'right' ? '90px' : 'none')};
  border-top-right-radius: ${props => (props.side === 'right' ? '90px' : 'none')};
  border-bottom-left-radius: ${props => (props.side === 'left' ? '90px' : 'none')};
  border-top-left-radius: ${props => (props.side === 'left' ? '90px' : 'none')};
  transition: all 2s;
`;