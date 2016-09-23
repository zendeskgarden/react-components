Use the theme provider to provide a theme for the children of the component.

```
const exampleTheme = require('../../../themes/example-theme').default;

<ThemeProvider theme={ exampleTheme }>
  <Grid columns={ 1 }>
    <Button>Button</Button>
    <Checkbox>Checkbox</Checkbox>
    <Toggle checked>Toggle</Toggle>
  </Grid>
</ThemeProvider>
```
