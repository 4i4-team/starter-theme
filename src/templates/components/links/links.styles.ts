import styled from "styled-components";
export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.grid.gutter / 2}px;
  &.align-center {
    justify-content: center;
  }
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
`;
