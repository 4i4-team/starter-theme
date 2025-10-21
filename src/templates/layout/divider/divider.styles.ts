import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.grid.gutter / 2}px;
  &.double {
    padding: ${({ theme }) => theme.grid.gutter}px;
  }
`;
