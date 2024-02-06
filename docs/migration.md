# Garden Migration Guide

## v9

### Breaking Changes

#### @zendeskgarden/react-theming

- Utility function `isRtl` has been removed. Use `props.theme.rtl` instead.
- Utility function `getDocument` has been removed. Use `useDocument` instead.

#### @zendeskgarden/react-utilities

- This package has been removed.
- Migrate to `@zendeskgarden/container-utilities` and `@zendeskgarden/react-theming` to continue
  receiving updates.

## v8

[Migration Guide](https://github.com/zendeskgarden/react-components/blob/next/docs/migrations/v8.md)
