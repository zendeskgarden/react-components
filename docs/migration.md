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

#### @zendeskgarden/react-accordions

- Removed `IItem` type export. Use `ITimelineItemProps` instead.

#### @zendeskgarden/react-buttons

- Removed `ButtonGroup`: UI no longer recommended by Garden
- Removed `IIconProps` type export. Use `IButtonStartIconProps` or `IButtonEndIconProps` instead.

#### @zendeskgarden/react-chrome

- Removed `PRODUCT` type export. Use `IHeaderItemProps['product']` instead.

#### @zendeskgarden/react-colorpickers

- `Colorpicker`: renamed to `ColorPicker`
- `ColorpickerDialog`: renamed to `ColorPickerDialog`
  - removed `popperModifiers` prop (see [note](#breaking-changes))
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
- `Datepicker`: renamed to `DatePicker`
  - removed `eventsEnabled` prop (no longer exposed by Floating UI)
  - removed `popperModifiers` prop (see [note](#breaking-changes))
- `DatepickerRange`: renamed to `DatePickerRange`

#### @zendeskgarden/react-dropdowns

- Use this package if you were using `@zendeskgarden/react-dropdowns.next` in `v8`
  - The `v8` version of `@zendeskgarden/react-dropdowns` is no longer maintained and is
    renamed to `@zendeskgarden/react-dropdowns.legacy` in `v9`
- `Menu`: value `auto` is no longer valid for the `fallbackPlacements` prop.
- Removed `label` prop from `OptGroup`. Use `legend` instead.

#### @zendeskgarden/react-forms

- Removed `MultiThumbRange`: UI no longer recommended by Garden
- The following types have changed:
  - removed `IFieldProps`
  - removed `IIconProps`. Use `IFauxInputStartIconProps` or `IFauxInputEndIconProps` instead.

#### @zendeskgarden/react-grid

- Exported constants prefixed with `ARRAY_` no longer have a prefix.
- The following types have been removed: `ALIGN_ITEMS`, `ALIGN_SELF`, `DIRECTION`,
  `JUSTIFY_CONTENT`, `TEXT_ALIGN`, `GRID_NUMBER`, `BREAKPOINT`, `SPACE`, and `WRAP`

#### @zendeskgarden/react-modals

- `DrawerModal`: renamed to `Drawer`
- `TooltipModal`: removed `popperModifiers` prop (see [note](#breaking-changes))
- Removed `GARDEN_PLACEMENT` type export. Use `ITooltipModalProps['placement']` instead.

#### @zendeskgarden/react-notification

- The following types have changed:
  - removed `ToastPlacement`. Use `IToastOptions['placement']` instead.
  - removed `ToastContent`. Use `IToast['content']` instead.

#### @zendeskgarden/react-pagination

- `Pagination`: renamed to `OffsetPagination`
  - changed type export from `HTMLAttributes<HTMLUListElement>` to `HTMLAttributes<HTMLElement>`
  - removed `transformPageProps` prop
  - added `labels` prop
- Renamed `PAGE_TYPE` type export to `PageType`

#### @zendeskgarden/react-tables

- All subcomponent exports have been deprecated and will be removed in a future major version.
  Update to subcomponent properties (e.g., `Table.Body`).

#### @zendeskgarden/react-tabs

- All subcomponent exports have been deprecated and will be removed in a future major version.
  Update to subcomponent properties (e.g., `Tabs.TabList`).

#### @zendeskgarden/react-theming

- Utility function `isRtl` has been removed. Use `props.theme.rtl` instead.
- Utility function `getDocument` has been removed. Use `useDocument` instead.
- The following exports have changed:
  - removed `retrieveTheme`. Use `retriveComponentStyles` instead.
  - constants prefixed with `ARRAY_` no longer have a prefix.
- The following types have changed:
  - renamed `ARROW_POSITION` to `ArrowPosition`
  - renamed `MENU_POSITION` to `MenuPosition`

#### @zendeskgarden/react-tooltips

- `Tooltip`
  - removed `eventsEnabled` prop (no longer exposed by Floating UI)
  - removed `popperModifiers` prop (see [note](#breaking-changes))
- All sub-component exports have been deprecated and will be removed in a future major version.
  Update to sub-component properties (e.g., `Tooltip.Title`).

#### @zendeskgarden/react-utilities

- This package has been removed.
- Migrate to `@zendeskgarden/container-utilities` and `@zendeskgarden/react-theming` to continue
  receiving updates.

## v8

[Migration Guide](https://github.com/zendeskgarden/react-components/blob/main/docs/migrations/v8.md)
