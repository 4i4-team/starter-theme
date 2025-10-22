import type {
  ThemeWithMedia,
  buildColumn,
  buildPalettes,
  container,
  media,
  buildButtons,
} from "@4i4/theme-toolkit";
import type { StarterBreakpointKey, StarterGrid } from "./settings/types";

export interface BasicTheme extends ThemeWithMedia<StarterBreakpointKey> {
  readonly media: Readonly<ReturnType<typeof media<StarterBreakpointKey>>>;
  container: ReturnType<typeof container<StarterBreakpointKey>>;
  column: ReturnType<typeof buildColumn<StarterBreakpointKey>>;
  palettes: ReturnType<typeof buildPalettes<string>>;
  buttons: ReturnType<typeof buildButtons<string>>;
  grid: StarterGrid;
}

declare module "styled-components" {
  export interface DefaultTheme extends BasicTheme {}
}
