import styled from "styled-components";
import { Template } from "@4i4/theme-registry";

export const Wrap = styled.div`
  position: relative;
`;

export const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const Content = styled(Template)`
  position: relative;
  padding-top: ${({ theme }) => theme.grid.gutter}px;
  padding-bottom: ${({ theme }) => theme.grid.gutter}px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.grid.gutter / 2}px;
  color: white;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.grid.gutter / 2}px;
`;
