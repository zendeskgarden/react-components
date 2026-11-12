# Garden Migration Guide

## v10

Garden v10 merges every `@zendeskgarden/react-*` package into a single
`@zendeskgarden/react-components` package and applies the v10 design updates.
The theme has a new palette and more border radii. `Button` and `Tag` are
pill-shaped by default. `Table` has a new design with rounded rows and a filled
header. Primary and selected controls use neutral colors. Garden
removes the exports that v9 deprecated and renames the exports that collided
when the packages merged.

The `@zendeskgarden/react-*` packages are deprecated and do not get v10
releases.

### Upgrade steps

1. Install `@zendeskgarden/react-components` and `styled-components` `^6.0.8`.
   Check the [peer dependencies](#all-components).
2. Change every `@zendeskgarden/react-*` import to
   `@zendeskgarden/react-components`. Keep the [Chrome](#chrome) components
   that v10 does not include, and replace the
   [legacy dropdowns](#legacy-dropdowns).

   A codemod for this step is not available yet. Until it is, change the
   imports with a search and replace.

3. Replace the [removed exports](#removed-exports) and the
   [renamed exports](#renamed-exports).
4. Read the component sections under [Breaking changes](#breaking-changes) and
   update your code where a default changed. v10 applies a new visual design, so
   expect diffs in visual regression tests. Primary and selected controls (the
   primary `Button`, `Checkbox`, `Radio`, `Toggle` and `Tiles`) use neutral
   colors, with no opt-out.
5. Uninstall the `@zendeskgarden/react-*` packages.

You can migrate one part of your app at a time. v10 runs side by side with the
v9 packages if they are on the latest v9 release. Wrap the app in the v10
`ThemeProvider` from `@zendeskgarden/react-components` only.

### Breaking changes

#### All components

- Garden v10 updated the `styled-components` peer dependency to `^6.0.8` to
  support CSS container queries, which [v5.x cannot
  support](https://github.com/styled-components/styled-components/issues/3911#issuecomment-1386516979).
  Version 6.0.8 is the first to export the `CSSObject` type that Garden's types
  use.
- Garden v10 updated the `react` and `react-dom` peer dependencies to
  `^16.13.0 || ^17.0.0 || ^18.0.0 || ^19.0.0`. Node cannot read the named
  exports of React 16.8 to 16.12 from an ES module, so the ES module build fails
  to load there. Bundlers and Jest are not affected.
- The package `exports` map points `"."` to an ES module (`import`) and to one
  bundled CommonJS file (`require`), each with its own types (`index.d.ts` and
  `index.d.cts`). `require()`, Jest and React 17 consumers can load the package.
- Components assign `data-garden-id` and `data-garden-version` after all prop
  spreads, so a `data-garden-id` passed as a prop is always overwritten. In v9,
  `Button`, `Label`, `Message`, `Hint` and `Input` let an incoming id
  replace theirs.
- Styled component class names, such as `StyledButton-sc-1w7qux1-0`, change only
  when the component's source file moves or the component is renamed. Editing a
  file does not rename its classes. The second class on each element, which
  styled-components generates from the CSS, still changes when the styles
  change.

#### Theming

- `getColorV8` is removed (deprecated since v9). Use `getColor`.
- `getFocusBoxShadow` and `focusStyles` no longer accept the v8 `hue`, `shade`,
  `spacerHue` and `spacerShade` parameters. Use `color` and `spacerColor`.
- `theme.borderRadii` has seven keys, from `xs` (2px) to `full` (9999px). The
  new keys are `xs`, `xl`, `xxl` and `full`. `IGardenTheme` has the matching
  types.
- `StyledBaseIcon` is typed as a plain React component, so TypeScript no longer
  knows `.attrs`, `.withConfig` and `as` on `StyledBaseIcon` itself. They still
  work at runtime. Wrap it with `styled(StyledBaseIcon)` to use them with full
  types.
- `arrowStyles`, `focusStyles` and `menuStyles` return the new `GardenStyles`
  type instead of styled-components' `RuleSet`. Assigning their result to a
  `RuleSet` variable is now a type error; use `GardenStyles` instead.
- Components must render inside a `ThemeProvider`, as required since v9. In
  development, a component that renders without one now throws an error instead
  of silently applying the default theme.
- `componentStyles`, `mediaQuery`, `menuStyles`, `retrieveComponentStyles`,
  `useDocument` and `useWindow` take the theme as `IGardenTheme` (or
  `Partial<IGardenTheme>`) instead of styled-components' `DefaultTheme`. A
  project on styled-components 6 that does not augment `DefaultTheme` and
  passes `props.theme` must cast it (`props.theme as IGardenTheme`), or keep
  augmenting `DefaultTheme` as before.

#### Typing the theme in your project

How to make `useTheme()` and styled-component templates aware of Garden's
theme fields depends on what you are building.

**Applications:** augment styled-components' `DefaultTheme` once, and every
`useTheme()` call and template callback returns `IGardenTheme` with no casts:

```ts
// styled.d.ts
import 'styled-components';
import type { IGardenTheme } from '@zendeskgarden/react-components';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends IGardenTheme {}
}
```

**Libraries:** do not augment `DefaultTheme`. The augmentation applies to the
whole compilation, so a published package would impose Garden's theme shape on
its own consumers' projects. Cast the theme where you read it instead
(`useTheme() as IGardenTheme`, `props.theme as IGardenTheme`).

#### Removed exports

v9 deprecated these subcomponent exports and v10 removes them. Replace each one
with the sub-property of its parent component, imported from
`@zendeskgarden/react-components`. Some names existed in more than one v9
package, so check the package to find the right replacement.

```tsx
// Before
import { Tabs, Tab, TabList, TabPanel } from '@zendeskgarden/react-tabs';

// After: use <Tabs.TabList>, <Tabs.Tab> and <Tabs.TabPanel>
import { Tabs } from '@zendeskgarden/react-components';
```

The prop types (for example `ITabProps`, `ITabPanelProps` and `ITooltipProps`)
are still exported, so you can type the sub-properties.

| Removed export   | v9 package            | Replacement                                                     |
| ---------------- | --------------------- | --------------------------------------------------------------- |
| `Hint`           | `react-dropdowns`     | `ComboboxField.Hint`                                            |
| `Label`          | `react-dropdowns`     | `ComboboxField.Label`                                           |
| `Message`        | `react-dropdowns`     | `ComboboxField.Message`                                         |
| `Hint`           | `react-forms`         | `Field.Hint`                                                    |
| `Label`          | `react-forms`         | `Field.Label`                                                   |
| `Message`        | `react-forms`         | `Field.Message`                                                 |
| `Col`            | `react-grid`          | `Grid.Col`                                                      |
| `Row`            | `react-grid`          | `Grid.Row`                                                      |
| `Body`           | `react-modals`        | `Modal.Body`                                                    |
| `Close`          | `react-modals`        | `Modal.Close`                                                   |
| `Footer`         | `react-modals`        | `Modal.Footer`                                                  |
| `FooterItem`     | `react-modals`        | `Modal.FooterItem`                                              |
| `Header`         | `react-modals`        | `Modal.Header`                                                  |
| `Close`          | `react-notifications` | `Alert.Close` or `Notification.Close`                           |
| `Paragraph`      | `react-notifications` | `Alert.Paragraph`, `Notification.Paragraph` or `Well.Paragraph` |
| `Title`          | `react-notifications` | `Alert.Title`, `Notification.Title` or `Well.Title`             |
| `Body`           | `react-tables`        | `Table.Body`                                                    |
| `Caption`        | `react-tables`        | `Table.Caption`                                                 |
| `Cell`           | `react-tables`        | `Table.Cell`                                                    |
| `GroupRow`       | `react-tables`        | `Table.GroupRow`                                                |
| `Head`           | `react-tables`        | `Table.Head`                                                    |
| `HeaderCell`     | `react-tables`        | `Table.HeaderCell`                                              |
| `HeaderRow`      | `react-tables`        | `Table.HeaderRow`                                               |
| `OverflowButton` | `react-tables`        | `Table.OverflowButton`                                          |
| `Row`            | `react-tables`        | `Table.Row`                                                     |
| `SortableCell`   | `react-tables`        | `Table.SortableCell`                                            |
| `Tab`            | `react-tabs`          | `Tabs.Tab`                                                      |
| `TabList`        | `react-tabs`          | `Tabs.TabList`                                                  |
| `TabPanel`       | `react-tabs`          | `Tabs.TabPanel`                                                 |
| `Paragraph`      | `react-tooltips`      | `Tooltip.Paragraph`                                             |
| `Title`          | `react-tooltips`      | `Tooltip.Title`                                                 |

The deprecated Chrome subcomponents (`FooterItem`, `HeaderItem`, `NavItem` and
the others) are removed with the rest of Chrome. See [Chrome](#chrome).

#### Renamed exports

Some names existed in more than one v9 package. The single package exports each
name once, so these exports have a new name:

| v9 import                              | v10 name                | Note                                                               |
| -------------------------------------- | ----------------------- | ------------------------------------------------------------------ |
| `Field` from `react-dropdowns`         | `ComboboxField`         | `Field` is the forms field wrapper.                                |
| `Tag` from `react-dropdowns`           | `ComboboxTag`           | `Tag` is the standalone tags component.                            |
| `ITagProps` from `react-dropdowns`     | `IComboboxTagProps`     | `ITagProps` is the tags prop type.                                 |
| `ILabelProps` from `react-dropdowns`   | `IComboboxLabelProps`   | `ILabelProps` is the forms label prop type.                        |
| `IMessageProps` from `react-dropdowns` | `IComboboxMessageProps` | `IMessageProps` is the forms message prop type.                    |
| `IRowProps` from `react-grid`          | `IGridRowProps`         |                                                                    |
| `IRowProps` from `react-tables`        | `ITableRowProps`        |                                                                    |
| `PLACEMENT` from `react-modals`        | `MODAL_PLACEMENT`       | `PLACEMENT` is the theming enum. The modal list includes `'auto'`. |

```ts
// Before
import { Field, Tag } from '@zendeskgarden/react-dropdowns';

// After
import { ComboboxField, ComboboxTag } from '@zendeskgarden/react-components';
```

> **Note:** Only `IRowProps` fails to compile if you forget to rename it. The
> other old names still exist in the new package but refer to a different
> export, so search for them by hand.

`VALIDATION` was the same constant in `react-dropdowns` and `react-forms`
(dropdowns re-exported it from forms). It keeps its name. Change only the import
source.

#### Chrome

The package contains only `Sheet`, `SkipNav` and their prop types from
`@zendeskgarden/react-chrome`. These exports are not available:

`Chrome` · `Body` · `Content` · `Main` · `Header` · `Footer` · `Nav` ·
`PRODUCTS` · `IChromeProps` · `IHeaderProps` · `IHeaderItemProps` ·
`IHeaderItemTextProps` · `IHeaderItemWrapperProps` · `INavProps` ·
`INavItemProps` · `INavItemTextProps`

The deprecated subcomponents `FooterItem`, `HeaderItem`, `HeaderItemIcon`,
`HeaderItemText`, `HeaderItemWrapper`, `NavItem`, `NavItemIcon` and
`NavItemText` are not available either.

If you still need any of them, keep importing them from
`@zendeskgarden/react-chrome`.

#### Legacy dropdowns

The legacy dropdowns package (`@zendeskgarden/react-dropdowns.legacy`, the v8
`react-dropdowns` renamed in v9) is not part of v10. Move any remaining usage to
these components:

| Legacy export          | Replacement                         |
| ---------------------- | ----------------------------------- |
| `Autocomplete`         | `Combobox`                          |
| `Select`               | `Combobox`                          |
| `Multiselect`          | `Combobox` with `isMultiselectable` |
| `Dropdown` + `Trigger` | `Menu`                              |

#### Button, ChevronButton, IconButton and SplitButton

- `Button`, `ChevronButton` and `IconButton` are **pill-shaped by default**.
  Pass `isPill={false}` for the 8px radius. In a `SplitButton`, pass it to both
  halves, or the shapes don't match.
- `isNeutral` is on by default: an unset `isNeutral` renders like
  `isNeutral={true}`. In v9 an unset `isNeutral` gave a basic or outline
  `Button` primary-colored text and border. Pass `isNeutral={false}` to keep
  that look. A primary `Button` is neutral with or without `isNeutral`.

#### Combobox

- The tag inside a multiselect `Combobox` renders
  `data-garden-id="dropdowns.combobox.tag"` instead of `tags.tag_view`. The
  standalone `Tag` keeps `tags.tag_view`. Update selectors and
  `theme.components['tags.tag_view']` overrides that target combobox tags.
- `ComboboxTag` is **square by default** (the `Tag` itself is pill-shaped). The
  `isPill` prop defaults to `false`. Pass `isPill` for the pill look.
- The combobox sets the tag size, so a `size` in the `tagProps` of an `Option`
  is dropped.

#### MediaInput

- `MediaInput` sets `aria-invalid` from `validation`, as `Input` does. In v9 it
  always rendered `aria-invalid="false"`.

#### Table

`Table` has a new design with the same API. Header cells and group row cells
are filled with `background.subtle` and have rounded ends, and so do the hover,
selected and striped colors of body rows. Adjacent selected rows have square
corners where they meet, and the row above a `Table.GroupRow` has no bottom
border. These changes can affect custom styles:

**Custom styles**

- Garden draws row colors on the cells, not on the `tr`, and the table uses
  `border-collapse: separate`. On a body row, the style and color of a `tr`
  bottom border still apply, also in a `theme.components` override for
  `tables.row`, so `border-bottom: none` still removes the row's border. The
  border width and the other sides have no effect, and neither does any `tr`
  border on header and group rows (`tables.header_row` and `tables.group_row`).
- A `tr` background still paints under the cells of a body row. It shows
  through cells with no color, mixes with the semi-transparent hover, selected
  and striped colors, and has square corners in Firefox. Move row backgrounds to
  the cells. Header and group row cells are opaque, so a background on their
  `tr` doesn't show.

  ```tsx
  // Before
  const StyledRow = styled(Table.Row)`
    background-color: ${({ theme }) => getColor({ variable: 'background.subtle', theme })};
  `;

  // After
  const StyledRow = styled(Table.Row)`
    > td {
      background-color: ${({ theme }) => getColor({ variable: 'background.subtle', theme })};
    }
  `;
  ```

- A hovered, selected or striped row paints its color on every cell (`td` and
  `th`), so in those states it replaces a custom cell background.
- Cell borders no longer collapse, so adjacent cells with custom borders show
  both borders.
- Garden uses pseudo-elements on body cells for the row border and the focus
  indicator. Custom pseudo-elements on body cells may conflict.
- Selected rows render `data-garden-selected="true"`, so DOM snapshots change.
  The attribute is not part of the public API, so don't rely on it. To select or
  style selected rows, pass your own attribute along with `isSelected`.

**Sizes and alignment**

- Cells are vertically centered. In v9, body cells aligned to the top and header
  cells to the bottom, so in a row with wrapped text the other cells now center
  instead of lining up with the first line.
- `size="large"` rows are 48px tall instead of 64px. Header rows are 40px for
  `small` and 48px for `medium` and `large` (72px for `large` in v9). Header
  cells have the same vertical padding at every size.
- The header has no bottom border. A 4px gap separates it from the body.
- `Table.OverflowButton` has no top margin. The row centers it.

**Popups in cells**

- The cells of a body row (`td` and `th` in a `Table.Row`) are
  `position: relative`. Absolutely positioned content in a cell, such as a
  `Menu`, `Tooltip` or `DatePicker` without `appendToNode`, is placed against
  the cell. A cell whose `overflow` is not `visible` (including `isTruncated`)
  clips it, so use `appendToNode` there.
- Menus and tooltips rendered in the table (without `appendToNode`) are
  `max-content` wide. A tooltip there without `zIndex` is `z-index: 1`, so it
  paints over the rows below.

**Sticky head**

- A sticky `Table.Head` is `z-index: 2` instead of 1. It paints
  `background.default` over the rows that scroll under its rounded corners and
  the gap below it. On another background color, those areas show as
  `background.default`.
- A sticky head sticks at the scroll container's padding edge, so top padding on
  the scroll container lets rows show above the head. Put that padding on an
  inner wrapper instead.
- With a sticky `Table.Head`, each `Table.GroupRow` sticks below the head
  (`z-index: 1`), also when header cells wrap, until the next group row takes
  its place. It hides the rows under its rounded corners the same way.
- With a sticky `Table.Head`, body rows and their cells have a
  `scroll-margin-top`, and so do controls in the cells when they get keyboard
  focus. Focus and `scrollIntoView` bring them into view below the head and the
  stuck group row, not under them. A `scroll-padding-top` on the scroll
  container adds to this margin.

#### Tabs

`Tabs` has a new design, and tabs that do not fit move into an overflow menu
instead of being clipped.

- New heights: 40px horizontal tabs, 32px vertical tabs, no inline padding on
  horizontal tabs. This changes the layout of every page that uses tabs.
- A sliding indicator element (`tabs.indicator`) replaces the selected tab's
  border. It is not in server-rendered HTML until the client measures; the
  selected tab has `aria-selected` from the first render.
- `Tabs.TabList` renders a container (`tabs.tablist_container`) around the tab
  list. `className` and `style` go on the container; `ref` and the other props
  stay on the `role="tablist"` element. Selectors on the list's children
  (`:last-child`, `children.length`) can see the new elements.
  `styled(Tabs.TabList)` rules that target the tabs with a child selector
  (`& > [role='tab']`) no longer match: the tabs are one level deeper. Theme
  overrides on `components['tabs.tablist']` no longer reach the rule under the
  tabs or the tab list height; both moved to `tabs.tablist_container`.
- Tabs are `display: flex` (they were `inline-block` or `block`), and the 20px
  gap under the horizontal tab list is gone: panel content now touches the
  rule.
- Tabs no longer clip their content: a `max-width` on a tab no longer
  truncates its label with an ellipsis. A long label widens the tab, and tabs
  that do not fit move into the overflow menu.
- The selected and hovered tab labels keep the default foreground color (they
  were `foreground.primary`), and the pressed (`:active`) style is gone.
  Selection is carried by the indicator.
- Tabs that do not fit move into an overflow menu (`tabs.overflow_button`),
  horizontally and, when the tab list height is constrained, vertically. Set
  `renderOverflowLabel` on `Tabs.TabList` to localize the trigger. Set `label`
  on tabs whose children are not plain text so the menu can name them. The
  menu renders in the document body, so `overflow: hidden` or `overflow: auto`
  ancestors no longer clip it.
- Tabs must be `Tabs.Tab` elements or components that pass `item` through to
  `Tabs.Tab`: the overflow menu pairs each collected tab with its element. A
  tab rendered by a component without `item` could be clicked in v9 but was
  skipped by the arrow keys. It now also never moves into the overflow menu,
  so it can be clipped.
- `onChange` no longer fires on mount. Use `defaultSelectedItem` or
  `selectedItem` for the initial tab; without either, the first enabled tab is
  selected on the first render.
- The tab list gets `aria-label="Tabs"` unless you set `aria-label` or
  `aria-labelledby`. Garden warns in development when the default is used. An
  empty `aria-label=""` (or `null`) throws, as it does on every Garden
  component that requires an accessible name. Set a non-empty label or use
  `aria-labelledby`.
- Disabled tabs keep `aria-selected`, `id` and `aria-controls`. Panels are
  focusable (`tabIndex="0"`).
- Vertical tabs stack above their panels below the `sm` breakpoint.

#### Tag

- `Tag` is **pill-shaped by default**. Pass `isPill={false}` for a square tag.
  `isRound` takes precedence over `isPill`.
- A `hue` alone renders a subtle tint (a light background with text in the same
  hue). In v9 a `hue` gave the solid fill. Add the new `isEmphasis` prop to keep
  the solid look. A hex `hue`, `hue="white"` and `hue="black"` keep the solid
  fill with or without `isEmphasis`.

## v9

[Migration Guide](https://github.com/zendeskgarden/react-components/blob/main/docs/migrations/v9.md)
