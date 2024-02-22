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

- Garden v9 upgraded from `react-merge-refs` v1 to v2.
  - The [breaking
    change](https://github.com/gregberge/react-merge-refs/blob/main/CHANGELOG.md#200-2022-06-19)
    exports ESM only.
  - Build and test pipelines may need to be updated to account for the `.mjs`
    extension. See Garden's
    [jest.config.js](https://github.com/zendeskgarden/react-components/blob/c2aa97d1edccfa0578ee5655b543ca6635767fb9/utils/test/jest.config.js#L28-L30)
    for details.

#### @zendeskgarden/react-colorpickers

- `ColorPickerDialog`: removed `popperModifiers` prop (see [note](#breaking-changes))
- `ColorSwatch`
  - The new `name` prop is required because the refactored component is now
    backed by a native radio or checkbox group.
  - Removed `rowIndex`, `colIndex`, `defaultRowIndex`, and `defaultColIndex`.
    For the sake of accessibility, focus state should not be exposed or controlled.
- `ColorSwatchDialog`
  - same breaking changes as `ColorSwatch`.
  - `popperModifiers` prop (see [note](#breaking-changes))

#### @zendeskgarden/react-datepickers

- Removed `GardenPlacement` type export. Use `IDatePickerProps['placement']` instead.
- `DatePicker`
  - removed `eventsEnabled` prop (no longer exposed by Floating UI)
  - removed `popperModifiers` prop (see [note](#breaking-changes))

#### @zendeskgarden/react-dropdowns

- `Menu`: value `auto` is no longer valid for the `fallbackPlacements` prop.

#### @zendeskgarden/react-modals

- `TooltipModal`: removed `popperModifiers` prop (see [note](#breaking-changes))

#### @zendeskgarden/react-pagination

- `Pagination`: renamed to `OffsetPagination`
  - removed `transformPageProps` prop
  - added `labels` prop

#### @zendeskgarden/react-theming

- Utility function `isRtl` has been removed. Use `props.theme.rtl` instead.
- Utility function `getDocument` has been removed. Use `useDocument` instead.

#### @zendeskgarden/react-tooltips

- `Tooltip`
  - removed `eventsEnabled` prop (no longer exposed by Floating UI)
  - removed `popperModifiers` prop (see [note](#breaking-changes))

#### @zendeskgarden/react-utilities

- This package has been removed.
- Migrate to `@zendeskgarden/container-utilities` and `@zendeskgarden/react-theming` to continue
  receiving updates.

## v8

[Migration Guide](https://github.com/zendeskgarden/react-components/blob/main/docs/migrations/v8.md)
