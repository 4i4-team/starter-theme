import styled from "styled-components";

export const Wrap = styled.div`
  width: var(--container-width);
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &.align-left {
    margin-left: 0;
  }
  &.align-right {
    margin-right: 0;
  }
  &:not(.no-gutter) {
    padding-left: ${({ theme }) => theme.grid.gutter}px;
    padding-right: ${({ theme }) => theme.grid.gutter}px;
  }
`;
