import { css } from "styled-components";
import { Interpolation, RuleSet, Styles } from "styled-components/dist/types";

export function mediaQuery({
  min,
  max,
}: {
  min?: number;
  max?: number;
}): typeof css {
  if (min && max) {
    return (
      styles: Styles<object>,
      ...interpolations: Interpolation<object>[]
    ) => {
      return css`
        @media (min-width: ${min}px) and (max-width: ${max}px) {
          ${css(styles, ...interpolations)}
        }
      `;
    };
  } else if (min) {
    return (
      styles: Styles<object>,
      ...interpolations: Interpolation<object>[]
    ) => css`
      @media (min-width: ${min}px) {
        ${css(styles, ...interpolations)}
      }
    `;
  } else if (max) {
    return (
      styles: Styles<object>,
      ...interpolations: Interpolation<object>[]
    ) => css`
      @media (max-width: ${max}px) {
        ${css(styles, ...interpolations)}
      }
    `;
  } else {
    return css;
  }
}

export function breakpoint({
  min,
  max,
}: {
  min?: number;
  max?: number;
}): Record<"min" | "max" | "exact", typeof css> {
  return {
    min: mediaQuery({ min }),
    max: mediaQuery({ max }),
    exact: mediaQuery({ min, max }),
  };
}

export function media<T extends string>(
  breakpoints: Record<T, number>,
): Record<T, Record<"min" | "max" | "exact", typeof css>> {
  const keys = Object.keys(breakpoints).sort((a, b) =>
    // @ts-ignore
    breakpoints[a] < breakpoints[b] ? -1 : 1,
  );
  // @ts-ignore
  return keys.reduce((accumulate, key, index) => {
    // @ts-ignore
    const min = breakpoints?.[key];
    // @ts-ignore
    const max = breakpoints?.[keys[index + 1]];
    // @ts-ignore
    accumulate[key] = breakpoint({ min, max });
    return accumulate;
  }, {});
}

export function container<T extends string>(
  breakpoints: Record<T, number>,
): RuleSet<object> {
  const keys = Object.keys(breakpoints).sort((a, b) =>
    // @ts-ignore
    breakpoints[a] < breakpoints[b] ? -1 : 1,
  );
  return css`
    ${keys.map(
      key => css`
        ${({ theme }) => {
          // @ts-ignore
          let width: number | string = Math.max(0, breakpoints[key]);
          if (width == 0) width = "auto";
          // @ts-ignore
          else width += "px";
          // @ts-ignore
          return theme.media[key].min`--container-width: ${width};`;
        }}
      `,
    )};
  `;
}

export function columnSizes(size: number): Record<string, number> {
  const sizes = Array.from(Array(size), (v: any, i) => i + 1);
  return sizes.reduce((accumulator, size) => {
    // @ts-ignore
    accumulator[size.toString()] = (size * 100) / size;
    return accumulator;
  }, {});
}

export function buildBreakpointColumnSizes<T extends string>(
  sizes: number[],
  breakpoint: T,
): RuleSet<object> {
  return css`
    // @ts-ignore
    ${({ theme }) => theme.media[breakpoint].min`
      ${sizes.map(
        size => css`
          &.${breakpoint}-${size} {
            grid-column-end: span ${size};
          }
          &.offset-${breakpoint}-${size} {
            grid-column-start: ${size + 1};
          }
        `,
      )};
    `};
  `;
}

export function buildColumn<T extends string>(
  size: number,
  breakpoints: Record<T, number>,
): RuleSet<object> {
  const sizes = Array.from(Array(size), (v: any, i) => i + 1);
  const keys = Object.keys(breakpoints).sort((a, b) =>
    // @ts-ignore
    breakpoints[a] < breakpoints[b] ? -1 : 1,
  );
  return css`
    ${keys.map(key => buildBreakpointColumnSizes(sizes, key))};
  `;
}

export function convertHexToRGB(hex: string): number[] {
  hex = hex.replace(/^\s*#|\s*$/g, "");
  if (hex.length == 3) {
    hex = hex.replace(/(.)/g, "$1$1");
  }

  return [
    parseInt(hex.substring(0, 2), 16),
    parseInt(hex.substring(2, 4), 16),
    parseInt(hex.substring(4, 6), 16),
  ];
}

export function convertRgbToHex(rgb: number[]): string {
  const hex = rgb
    .map(value => {
      let str = value.toString(16);
      if (str.length == 1) {
        str = "0" + str;
      }
      return str;
    })
    .join("");
  return "#" + hex;
}

export function convertHexToHue(hex: string): number {
  const [r, g, b] = convertHexToRGB(hex);
  let hue;
  if (Math.max(r, g, b) === r) {
    hue = (g - b) / (r - Math.min(g, b));
  } else if (Math.max(g, b) === g) {
    hue = 2 + (b - r) / (g - Math.min(r, b));
  } else {
    hue = 4 + (r - g) / (b - Math.min(r, g));
  }
  hue *= 60;

  return hue < 0 ? hue + 360 : hue;
}

export function lighten(hex: string, percent: number): string {
  return convertRgbToHex(
    convertHexToRGB(hex).map(v => Math.round(v + ((255 - v) * percent) / 100)),
  );
}

export function darken(hex: string, percent: number): string {
  return convertRgbToHex(
    convertHexToRGB(hex).map(v => Math.round(v - (v * percent) / 100)),
  );
}

type Colors = "main" | "dark" | "darker" | "light" | "lighter" | "text";
type ColorSet = {
  [key in Colors]?: string;
};
interface OpColorSet extends ColorSet {
  main: string;
  text: string;
}

export function buildPalettes<T extends string>(
  colorNames: Record<T, OpColorSet>,
): RuleSet<object> {
  const keys = Object.keys(colorNames);
  return css`
    ${keys.map(key => {
      return css`
              --color-${key}: ${colorNames[key as T].main};
              --text-${key}: ${colorNames[key as T].text};
              --color-${key}-dark: ${colorNames[key as T].dark ?? darken(colorNames[key as T].main, 30)};
              --color-${key}-darker: ${colorNames[key as T].darker ?? darken(colorNames[key as T].main, 60)};
              --color-${key}-light: ${colorNames[key as T].light ?? lighten(colorNames[key as T].main, 30)};
              --color-${key}-lighter: ${colorNames[key as T].lighter ?? lighten(colorNames[key as T].main, 60)};
          `;
    })};
  `;
}

export function buildButtons<T extends string>(types: T[]): RuleSet<object> {
  return css`
    ${types.map(type => {
      return css`
        &.btn-${type} {
          background-color: var(--color-${type});
          color: var(--text-${type});
          &:hover {
            background-color: var(--color-${type}-dark);
          }
          &-hollow {
            border-color: var(--color-${type});
            background-color: white;
            color: var(--color-${type});
            &:hover {
              color: var(--text-${type});
              background-color: var(--color-${type}-dark);
            }
          }
          &-link {
            background-color: transparent;
            color: var(--color-${type});
            padding: 0 !important;
            &:hover {
              color: var(--color-${type}-dark);
              background-color: transparent;
            }
          }
        }
      `;
    })};
  `;
}
