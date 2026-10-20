# Garden Migration Guide

## v10

Summary TODO

### Breaking changes

Summary TODO

#### All components

- Garden v10 ships a single `@zendeskgarden/react-components` package with all component exports
- Garden v10 updated the `styled-components` peer dependency to `^6.0.8` in
  order to open CSS support for container queries which [cannot be supported in
  v5.x](https://github.com/styled-components/styled-components/issues/3911#issuecomment-1386516979).
  Version 6.0.8 is the first to export the `CSSObject` type that Garden's
  types use.
- Garden v10 updated the `react` and `react-dom` peer dependencies to
  `^16.13.0 || ^17.0.0 || ^18.0.0 || ^19.0.0`. Node cannot read the named
  exports of React 16.8 to 16.12 from an ES module, so the ES module build
  fails to load there. Bundlers and Jest are not affected.

## v9

[Migration Guide](https://github.com/zendeskgarden/react-components/blob/main/docs/migrations/v9.md)
