The Garden React Components supports theming using build in accent themes.

Right now we only have an example theme, but the idea is to support several
accent themes for each of the projects as the new branding becomes available.

Below you can change the theme of the styleguide:

```
const exampleTheme = require('../../themes/example-theme').default

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
