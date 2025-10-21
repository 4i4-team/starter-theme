import { createGlobalStyle, css } from "styled-components";

const textAlign = css`
  .text-align-left,
  .text-left {
    text-align: left;
  }
  .text-align-right,
  .text-right {
    text-align: right;
  }
  .text-align-center,
  .text-center {
    text-align: center;
  }
  .text-align-justify,
  .text-justify {
    text-align: justify;
  }
`;

const backgroundImage = css`
  &.background {
    position: absolute;
    height: 100%;
    width: 100%;
    inset: 0;
    object-fit: cover;
    object-position: center center;
    color: transparent;
  }
`;

const aspectRatio = css`
  &.aspect-1-1 {
    aspect-ratio: 1;
  }
  &.aspect-4-3 {
    aspect-ratio: ${4 / 3};
  }
  &.aspect-3-4 {
    aspect-ratio: ${3 / 4};
  }
  &.aspect-9-2 {
    aspect-ratio: ${9 / 2};
  }
  &.aspect-16-9 {
    aspect-ratio: ${16 / 9};
  }
  &.aspect-21-9 {
    aspect-ratio: ${21 / 9};
  }
  &.aspect-32-9 {
    aspect-ratio: ${32 / 9};
  }
`;

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }
  body {
    font-family: var(--font-family);
    overflow-x: hidden;
    --box-background: #efefef;
    --border-radius: 12px;
    --border-color: #ccc;
      ${({ theme }) => theme.container};
      ${({ theme }) => theme.palettes};
  }
  a {
    color: inherit;
  }
  img {
    ${backgroundImage};
  }
  
  .btn {
    border-radius: var(--border-radius);
    background-color: #dedede;
    display: inline-flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 8px 12px;
    text-decoration: none;
    color: #464646;
    border: 1px solid transparent;
    transition: all 0.3s ease-in-out;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    &.btn-block {
      display: block;
      width: 100%;
    }
    &.btn-icon {
      padding: 12px;
      border-radius: 50%;
      aspect-ratio: 1;
    }
    &.btn-link {
      padding: 0;
      background: none;
      color: inherit;
    }
    &.btn-lg {
      padding: 12px 16px;
    }
    &.btn-xl {
      padding: 16px 64px;
    }
    ${({ theme }) => theme.buttons}
  }
  
  ${textAlign};
  ${aspectRatio};
`;
