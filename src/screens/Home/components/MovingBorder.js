import styled from "styled-components";
import { primaryColor } from "../../../app_components";

export const MovingBorder = styled.div`
  position: relative;
  transform: translateY(-50%);
  margin: 50px;
  width: 600px;
  .shape {
    stroke-dasharray: 140 2000;
    stroke-dashoffset: -970;
    stroke-width: 8px;
    fill: transparent;
    stroke: ${primaryColor};
    border-bottom: 5px solid black;
    transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
  }
  h1 {
    font-family: Noto Serif TC;
    font-size: 3em;
    line-height: 32px;
    letter-spacing: 8px;
    color: pink;
    top: 100px;
    position: relative;
  }
  :hover .shape {
    stroke-width: 2px;
    stroke-dashoffset: 0;
    stroke-dasharray: 1520;
  }
`;
