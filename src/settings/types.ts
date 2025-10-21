export type StarterBreakpointKey = "xs" | "sm" | "md" | "lg" | "xl";

export type StarterPaletteName =
  | "primary"
  | "secondary"
  | "gray"
  | "black"
  | "info"
  | "success"
  | "warning"
  | "error";

export type StarterPaletteShades = {
  main: string;
  text: string;
  dark?: string;
  darker?: string;
  light?: string;
  lighter?: string;
};

export type StarterPalette = Record<StarterPaletteName | string, StarterPaletteShades>;

export type StarterButtons = Array<string>;

export interface StarterGrid {
  size: number;
  gutter: number;
  maxWidth: number;
  textArea: number;
}

export interface StarterSettings {
  palette: StarterPalette;
  breakpoints: Record<StarterBreakpointKey, number>;
  buttons: StarterButtons;
  grid: StarterGrid;
}
