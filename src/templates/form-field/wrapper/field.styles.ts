import styled from "styled-components";

export const InputGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  border: 1px solid #ccc;
  border-radius: var(--border-radius);
  background-color: white;
  overflow: hidden;
  // TODO: Use variable.
  padding: ${({ theme }) => theme.grid.gutter / 4}px;
  font-size: 16px;
  line-height: 1;
  &:focus-within {
    outline: 1px solid rebeccapurple;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
