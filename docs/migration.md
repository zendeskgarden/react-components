# Garden Migration Guide

## v9

### Breaking Changes

#### All Packages

- Garden v9 packages use `styled-components` version range `^5.1.0`.
  - `react-theming@v9` uses version range `^4.2.0 || ^5.1.0` to support `v8` to `v9` upgrades.

#### @zendeskgarden/react-theming

- Utility function `isRtl` has been removed. Use `props.theme.rtl` instead.
- Utility function `getDocument` has been removed. Use `useDocument` instead.

#### @zendeskgarden/react-utilities

- This package has been removed.
- Migrate to `@zendeskgarden/container-utilities` and `@zendeskgarden/react-theming` to continue
  receiving updates.

## v8

[Migration Guide](https://github.com/zendeskgarden/react-components/blob/next/docs/migrations/v8.md)
