import styled from "styled-components";

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.grid.gutter / 2}px;
`;

export const Label = styled.label`
  input {
    margin-right: 10px;
  }
  &.hidden {
    display: none;
  }
`;
