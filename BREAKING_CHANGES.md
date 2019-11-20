# v8.0.0

NOTE: many style-related COMPONENT_IDs were renamed for consistency based
on the CSS-in-JS restructure. All component-level theming customizations
should be re-checked for ID naming accuracy.

## @zendeskgarden/react-breadcrumbs

- The `<Item>` component has been removed. The `<Breadcrumb>` component determines the last
  breadcrumb item and applies styling to each item. Instead of passing `<Item>` components as
  children to `<Breadcrumb>`, consumers can now pass in inline elements of their choice. For example,
  a child of `<Breadcrumb>` can be a `<span>` or a component that renders an `<a>`.

## @zendeskgarden/react-autocomplete

- removed; see `@zendeskgarden/react-dropdowns`

## @zendeskgarden/react-avatars

- no longer packages a `styles.css` dist; CSS is self-contained
- removed child `Text` export
  - previously `Text`; currently `Avatar.Text`
- FEATURES: `surfaceColor`, `backgroundColor`, and `foregroundColor` props to ease color control

## @zendeskgarden/react-buttons

- no longer packages a `styles.css` dist; CSS is self-contained
- prop renames:
  - `basic` -> `isBasic`
  - `danger` -> `isDanger`
  - `external` -> `isExternal`
  - `link` -> `isLink`
  - `pill` -> `isPill`
  - `primary` -> `isPrimary`
  - `stretched` -> `isStretched`
- removed `ButtonGroupView`; use new `SplitButton` component instead
- removed `Icon`; just use `IconButton` with an `isRotated` prop
- `ButtonGroup` now expects a `selectedItem` prop instead of `selectedKey`
- `ButtonGroup` now uses an `onSelect` callback replacing the `onStateChange`,
  it passes `selectedItem` directly rather than nesting it in an object
- `ButtonGroup` now requires it's children to contain a `value` prop which is returned when selected
- removed `min-width` CSS per design intent

## @zendeskgarden/react-datepickers

- `Datepicker` and `DatepickerRange` `small` prop is renamed to `isCompact`

## @zendeskgarden/react-forms

- no longer packages a `styles.css` dist; CSS is self-contained
- ALL
  - removed irrelevant state and layout styling props (focused, hovered, mediaLayout, open, select, tagLayout)
- Checkbox
  - Add `indeterminate` prop (previously obfuscated under `Label`)
- Input, Textarea, FauxInput
  - `bare` -> `isBare`
  - `small` -> `isCompact`
- Textarea
  - `resizable` -> `isResizable`
- Field
  - removed `inline` (effectively, useless) prop; inline layout is demonstrated within the examples
- Hint
  - removed `small` prop; all field layouts respond to `isCompact` placed on the input component
- Label
  - `regular` -> `isRegular`
  - removed remaining props – attributes should be applied to the corresponding `<input>` component
    (checked, disabled, indeterminate)

## @zendeskgarden/react-grid

- Prop renames:
  - Grid `debug` -> `isDebug`
  - Grid `fluid` -> `isFluid`
  - Row `gutters` -> `isCollapsed`
    - Note: boolean logic is reversed for API clarity, but default layout without any prop
      specified remains the same.
    - Previously `<Grid gutters={false} />`; currently `<Grid isCollapsed />`

## @zendeskgarden/react-loaders

- `<Dots />` loader no longer has the `velocity` prop
  - Use `duration` instead which accepts `ms` defaults to 1250ms
- `<Skeleton />` loader has renamed `dark` prop to `isDark`

## @zendesk/react-tabs

- no longer packages a `styles.css` dist; CSS is self-contained
- new required structure for `Tabs` component

```jsx
<Tabs>
  <TabList>
    <Tab item="tab-1">Tab 1</Tab>
  </TabList>
  <TabPanel item="tab-1">Content</TabPanel>
</Tabs>
```

- `vertical` prop has been renamed to `isVertical`
- All styling props have been removed
  - `hovered`, `active`, `focused`, and `selected`

## @zendesk/react-tags

- no longer packages a `styles.css` dist; CSS is self-contained
- removed child component exports
  - previously `Avatar`; currently `Tag.Avatar`
  - previously `Close`; currently `Tag.Close`
- prop renames:
  - `pill` -> `isPill`
  - `round` -> `isRound`
  - `type` -> `hue` prop
    - previously `<Tag type="blue" />`; currently `<Tag hue="blue" />`

## @zendeskgarden/react-textfields

- removed; see `@zendeskgarden/react-forms`

## @zendeskgarden/react-theming

- rename `retrieveTheme` -> `retrieveComponentStyles`.
- per component styles
  - previously `theme[COMPONENT_ID]`
  - currently `theme.components[COMPONENT_ID]`
- RTL notation
  - previously `<ThemeProvider rtl>`
  - currently `<ThemeProvider theme={{ ...DEFAULT_THEME, rtl: true }}>`
- custom `document` object
  - previously `<ThemeProvider document={doc}>`
  - currently `<ThemeProvider theme={{ ...DEFAULT_THEME, document: doc }}>`

## @zendeskgarden/react-tooltips

- Removed exports
  - LightTooltip
  - TooltipView
  - GARDEN_PLACEMENTS
  - POPPER_PLACEMENTS
  - getPopperPlacement
  - getRtlPopperPlacement
- rename `arrow` prop to `hasArrow`
- `appendToBody` prop is now `appendToNode`
  - You must now pass the HTML element which you would like the tooltip to append to
- Tooltip `trigger` prop is removed
  - Tooltip `children` now accepts a single element which acts as the triggering element
- Tooltip `content` prop now accepts Tooltip content (previous `children`)
- The Tooltip trigger no longer has a wrapping `<div>` element
  - An optional `refKey` prop has been added for retrieving the ref from the triggering element

## @zendeskgarden/react-typography

- rename `Code` hue prop
  - previously `<Code type="red">`
  - currently `<Code hue="red">`
- rename `monospace` -> `isMonospace` prop
