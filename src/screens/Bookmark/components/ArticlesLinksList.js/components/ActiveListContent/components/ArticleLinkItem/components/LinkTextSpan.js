import styled from "styled-components";
import { primaryColor } from "src/styling/colorsPalette";

export const LinkTextSpan = styled.span`
  text-align: center;
  font-family: Abel;
  color: darkgrey;
  :hover {
    color: ${primaryColor};
  }
`;
