import styled from "styled-components";
import { Template } from "@4i4/theme-registry";

export const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  border-radius: var(--border-radius);
  overflow: hidden;
`;

export const Images = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.grid.gutter / 2}px;
  &.narrow {
    ${ImageWrap} {
      &:only-child {
        max-width: 75%;
      }
    }
  }
`;

export const Content = styled(Template)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.grid.gutter / 2}px;
`;
