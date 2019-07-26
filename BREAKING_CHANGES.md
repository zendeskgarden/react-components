# v7.0.0

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

## @zendeskgarden/react-loaders

- `<Dots />` loader no longer has the `velocity` prop
  - Use `duration` instead which accepts `ms` defaults to 1250ms

