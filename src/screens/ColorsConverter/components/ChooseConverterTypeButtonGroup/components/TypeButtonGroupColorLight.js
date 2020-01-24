import styled from 'styled-components';
import { TypeButtonGroupColorDark } from './TypeButtonGroupColorDark';
import { primaryColor } from 'src/styling/colorsPalette';

export const TypeButtonGroupColorLight = styled(TypeButtonGroupColorDark)`
  label.active {
    background-color: ${props => props.color || primaryColor};
    color: black;
    border-color: black;
    :hover {
      color: black;
      background-color: ${props => props.color || primaryColor};
    }
  }
`;