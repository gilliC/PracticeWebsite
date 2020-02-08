import styled from 'styled-components';
import { MainBGSingleButton as MainButtonGroupButton } from 'src/commonComponents/common_components';
import { primaryColor } from 'src/styling/colorsPalette';

export const ButtonColorLight = styled(MainButtonGroupButton)`
  border-color: black;
  color: black;
  background-color: ${props => props.color || primaryColor};
  :hover {
    color: black;
  }
`;