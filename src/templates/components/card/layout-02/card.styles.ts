import styled from "styled-components";
import { Template } from "@4i4/theme-registry";

export const Cover = styled(Template)`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.grid.gutter / 2}px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.grid.gutter / 2}px;
`;

export const Wrap = styled(Template)`
  line-height: 1;
  &.align-center {
    ${Container} {
      flex-direction: column;
    }
  }
  &.align-right {
    ${Container} {
      > div {
        &:first-child {
          order: 2;
        }
        &:last-child {
          order: 1;
        }
      }
    }
  }
  * {
    margin: 0;
  }
`;
