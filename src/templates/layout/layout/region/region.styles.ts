import styled from "styled-components";
import { Template } from "@4i4/theme-registry";

export const Wrap = styled(Template)`
  padding-left: ${({ theme }) => theme.grid.gutter}px;
  padding-right: ${({ theme }) => theme.grid.gutter}px;
  position: relative;
  &:before {
    position: absolute;
    content: "";
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
  }
  &:not(.condensed) {
    &:first-child {
      &:before {
        //background-color: plum;
      }
    }
    &:last-child {
      //color: white;
      &:before {
        //background-color: rebeccapurple;
      }
      * {
        //border-color: white;
      }
    }
  }
  &.extended-background {
    &:first-child {
      &:before {
        //background-color: plum;
        width: calc((100vw - var(--container-width)) / 2 + 100%);
        right: 0;
        left: auto;
      }
    }
    &:last-child {
      &:before {
        //background-color: rebeccapurple;
        width: calc((100vw - var(--container-width)) / 2 + 100%);
        z-index: -1;
      }
      &:first-child {
        &:before {
          width: 100vw;
          left: calc((100vw - var(--container-width)) / -2);
        }
      }
    }
  }
  &.condensed {
    &:not(:first-child) {
      padding-left: ${({ theme }) => theme.grid.gutter / 2}px;
    }
    &:not(:last-child) {
      padding-right: ${({ theme }) => theme.grid.gutter / 2}px;
    }
  }
  &.fit-edges {
    padding-left: 0;
    padding-right: 0;
  }
`;
