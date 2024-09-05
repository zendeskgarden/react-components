# Garden Migration Guide

## v9

Upgrading from version 8 to version 9 includes handling both [breaking
changes](#breaking-changes) and [deprecated components](#deprecated-components).
To ensure that existing code functions correctly with v9, it is essential to
address the breaking changes. Managing the deprecated components can be deferred
as a subsequent task to prepare for v10, where these components will be
completely removed.

### Breaking Changes

The theme object, along with its utility functions, introduce a minimal set of
breaking changes for Garden version 9. It is important to proceed with caution
when upgrading each Garden package individually. All existing v8 packages must
be
[v8.75.0](https://github.com/zendeskgarden/react-components/releases/tag/v8.75.0)
or higher in order to complete a successful individual package migration to v9.
Detailed theming change instructions are provided under the
[@zendeskgarden/react-theming](#zendeskgardenreact-theming) package.

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

- Garden v9 packages use `styled-components` version range `^5.3.1`.

  - `react-theming@v9` uses version range `^4.2.0 || ^5.3.1` to support `v8` to `v9` upgrades.

- Garden v9 upgraded from `react-merge-refs` v1 to v2.

  - The [breaking
    change](https://github.com/gregberge/react-merge-refs/blob/main/CHANGELOG.md#200-2022-06-19)
    exports ESM only.
  - Build and test pipelines may need to be updated to account for the `.mjs`
    extension. See Garden's
    [jest.config.js](https://github.com/zendeskgarden/react-components/blob/c2aa97d1edccfa0578ee5655b543ca6635767fb9/utils/test/jest.config.js#L28-L30)
    for details.

- The following breaking changes are listed alphabetically by package. While
  individual packages can be upgraded one at a time,
  [@zendeskgarden/react-theming](#zendeskgardenreact-theming) must be upgraded
  first.

#### @zendeskgarden/react-accordions

- The following React component prop types have changed:
  - Removed `IItem` type export. Use `ITimelineItemProps` instead.
  - `IStepperLabelProps['icon']`: `ReactNode` -> `ReactElement`
  - `ITimelineItemProps['icon']`: `ReactNode` -> `ReactElement`

#### @zendeskgarden/react-buttons

- Removed `ButtonGroup`: UI no longer recommended by Garden
- Removed `IIconProps` type export. Use `IButtonStartIconProps` or `IButtonEndIconProps` instead.
- `Anchor`: renders with an underline for improved accessibility. The same
  treatment applies to `<Button isLink>`. The default can be removed with
  `<Anchor isUnderlined={false}>` for word-wrapped or redundant UI where the
  underline is considered to be a visual distraction. While technically not a
  breaking change, the migration guide highlights this change for upgrade cases
  that may render unexpected styling.

#### @zendeskgarden/react-chrome

- Removed `Sidebar` and `Subnav`: UI no longer recommended by Garden
- Removed `PRODUCT` type export. Use `IHeaderItemProps['product']` instead.
- Removed `hasFooter` prop for `Body` (no replacement needed)
- Removed `message` and `connect` values from `product` prop in `Header.Item` and `Nav.Item`
  Typings have been updated accordingly
- The following React component types have changed:
  - Removed `IBodyProps` type export.
  - `Header.ItemIcon`: `HTMLAttributes<HTMLElement>` -> `SVGAttributes<SVGElement>`
  - `Nav.ItemIcon`: `HTMLAttributes<HTMLElement>` -> `SVGAttributes<SVGElement>`
- Added `Nav.List` as a semantic wrapper for `Nav.Item`. See the
  [README](../packages/chrome/README.md#usages) for details.

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

#### @zendeskgarden/react-draggable

- Use this package if you were using `@zendeskgarden/react-drag-drop` in `v8`

#### @zendeskgarden/react-dropdowns

- Use this package if you were using `@zendeskgarden/react-dropdowns.next` in `v8`
  - The `v8` version of `@zendeskgarden/react-dropdowns` is no longer maintained and is
    renamed to `@zendeskgarden/react-dropdowns.legacy` in `v9`
- `Menu`: value `auto` is no longer valid for the `fallbackPlacements` prop.
- Removed `label` prop from `OptGroup`. Use `legend` instead.

#### @zendeskgarden/react-forms

- Removed `MultiThumbRange`: UI no longer recommended by Garden
- The following types have changed:
  - removed `IFieldProps`
  - removed `IIconProps`. Use `IFauxInputStartIconProps` or `IFauxInputEndIconProps` instead.
  - `IMediaInputProps['start']`: `any` -> `ReactElement`
  - `IMediaInputProps['end']`: `any` -> `ReactElement`

#### @zendeskgarden/react-grid

- Exported constants prefixed with `ARRAY_` no longer have a prefix.
- The following types have been removed: `ALIGN_ITEMS`, `ALIGN_SELF`, `DIRECTION`,
  `JUSTIFY_CONTENT`, `TEXT_ALIGN`, `GRID_NUMBER`, `BREAKPOINT`, `SPACE`, and `WRAP`

#### @zendeskgarden/react-modals

- `DrawerModal`: renamed to `Drawer`
- `TooltipModal`: renamed to `TooltipDialog`
  - removed `popperModifiers` prop (see [note](#breaking-changes))
- Removed internal `useFocusVisible` hook for both `Modal` and `Drawer`. For
  non-Garden modal content that still depends on the polyfill for focus styling,
  either:
  1. Use updated `:focus-visible` styling provided by the `focusStyles` and
     `getFocusBoxShadow` theming utilities, or
  1. Use
     [@zendeskgarden/container-focusvisible](https://www.npmjs.com/package/@zendeskgarden/container-focusvisible)
     to restore the polyfill
- Removed `GARDEN_PLACEMENT` type export. Use `ITooltipDialogProps['placement']` instead.

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

- Removed `isHovered`, `isActive`, and `isFocused` props from `Table.OverflowButton`

#### @zendeskgarden/react-theming

- The default `theme` object has removed values for `colors.background` and
  `colors.foreground`. Use the `'background.default'` and `'foreground.default'`
  variables together with the v9 `getColor` utility instead.
- The theming `palette` has undergone a comprehensive redesign and now includes
  enhanced support for both light and dark modes. To facilitate a smoother
  transition, we have introduced a temporary utility, `getColorV8`, which is
  deprecated. This utility enables the application of the legacy version 8 color
  scheme to custom components that are not part of the Garden framework. It is
  recommended to utilize this stopgap measure until such components can be updated
  to leverage the full capabilities of v9 `getColor`.
- Removed the `Theme` default prop from all components. Garden components must
  be nested within `<ThemeProvider>` to receive the `Theme` object and
  render successfully.
- Removed `focusVisibleRef` prop (and the resulting scoping `<div>`) from
  `<ThemeProvider>`. Current browser support obviates the need for a
  `:focus-visible` polyfill.
- Removed `message` and `connect` values from `PALETTE.product`
- Utility function `getColor` has been refactored with a signature that supports
  v9 light/dark modes. Replace usage with `getColorV8` until custom components can
  be upgraded to utilize the new `getColor` function.
- Utility functions `getFocusBoxShadow` and `focusStyles` no longer take `hue`,
  `shade`, `spacerHue`, or `spacerShade` parameters. Use the `color` or
  `shadeColor` parameters instead. The new object parameters take the shape of
  refactored `getColor`.
- Utility function `getDocument` has been removed. Use `useDocument` instead.
- Utility function `isRtl` has been removed. Use `props.theme.rtl` instead.
- Utility function `withTheme` has been removed. Use `styled-components`
  [useTheme](https://styled-components.com/docs/api#usetheme) instead.
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

#### @zendeskgarden/react-typography

- `CodeBlock`: The `language` set has been reduced from 32 to 13, for a
  significant decrease in bundle size. If you encounter any essential languages
  that are missing, please [create an
  issue](https://github.com/zendeskgarden/react-components/issues). Garden will
  evaluate incorporating any business-critical
  [languages](https://prismjs.com/#supported-languages).
- The following React component types have changed:
  - `Span.Icon`: `HTMLAttributes<HTMLElement>` -> `SVGAttributes<SVGElement>`
  - `Span.StartIcon`: `HTMLAttributes<HTMLElement>` -> `SVGAttributes<SVGElement>`

#### @zendeskgarden/react-utilities

- This package has been removed.
- Migrate to `@zendeskgarden/container-utilities` and `@zendeskgarden/react-theming` to continue
  receiving updates.

### Deprecated components

The following subcomponents have been renamed to streamline imports and improve
affinity with their parent components. The deprecated exports will be removed in
a future major release. Use the following mappings to update subcomponent
properties.

<!-- markdownlint-disable MD024 -->

#### @zendeskgarden/react-chrome

- `FooterItem` -> `Footer.Item`
- `HeaderItem` -> `Header.Item`
- `HeaderItemIcon` -> `Header.ItemIcon`
- `HeaderItemText` -> `Header.ItemText`
- `HeaderItemWrapper` -> `Header.ItemWrapper`
- `NavItem` -> `Nav.Item`
- `NavItemIcon` -> `Nav.ItemIcon`
- `NavItemText` -> `Nav.ItemText`

#### @zendeskgarden/react-dropdowns

- `Hint` -> `Field.Hint`
- `Label` -> `Field.Label`
- `Message` -> `Field.Message`

#### @zendeskgarden/react-forms

- `Hint` -> `Field.Hint`
- `Label` -> `Field.Label`
- `Message` -> `Field.Message`

#### @zendeskgarden/react-grid

- `Col` -> `Grid.Col`
- `Row` -> `Grid.Row`

#### @zendeskgarden/react-modals

- `Body` -> `Modal.Body`
- `Close` -> `Modal.Close`
- `Footer` -> `Modal.Footer`
- `FooterItem` -> `Modal.FooterItem`
- `Header` -> `Modal.Header`

#### @zendeskgarden/react-notification

- `Close` -> `Alert.Close`, `Notification.Close`
- `Paragraph` -> `Alert.Paragraph`, `Notification.Paragraph`, `Well.Paragraph`
- `Title` -> `Alert.Title`, `Notification.Title`, `Well.Title`

#### @zendeskgarden/react-tables

- `Body` -> `Table.Body`
- `Caption` -> `Table.Caption`
- `Cell` -> `Table.Cell`
- `GroupRow` -> `Table.GroupRow`
- `Head` -> `Table.Head`
- `HeaderCell` -> `Table.HeaderCell`
- `HeaderRow` -> `Table.HeaderRow`
- `OverflowButton` -> `Table.OverflowButton`
- `Row` -> `Table.Row`
- `SortableCell` -> `Table.SortableCell`

#### @zendeskgarden/react-tabs

- `Tab` -> `Tabs.Tab`
- `TabList` -> `Tabs.TabList`
- `TabPanel` -> `Tabs.TabPanel`

#### @zendeskgarden/react-tooltips

- `Paragraph` -> `Tooltip.Paragraph`
- `Title` -> `Tooltip.Title`

## v8

[Migration Guide](https://github.com/zendeskgarden/react-components/blob/main/docs/migrations/v8.md)
