import styled from "styled-components";

export const Options = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Checkbox = styled.span`
  width: 18px;
  height: 18px;
  min-width: 18px;
  min-height: 18px;
  border-radius: 4px;
  display: flex;
  border: 1px solid rgb(107, 107, 107);
  background-color: white;
  justify-content: center;
  align-items: center;
  &:after {
    content: "";
    display: block;
    width: 10px;
    height: 5px;
    border-bottom: 1px solid rgb(0, 120, 255);
    border-left: 1px solid rgb(0, 120, 255);
    transform: rotate(-45deg) translate(1px, -1px);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
`;

export const Label = styled.label`
  font-size: 13px;
  display: flex;
  gap: 10px;
  input {
    display: none;
  }
  &.hidden {
    display: none;
  }
  &:not(.checked) {
    &.disabled {
      opacity: 0.5;
    }
  }
  &.checked {
    ${Checkbox} {
      &:after {
        opacity: 1;
      }
    }
  }
`;
