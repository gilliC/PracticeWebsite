import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  display: -webkit-flex;
  -webkit-align-items: center;
  flex-direction: column;
  height: ${props => props.height || "100%"};
  width: ${props => props.height || "100%"};
`;
