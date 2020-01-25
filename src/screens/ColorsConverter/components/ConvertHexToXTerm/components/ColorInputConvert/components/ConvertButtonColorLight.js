import styled from 'styled-components';
import { primaryColor } from 'src/styling/colorsPalette';
import { MainButton } from 'src/commonComponents/common_components';

export const ConvertButtonColorLight = styled(MainButton)`
  background-color: ${props => props.color || primaryColor};
  color: black;
  border-color: black;
  :hover {
    color: black;
  }
`;