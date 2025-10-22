import styled, { type DefaultTheme, type RuleSet } from "styled-components";

type ColumnExecutionContext = { theme: DefaultTheme };

const columnRules = ({ theme }: ColumnExecutionContext): RuleSet<any> => {
  // cast: @4i4/theme-toolkit annotates the returned RuleSet with ThemeWithMedia-only props
  return theme.column as unknown as RuleSet<any>;
};

export const Wrap = styled.div`
  ${columnRules}
`;
