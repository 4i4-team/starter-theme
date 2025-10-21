import buttons from "./buttons";
import breakpoints from "./breakpoints";
import grid from "./grid";
import palette from "./palette";
import type { StarterSettings } from "./types";

export const starterSettingsDefaults: StarterSettings = {
  palette,
  breakpoints,
  buttons,
  grid,
};

export type { StarterSettings } from "./types";
