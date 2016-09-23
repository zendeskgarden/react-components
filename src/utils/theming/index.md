The Garden React Compnents supports theming using build in themes.

Right now we only have an example theme, but the idea is to support several
accent themes for each of the projects as the new branding becomes available.

Below you can change the theme of the styleguide:

```
const selectTheme = (theme) => {
  localStorage.setItem('rc-theme', theme)
  location.reload()
};

<Grid>
  <Button onClick={ () => selectTheme('default') }>Default theme</Button>
  <Button onClick={ () => selectTheme('example') }>Example theme</Button>
</Grid>
```
