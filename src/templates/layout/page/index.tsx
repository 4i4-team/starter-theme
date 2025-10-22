import type { ReactNode } from "react";
import { useThemeSettings } from "@4i4/theme-registry";
import { DefaultTheme, ThemeProvider } from "styled-components";
import {
  buildButtons,
  buildColumn,
  buildPalettes,
  container,
  media,
} from "@4i4/theme-toolkit";
import type { StarterSettings } from "../../../settings/types";
import paletteDefaults from "../../../settings/palette";
import breakpointsDefaults from "../../../settings/breakpoints";
import buttonsDefaults from "../../../settings/buttons";
import gridDefaults from "../../../settings/grid";
import { GlobalStyle } from "./page.styles";

export const breakpoints = breakpointsDefaults;

type BreakpointKey = keyof StarterSettings["breakpoints"];

export default function Page({ children }: { children: ReactNode }) {
  const palette =
    useThemeSettings<StarterSettings, "palette">("palette") ??
    paletteDefaults;
  const breakpointMap =
    useThemeSettings<StarterSettings, "breakpoints">("breakpoints") ??
    breakpointsDefaults;
  const buttonOrder =
    useThemeSettings<StarterSettings, "buttons">("buttons") ??
    buttonsDefaults;
  const grid =
    useThemeSettings<StarterSettings, "grid">("grid") ??
    gridDefaults;

  const theme: DefaultTheme = {
    palettes: buildPalettes(palette),
    media: media<BreakpointKey>(breakpointMap),
    container: container<BreakpointKey>(breakpointMap),
    column: buildColumn<BreakpointKey>(12, breakpointMap),
    buttons: buildButtons(buttonOrder),
    grid,
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
