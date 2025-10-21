import type {
  buildColumn,
  container,
  media,
  buildPalettes,
  buildButtons,
} from "./theme";

export interface BasicTheme {
  media: ReturnType<typeof media<"xs" | "sm" | "md" | "lg" | "xl">>;
  container: ReturnType<typeof container<"xs" | "sm" | "md" | "lg" | "xl">>;
  column: ReturnType<typeof buildColumn<"xs" | "sm" | "md" | "lg" | "xl">>;
  palettes: ReturnType<
    typeof buildPalettes<
      "primary" | "secondary" | "info" | "success" | "warning" | "error"
    >
  >;
  buttons: ReturnType<typeof buildButtons>;
  grid: {
    size: number;
    gutter: number;
    maxWidth: number;
    textArea: number;
  };
}

declare module "styled-components" {
  export interface DefaultTheme extends BasicTheme {}
}
