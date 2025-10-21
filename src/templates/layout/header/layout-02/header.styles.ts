import styled, { createGlobalStyle, keyframes } from "styled-components";

export const slideIn = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(0);}
`;
export const slideOut = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0);}
`;

export const Wrap = styled.header`
  background-color: var(--header-bg, #dedede);
  padding: ${({ theme }) => theme.grid.gutter}px 0;
  height: var(--header-height, 80px);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  &.sticky {
    position: fixed;
    animation: ${slideIn} 0.3s forwards;
  }
`;

export const GlobalStyle = createGlobalStyle`
  html {
    padding-top: var(--header-height, 80px);
  }
`;
