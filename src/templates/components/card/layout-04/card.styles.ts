import styled from "styled-components";
import { Template } from "@4i4/theme-registry";

export const Cover = styled(Template)`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.grid.gutter / 2}px;
  padding: ${({ theme }) => theme.grid.gutter}px;
`;

export const Wrap = styled(Template)`
  line-height: 1;
  background-color: #efefef;
  border-radius: var(--border-radius) !important;
  * {
    margin: 0;
  }
`;

export const ImageWrap = styled.div``;
