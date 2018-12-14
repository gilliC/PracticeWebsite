import styled from 'styled-components';
import {primaryColor} from '../app_components';

/////////////// DIVS /////////////
export const HidingComponent = styled.ul`
  display: ${props => (props.hide ? 'none' : 'block')};
  padding: 0;
  padding-top: ${props => (props.hide ? 0 : '20px')};
  margin: 0;
  position: relative;
  z-index: 1;

  li,
  a,
  li:after,
  a:after,
  li:before,
  a:before {
    transition: all 700ms;
  }
`;

export const LinkContainer = styled.li`
  flex-direction: row;
  align-items: center;
  -webkit-align-items: center;
  display: flex;
  display: -webkit-flex;
  height: 100%;
  list-style-type: none;
  position: relative;
  z-index: 1;
  &:after,
  a:after {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 1px;
    content: '.';
    color: transparent;
    background: white;
    visibility: none;
    opacity: 0;
    z-index: -1;
  }
  :hover {
    h3,
    svg {
      color: ${primaryColor};
    }
  }

  &:hover:after,
  a:hover:after {
    opacity: 1;
    visibility: visible;
    height: 100%;
  }

  svg {
    margin: 5px;
  }
  a {
    text-decoration: none;
    width: 100%;
  }
  h3 {
    color: white;
    font-family: Noto Serif TC;
    text-align: center;
  }
`;
