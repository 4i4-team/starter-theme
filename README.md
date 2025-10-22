# @4i4/starter-theme

> Base layout theme extracted from the Moto React application. The package exposes the shared layout templates and helpers that other themes can extend.

## Development

```bash
pnpm install
pnpm build
```

The build step emits ESM and CJS bundles under `dist/` with the original module structure preserved so Next.js dynamic imports keep working.

## Extending Colors in Child Themes

Child themes can import the palette helpers and build their own color tokens while still using the shared layout primitives:

```ts
import {
  buildPalettes,
  buildButtons,
  container,
  media,
  buildColumn,
} from "@4i4/starter-theme";

const breakpoints = { xs: 0, sm: 576, md: 768, lg: 992, xl: 1280 };

const palettes = {
  primary: { main: "#0057ff", text: "#ffffff" },
  secondary: { main: "#ffb400", text: "#1d1d1d" },
  accent: { main: "#6c5ce7", text: "#ffffff" },
};

const theme = {
  palettes: buildPalettes(palettes),
  media: media(breakpoints),
  container: container(breakpoints),
  column: buildColumn(12, breakpoints),
  buttons: buildButtons(["primary", "secondary", "accent"]),
};
```

The starter theme now sources these layout helpers from `@4i4/theme-toolkit`, so you can import them directly from that package if you already depend on it elsewhere.

Any palette entry can omit the darker or lighter shades and they will be derived from the `main` color automatically. New palette keys become available through CSS variables like `var(--color-accent)` and by listing them in `buildButtons`.

## Theme Settings via `_settings`

`@4i4/starter-theme` ships its defaults (palette, breakpoints, button order, and grid) through the `_settings` scope. The generated `theme.json` already lists those modules:

```json
{
  "settings": {
    "palette": "./settings/palette",
    "breakpoints": "./settings/breakpoints",
    "buttons": "./settings/buttons",
    "grid": "./settings/grid"
  }
}
```

Inside your runtime code you can hydrate the theme via `useThemeSettings` while keeping access to the package defaults:

```ts
import { useThemeSettings } from "@4i4/theme-registry";
import {
  starterSettingsDefaults,
  type StarterSettings,
} from "@4i4/starter-theme";

const palette = useThemeSettings<StarterSettings>(
  "palette",
  starterSettingsDefaults,
);
const breakpoints = useThemeSettings<StarterSettings>(
  "breakpoints",
  starterSettingsDefaults,
);
```

Child themes can override any of these entries by calling `registry.set("palette", overrideObject, "_settings")` before rendering. Only the overridden keys need to be provided—the hook merges them with the defaults shipped by the starter theme.
