# Garden Migration Guide

## v10

Garden v10 merges every `@zendeskgarden/react-*` package into a single
`@zendeskgarden/react-components` package and applies the v10 design updates.
The theme has a new palette and more border radii. `Button` and `Tag` are
pill-shaped by default. Primary and selected controls use neutral colors. Garden
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

#### Tag

- `Tag` is **pill-shaped by default**. Pass `isPill={false}` for a square tag.
  `isRound` takes precedence over `isPill`.
- A `hue` alone renders a subtle tint (a light background with text in the same
  hue). In v9 a `hue` gave the solid fill. Add the new `isEmphasis` prop to keep
  the solid look. A hex `hue`, `hue="white"` and `hue="black"` keep the solid
  fill with or without `isEmphasis`.

## v9

[Migration Guide](https://github.com/zendeskgarden/react-components/blob/main/docs/migrations/v9.md)
