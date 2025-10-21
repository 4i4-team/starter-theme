import styled from "styled-components";
import { Template } from "@4i4/theme-registry";

export const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  //background-color: rgba(0, 0, 0, 0.2);
`;

export const Cover = styled(Template)`
  width: 100%;
  &.align-top {
    ${Mask} {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.2)
      );
    }
  }
  &.align-middle {
    ${Mask} {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.2)
      );
    }
  }
  &.align-bottom {
    ${Mask} {
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.2)
      );
    }
  }
  > a {
    padding: 0 !important;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.grid.gutter / 2}px;
  position: relative;
  color: white;
  svg {
    path {
      fill: white;
    }
  }
`;

export const Wrap = styled(Template)`
  line-height: 1;
  * {
    margin: 0;
  }
`;
