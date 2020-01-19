import styled, { keyframes } from "styled-components";

import { primaryColor } from "../../app_components";
import { Title } from "../../components/common_components";

///////////// ANIMATIONS /////////
const linkItem_hovering = keyframes` 
 from {
    box-shadow: 1px 7px 5px 3px transparent;
  }
  to {
    box-shadow: 1px 7px 5px 3px ${primaryColor};
  }`;

///////////// DIVS /////////

export const ArticleItemContainer = styled.div`
  border-bottom: solid ${primaryColor} 2px;
  padding: 10px;
  cursor: pointer;
  color: ${props => (props.active ? primaryColor : "inherit")};
  border-bottom: ${props => (props.active ? `solid ${primaryColor} 2px` : "")};
  animation-name: ${props => (props.active ? linkItem_hovering : "")};
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  :hover {
    cursor: pointer;
    color: ${primaryColor};
    border-bottom: solid ${primaryColor} 2px;
    padding: 10px;
    animation: ${linkItem_hovering} 1s ease forwards;
  }
`;

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
