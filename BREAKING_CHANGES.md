# v7.0.0

## @zendeskgarden/react-autocomplete

- removed; see `@zendeskgarden/react-dropdowns`

## @zendeskgarden/react-avatars

- no longer packages a `styles.css` dist; CSS is self-contained
- removed child `Text` export
  - previously `Text`; currently `Avatar.Text`
- FEATURES: `surfaceColor`, `backgroundColor`, and `foregroundColor` props to ease color control

## @zendeskgarden/react-buttons

- no longer packages a `styles.css` dist; CSS is self-contained
- removed `ButtonGroupView`; use new `SplitButton` component instead
- removed `Icon`; just use `IconButton` with a `rotated` prop
- `ButtonGroup` now expects a `selectedItem` prop instead of `selectedKey`
- `ButtonGroup` now uses an `onSelect` callback replacing the `onStateChange`,
  it passes `selectedItem` directly rather than nesting it in an object
- `ButtonGroup` now requires it's children to contain a `value` prop which is returned when selected

## @zendeskgarden/react-datepickers

- `Datepicker` and `DatepickerRange` `small` prop is renamed to `isCompact`

## @zendeskgarden/react-loaders

- `<Dots />` loader no longer has the `velocity` prop
  - Use `duration` instead which accepts `ms` defaults to 1250ms
- `<Skeleton />` loader has renamed `dark` prop to `isDark`

## @zendesk/react-tags

- no longer packages a `styles.css` dist; CSS is self-contained
- removed child component exports
  - previously `Avatar`; currently `Tag.Avatar`
  - previously `Close`; currently `Tag.Close`
- rename `type` -> `hue` prop
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

## @zendeskgarden/react-typography

- rename `Code` hue prop
  - previously `<Code type="red">`
  - currently `<Code hue="red">`
