# Garden Migration Guide

## v9

### Breaking Changes

#### All Packages

- Garden's React packages now require a minimum peer dependency of
  `styled-components` at `v6.0.0`.
  - Any custom styled components should follow the styled components v6
    [migration requirements](https://styled-components.com/docs/faqs#what-do-i-need-to-do-to-migrate-to-v6).

#### @zendeskgarden/react-theming

- Utility function `isRtl` has been removed. Use `props.theme.rtl` instead.
- Utility function `getDocument` has been removed. Use `useDocument` instead.

#### @zendeskgarden/react-utilities

- This package has been removed.
- Migrate to `@zendeskgarden/container-utilities` and `@zendeskgarden/react-theming` to continue
  receiving updates.

## v8

[Migration Guide](https://github.com/zendeskgarden/react-components/blob/next/docs/migrations/v8.md)
