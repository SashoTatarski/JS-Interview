import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};
  background-color: #fff;
`;
