import styled from "styled-components";

export const Wrap = styled.div`
  padding: ${({ theme }) => theme.grid.gutter}px;
  border-radius: var(--border-radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  position: relative;
  gap: ${({ theme }) => theme.grid.gutter / 2}px;
  &.no-padding {
    padding: 0;
    border-radius: 0;
  }
  &.align-left {
    align-items: flex-start;
    text-align: left;
  }
  &.align-center {
    align-items: center;
    text-align: center;
  }
  &.align-right {
    align-items: flex-end;
    text-align: right;
  }
  &.align-top {
    justify-content: flex-start;
  }
  &.align-middle {
    justify-content: center;
  }
  &.align-bottom {
    justify-content: flex-end;
  }
`;
