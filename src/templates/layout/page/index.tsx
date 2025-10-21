import type { ReactNode } from "react";
import { useThemeSettings } from "@4i4/theme-registry";
import { DefaultTheme, ThemeProvider } from "styled-components";
import {
  buildButtons,
  buildColumn,
  buildPalettes,
  container,
  media,
} from "../../../theme";
import {
  starterSettingsDefaults,
  type StarterSettings,
} from "../../../settings/defaults";
import { GlobalStyle } from "./page.styles";

export const breakpoints = starterSettingsDefaults.breakpoints;

type BreakpointKey = keyof StarterSettings["breakpoints"];

export default function Page({ children }: { children: ReactNode }) {
  const palette =
    useThemeSettings<StarterSettings>("palette", starterSettingsDefaults) ??
    starterSettingsDefaults.palette;
  const breakpointMap =
    useThemeSettings<StarterSettings>("breakpoints", starterSettingsDefaults) ??
    starterSettingsDefaults.breakpoints;
  const buttonOrder =
    useThemeSettings<StarterSettings>("buttons", starterSettingsDefaults) ??
    starterSettingsDefaults.buttons;
  const grid =
    useThemeSettings<StarterSettings>("grid", starterSettingsDefaults) ??
    starterSettingsDefaults.grid;

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
