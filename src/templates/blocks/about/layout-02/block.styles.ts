import styled from "styled-components";
import {
  Images as BaseImages,
  ImageWrap as BaseImageWrap,
  Content as BaseContent,
} from "../layout-01/block.styles";
import { Template } from "@4i4/theme-registry";

export const ImageWrap = styled(BaseImageWrap)``;

export const Images = styled(BaseImages)``;

export const Content = styled(BaseContent)`
  align-items: center;
  text-align: center;
`;

export const Wrap = styled(Template)`
  > * {
    &:first-child {
      ${({ theme }) => theme.media.md.min`
        order: 2;
      `};
    }
    &:first-child {
      ${({ theme }) => theme.media.md.min`
        order: 1;
      `};
    }
  }
`;
