import styled from 'styled-components';
import { primaryColor } from 'src/styling/colorsPalette';

export const LinkText = styled.p`
  text-align: center;
  font-family: Abel;
  font-size: 1.5em;
  color: black;
  :hover {
    color: ${primaryColor};
  }
`;
