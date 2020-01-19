import styled from "styled-components";

import { primaryColor } from "../../app_components";
import { Title } from "../../components/texts/Title";


///////////// TEXT /////////
export const LinkText = styled.p`
  text-align: center;
  font-family: Abel;
  font-size: 1.5em;
  color: black;
  :hover {
    color: ${primaryColor};
  }
`;

export const LinkTextSpan = styled.span`
  text-align: center;
  font-family: Abel;
  color: darkgrey;
  :hover {
    color: ${primaryColor};
  }
`;

export const ListActiveTitle = styled(Title)`
  font-family: Abril Fatface;
`;
