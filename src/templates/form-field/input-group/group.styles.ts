import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: var(--border-radius);
  background-color: white;
  position: relative;
  // TODO: Use variable.
  padding: ${({ theme }) => theme.grid.gutter / 4}px;
  font-size: 16px;
  line-height: 1;
  &:focus-within {
    outline: 1px solid rebeccapurple;
  }
`;
