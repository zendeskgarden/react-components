# Garden Migration Guide

## v8

### Overview

The upgrade to Garden v8 is designed to allow you to upgrade each package individually. It is not
necessary to upgrade all Garden packages to v8 at once. Each upgrade step can be completed in
isolation.

### Upgrade Steps

- Upgrade all existing Garden React dependencies to their [latest `v7`](https://github.com/zendeskgarden/react-components/blob/main/CHANGELOG.md#v700-2019-10-17)
  version.
- Upgrade `@zendeskgarden/react-theming` to `v8`.
  - `react-theming@v8` includes breaking changes. Refer to the
    [Breaking Changes](#breaking-changes) section for specific upgrade instructions.
  - `react-theming@v8` is a valid peerDependency for all `v7` packages.
- Upgrade all other `@zendeskgarden/react-*` packages to `v8` individually.
  - These upgrades included several breaking changes. Refer to the [Breaking Changes](#breaking-changes)
    section for specific upgrade instructions.

### Breaking Changes

#### All packages

- Garden v8 packages use CSS-in-JS and no longer provide CSS files.
  - Remove all Garden React CSS imports.
  - i.e `@zendeskgarden/react-buttons/dist/styles.css`
- All themable component IDs (`data-garden-id` attributes) have been renamed for consistency across
  all packages.
- Any custom theming provided to the `ThemeProvider` component should be checked for accuracy.
- Garden v8 packages no longer provide UMD bundles.

#### @zendeskgarden/react-avatars

- The `Text` component has been removed.
  - Use `Avatar.Text` instead.
- New props to ease color control: `surfaceColor`, `backgroundColor`, and `foregroundColor`.

#### @zendeskgarden/react-breadcrumbs

- The `Item` component has been removed.
  - Instead of passing `Item` components as children to `Breadcrumb`, consumers can now pass any
    inline elements of their choice.
  - For example, a child of `Breadcrumb` can be a `<span>` or a component that renders an `<a>`.

#### @zendeskgarden/react-buttons

- The following props have been renamed:
  - `Button`
    - `basic` -> `isBasic`
    - `danger` -> `isDanger`
    - `external` -> `isExternal`
    - `link` -> `isLink`
    - `pill` -> `isPill`
    - `primary` -> `isPrimary`
    - `stretched` -> `isStretched`
    - `muted` -> removed (use theming to adjust `primaryHue`)
  - `ButtonGroup`
    - `selectedKey` -> `selectedItem`
    - `onStateChange` -> `onSelect`
      - The `onSelect` callback passes `selectedItem` directly rather than nesting it in an object.
- The `ButtonGroupView` component has been removed.
- The `Icon` component has been removed.
  - Use an `IconButton` with a modified `isRotated` prop instead.
- The `ButtonGroup` component now requires its children to contain a `value` prop which is returned
  when selected.
- Buttons no longer provide a minimum width.

#### @zendeskgarden/react-chrome

- The following props have been renamed:
  - `Header`
    - `standalone` -> `isStandalone`
  - `HeaderItem`
    - `isRound` -> `isRound`
    - `logo` -> `hasLogo`
  - `HeaderItemText`
    - `clipped` -> `isClipped`
  - `Nav`
    - `expanded` -> `isExpanded`
  - `NavItem`
    - `logo` -> `hasLogo`
    - `brandmark` -> `hasBrandmark`
    - `current` -> `isCurrent`
  - `CollapsibleSubNavItem`
    - `expanded` -> `isExpanded`
  - `SubNavItem`
    - `current` -> `isCurrent`
- The `Nav` component no longer takes a `dark` or `light` prop.
  - Use the `Chrome` component’s `hue` prop to apply a custom color.
  - All themed components will dynamically change styling to create an accessible contrast level.
- All state and styling props such as `active`, `focused`, ‘hover` etc. have been removed.

#### @zendeskgarden/react-datepickers

- The following props have been renamed:
  - `Datepicker`
    - `small` -> `isCompact`
    - `animated` -> `isAnimated`
  - `DatepickerRange`
    - `small` -> `isCompact`

#### @zendeskgarden/react-dropdowns

- The following props have been renamed or removed:
  - `Autocomplete`, `MultiSelect`, `Select`
    - `small` -> `isCompact`
    - `bare` -> `isBare`
    - `open` -> `isOpen`
    - `focused` -> removed
    - `hovered` -> removed
  - `Label`
    - `regular` -> `isRegular`
    - `small` -> removed
  - `Hint`
    - `small`-> removed
  - `Menu`
    - `animate` -> `isAnimated`
    - `small` -> `isCompact`
    - `hidden` -> `isHidden`
    - `arrow` -> `hasArrow`
  - `AddItem`, `HeaderItem`, `Item`, `MediaItem`, `NextItem`, `PreviousItem`
    - `active` -> removed
    - `focused` -> removed
    - `hovered` -> removed

#### @zendeskgarden/react-forms

- The following props have been renamed or removed:
  - The following props have been removed from all components:
    - `focused`
    - `hovered`
    - `mediaLayout`
    - `open`
    - `select`
    - `tagLayout`
  - Field
    - `inline` -> removed
      - Inline layouts can now be achieved with custom styling.
  - Hint
    - `small` -> removed
      - Use `isCompact` on the `Input` component instead.
  - Label
    - `regular` -> `isRegular`
    - `hidden` -> removed
    - `indeterminate` -> removed
    - All attributes should be applied to the corresponding `<input>` component (checked, disabled, indeterminate).
  - `Input`, `Textarea`, `FauxInput`
    - `bare` -> `isBare`
    - `small` -> `isCompact`
  - `TextArea`
    - `resizable` -> `isResizable`
- Checkbox now uses the `indeterminate` prop which was previously obfuscated under the `Label` component.

#### @zendeskgarden/react-grid

- The following props have been renamed or removed:
  - `Grid`
    - `fluid` -> removed (which now defaults to `true`)
      - Garden does not have an opinion re: non-fluid maximum container widths per breakpoint. If
        you need these four `max-width` CSS properties across the small, medium, large, and
        extra-large breakpoints, either use Bootstrap's `.container` or add them to your
        application.
  - `Row`
    - `gutters` -> removed
      - Use `<Grid gutters={false}>` instead
  - `Col`
    - `justifyContent` -> removed
      - Row component’s `justifyContent` prop can be used for alignment.
- New features and fixes include:
  - Ability to resize gutters (default = 20px).
  - Ability to set number of columns (default = 12).
  - Added Col `offset` and fixed RTL across all offsets.
  - Added Row `alignContent` prop.
  - Most Row/Col props accept responsive variants for targeting screen size breakpoints.

#### @zendeskgarden/react-loaders

- The following props have been renamed or removed:
  - `Dots`
    - `velocity` -> removed
      - Use `duration` instead which accepts milliseconds. The default is 1250ms.
  - `Skeleton`
    - `dark` -> `isLight`

#### @zendeskgarden/react-modals

- The following props have been renamed or removed:
  - `Modal`
    - `animate` -> `isAnimated`
    - `center` -> `isCentered`
    - `large` -> `isLarge`
  - `Header`
    - `danger` -> `isDanger`
  - `Close`
    - `focus` -> removed
    - `hovered` -> removed
- The `Backdrop` and `ModalView` components have been removed.

#### @zendeskgarden/react-notifications

- The following props have been renamed:
  - `Well`
    - `floating` -> `isFloating`
    - `recessed` -> `isRecessed`

#### @zendeskgarden/react-pagination

- The following components have been removed:
  - `Gap`
  - `NextPage`
  - `Page`
  - `PaginationView`
  - `PreviousPage`
- A new `pageGap` prop has been added.
  - It is used to modify the gap display positioning.

#### @zendeskgarden/react-tables

- All components in this package now use native `<table>` styling.
  - Previous implementations may have hard-coded column widths. This may no longer be necessary.
- All state and styling props such as `active`, `focused`, ‘hover` etc. have been removed.
- The following props have been renamed:
  - `Cell`
    - `minimum` -> `isMinimum`
    - `truncate` -> `isTruncated`
    - `menu` -> `hasOverflow`
  - `Row`
    - `striped` -> `isStriped`
    - `selected` -> `isSelected`

#### @zendeskgarden/react-tabs

- A new structure is required for the `Tabs` component.
  - This new structure allows consumers to style individual tags if necessary.

```jsx
<Tabs>
  <TabList>
    <Tab item="tab-1">Tab 1</Tab>
  </TabList>
  <TabPanel item="tab-1">Content</TabPanel>
</Tabs>
```

- All state and styling props such as `active`, `focused`, `hover`, `selected`, etc. have been removed.
- The `vertical` prop has been renamed to `isVertical`.

#### @zendeskgarden/react-tags

- Child component exports `Avatar` and `Close` have been removed.
  - Use `Tag.Avatar` and `Tag.Close` instead.
- The following props have been renamed:
  - `Tag`
    - `pill` -> `isPill`
    - `round` -> `isRound`
    - `type` -> `hue`

#### @zendeskgarden/react-theming

- `retrieveTheme` has been renamed to `retrieveComponentStyles`.
- All theming is now provided through a single `theme` prop.
  - RTL notation
    - Previously `<ThemeProvider rtl>`
    - Currently `<ThemeProvider theme={{ ...DEFAULT_THEME, rtl: true }}>`
  - Custom `document` object
    - Previously `<ThemeProvider document={doc}>`
    - Currently `<ThemeProvider theme={{ ...DEFAULT_THEME, document: doc }}>`
- Per component styles
  - Previously `theme[COMPONENT_ID]`
  - Currently `theme.components[COMPONENT_ID]`.

#### @zendeskgarden/react-tooltips

- The following exports have been removed:
  - `LightTooltip`
  - `TooltipView`
  - `GARDEN_PLACEMENTS`
  - `POPPER_PLACEMENTS`
  - `getPopperPlacement`
  - `getRtlPopperPlacement`
- The following props have been renamed or removed:
  - `delayMilliseconds` -> `delayMS`
  - `arrow` -> `hasArrow`
  - `appendToBody` -> `appendToNode`
    - It is required to pass the HTML element which the tooltip should append to.
  - `trigger` -> removed
    - Tooltip `children` now accepts a single element which acts as the triggering element
- Tooltip `content` prop now accepts Tooltip content (previous `children`)
- The Tooltip trigger no longer has a wrapping `<div>` element
  - An optional `refKey` prop has been added for retrieving the ref from the triggering element.

#### @zendeskgarden/react-typography

- The following props have been renamed:

  - `Code`
    - `type` -> `hue`
  - `Typography`, `MD`, `LG`, `SM`,
    - `monospace` -> `isMonospace`

#### @zendeskgarden/react-utilities

- This package has been deprecated and will be removed in a future major release.
- Migrate to `@zendeskgarden/container-utilities` to continue receiving updates.
