import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
`;

export const Options = styled.div`
  position: absolute;
  background-color: white;
  left: 0;
  overflow: hidden;
  width: 100%;
  z-index: 6;
  &:not(.open) {
    visibility: hidden;
    touch-action: none;
    pointer-events: none;
    max-height: 0;
  }
  &.open {
    max-height: 300px;
    overflow: auto;
    padding: ${({ theme }) => theme.grid.gutter / 2}px;
    border: 1px solid #ccc;
    border-radius: var(--border-radius);
    &:not(.expand-to-top) {
      top: 100%;
    }
    &.expand-to-top {
      bottom: 100%;
    }
  }
  > input {
    border-radius: var(--border-radius);
    border: 1px solid #ccc;
    width: 100%;
    padding: 8px 16px;
    margin-bottom: ${({ theme }) => theme.grid.gutter / 2}px;
  }
  label {
    padding-bottom: ${({ theme }) => theme.grid.gutter / 2}px;
    &:not(:last-of-type) {
      border-bottom: 1px solid #ccc;
    }
  }
`;

export const SelectButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-size: inherit;
  color: #939393;
  font-weight: inherit;
  text-align: left;
`;
