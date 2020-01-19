import styled from "styled-components";
import { primaryColor } from "../../../../../../../../../app_components";

export const LinkText = styled.p`
  text-align: center;
  font-family: Abel;
  font-size: 1.5em;
  color: black;
  :hover {
    color: ${primaryColor};
  }
`;