import styled from "styled-components";

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${({ theme }) => theme?.grid?.size ?? 12},
    minmax(0, 1fr)
  );
  &:not(.no-gap) {
    gap: ${({ theme }) => theme?.grid?.gutter ?? 15}px;
  }
`;
