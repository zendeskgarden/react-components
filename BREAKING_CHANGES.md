# v7.0.0

## @zendeskgarden/react-autocomplete

- removed; see `@zendeskgarden/react-dropdowns`

## @zendeskgarden/react-buttons

- no longer packages a `styles.css` dist; CSS is self-contained
- removed `ButtonGroupView`; use new `SplitButton` component instead
- removed `Icon`; just use `IconButton` with a `rotated` prop
- `ButtonGroup` now expects a `selectedItem` prop instead of `selectedKey`
- `ButtonGroup` now uses an `onSelect` callback replacing the `onStateChange`, it passes `selectedItem` directly rather than nesting it in an object

## @zendeskgarden/react-checkboxes

- removed; see `@zendeskgarden/react-forms`

## @zendeskgarden/react-loaders

- `<Dots />` loader no longer has the `velocity` prop
  - Use `duration` instead which accepts `ms` defaults to 1250ms

## @zendeskgarden/react-menus

- removed; see `@zendeskgarden/react-dropdowns`

## @zendeskgarden/react-radios

- removed; see `@zendeskgarden/react-forms`

## @zendeskgarden/react-select

- removed; see `@zendeskgarden/react-forms`

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

## @zendeskgarden/react-toggles

- removed; see `@zendeskgarden/react-forms`

## @zendeskgarden/react-typography

- rename `Code` hue prop
  - previously `<Code type="red">`
  - currently `<Code hue="red">`
