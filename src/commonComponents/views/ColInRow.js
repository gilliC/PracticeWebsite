import styled from "styled-components";

export const ColinRow = styled.div`
  width: ${props => (props.size ? (100 / 12) * props.size + "%" : "100%")};
  float: ${props => (props.float: "none")};
  display: ${props => props.display || "initial"};
`;