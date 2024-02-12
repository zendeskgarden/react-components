# Garden Migration Guide

## v9

### Breaking Changes

Garden has transitioned from utilizing [Popper](https://popper.js.org/docs/) to
adopting the enhanced [Floating UI](https://floating-ui.com/) library. In the
past, Popper's [modifiers](https://popper.js.org/docs/v2/modifiers/) were
directly accessible as component props, creating a rigid dependency that
hindered updates to the positioning library. To address this, these properties
have been removed since Floating UI is designed to intuitively handle component
positioning in the majority of scenarios. Should you find yourself in need of
specific functionality provided by the former modifiers, we encourage you to
file an [issue](https://github.com/zendeskgarden/react-components/issues),
making sure to mention the relevant Floating UI
[middleware](https://floating-ui.com/docs/middleware) for clarity. Garden will
consider additional positioning prop support on a case-by-case basis.

#### All Packages

- Garden v9 packages use `styled-components` version range `^5.1.0`.
  - `react-theming@v9` uses version range `^4.2.0 || ^5.1.0` to support `v8` to `v9` upgrades.

#### @zendeskgarden/react-dropdowns

- `Menu` – value `auto` is no longer valid for the `fallbackPlacements` prop.

#### @zendeskgarden/react-theming

- Utility function `isRtl` has been removed. Use `props.theme.rtl` instead.
- Utility function `getDocument` has been removed. Use `useDocument` instead.

#### @zendeskgarden/react-tooltips

- Removed `eventsEnabled` prop (no longer exposed by Floating UI)
- Removed `popperModifiers` prop (see [note](#breaking-changes))

#### @zendeskgarden/react-utilities

- This package has been removed.
- Migrate to `@zendeskgarden/container-utilities` and `@zendeskgarden/react-theming` to continue
  receiving updates.

## v8

[Migration Guide](https://github.com/zendeskgarden/react-components/blob/next/docs/migrations/v8.md)
