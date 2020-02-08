import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${props => props.fontSize || "5em"};
  text-align: ${props => props.textAlign || "center"};
  font-family: ${props => props.fontFamily || "Abel"};
  color: ${props => props.color || "black"};
  cursor: default;
`;

