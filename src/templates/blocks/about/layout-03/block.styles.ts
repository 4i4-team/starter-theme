import styled from "styled-components";
import { Template } from "@4i4/theme-registry";

export const Content = styled(Template)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.grid.gutter / 2}px;
`;
