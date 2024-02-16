# Garden Migration Guide

## v9

### Breaking Changes

#### All Packages

- Garden v9 packages use `styled-components` version range `^5.1.0`.

  - `react-theming@v9` uses version range `^4.2.0 || ^5.1.0` to support `v8` to `v9` upgrades.

- Garden v9 upgraded from `react-merge-refs` v1 to v2.
  - The [breaking
    change](https://github.com/gregberge/react-merge-refs/blob/main/CHANGELOG.md#200-2022-06-19)
    exports ESM only.
  - Build and test pipelines may need to be updated to account for the `.mjs`
    extension. See Garden's
    [jest.config.js](https://github.com/zendeskgarden/react-components/blob/c2aa97d1edccfa0578ee5655b543ca6635767fb9/utils/test/jest.config.js#L28-L30)
    for details.

#### @zendeskgarden/react-colorpickers

- `ColorSwatch`
  - The new `name` prop is required because the refactored component is now
    backed by a native radio or checkbox group.
  - Removed `rowIndex`, `colIndex`, `defaultRowIndex`, and `defaultColIndex`.
    For the sake of accessibility, focus state should not be exposed or controlled.
- `ColorSwatchDialog`: same breaking changes as `ColorSwatch`.

#### @zendeskgarden/react-theming

- Utility function `isRtl` has been removed. Use `props.theme.rtl` instead.
- Utility function `getDocument` has been removed. Use `useDocument` instead.

#### @zendeskgarden/react-utilities

- This package has been removed.
- Migrate to `@zendeskgarden/container-utilities` and `@zendeskgarden/react-theming` to continue
  receiving updates.

## v8

[Migration Guide](https://github.com/zendeskgarden/react-components/blob/main/docs/migrations/v8.md)
