# Changelog

## Unreleased

- Start consuming `@4i4/theme-toolkit` for the shared layout helpers and re-export them from the package entry point.
- Document the toolkit dependency so downstream themes can depend on it directly.

## 0.1.0 - 2025-10-21

- Expose theme defaults via the `_settings` scope and consume them through `useThemeSettings` inside the layout page template.
- Add reusable settings modules for palette, breakpoints, button order, and grid configuration.
- Publish `starterSettingsDefaults` and `StarterSettings` from the package entry point for child themes to reuse.
- Extend `theme.json` with a `settings` map so tooling (and the webpack plugin) can auto-register configuration.
