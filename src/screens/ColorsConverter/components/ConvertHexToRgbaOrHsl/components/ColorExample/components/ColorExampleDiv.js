import styled from 'styled-components';
import { primaryColor } from 'src/styling/colorsPalette';

export const ColorExampleDiv = styled.div`
  height: 150px;
  width: 700px;
  background-color: ${props => props.bgColor || primaryColor};
  align-items: center;
  display: flex;
  justify-content: center;
  display: -webkit-flex;
  -webkit-align-items: center;
  border-bottom-right-radius: 90px;
  border-top-right-radius: 90px;
  border-bottom-left-radius: 90px;
  border-top-left-radius: 90px;
  transition: all 2s;
`;