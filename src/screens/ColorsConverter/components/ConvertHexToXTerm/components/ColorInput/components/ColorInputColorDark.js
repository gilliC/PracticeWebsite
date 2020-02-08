import styled from 'styled-components';
import { primaryColor } from 'src/styling/colorsPalette';

export const ColorInputColorDark = styled.input`
  width: 50%;
  padding: 15px;
  margin-bottom: 15px;
  color: ${props => props.color || primaryColor};
  font-size: ${props => props.fontSize || '2em'};
  text-align: center;
  border: none;
  border-bottom: 2px dashed ${primaryColor};
  border-color: ${props => props.color || primaryColor};
  font-weight: bold;
  font-weight: bold;
  :focus {
    outline: 0 !important;
  }
`;