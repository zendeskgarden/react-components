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

Below you can change the theme of the styleguide:

```
const exampleTheme = require('../../../themes/example-theme').default

const selectTheme = (theme) => {
  localStorage.setItem('rc-theme', theme)
  location.reload()
};

<Grid>
  <ThemeProvider theme={ null }>
    <Button onClick={ () => selectTheme('default') }>Default theme</Button>
  </ThemeProvider>
  <ThemeProvider theme={ exampleTheme }>
    <Button onClick={ () => selectTheme('example') }>Example theme</Button>
  </ThemeProvider>
</Grid>
```
