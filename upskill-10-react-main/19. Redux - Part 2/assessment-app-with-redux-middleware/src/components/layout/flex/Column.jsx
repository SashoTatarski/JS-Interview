import styled from "styled-components";

export const Column = styled.div`
  text-align: center;
  width: ${(props) => (props.size / 12) * 100}vw;
`;
