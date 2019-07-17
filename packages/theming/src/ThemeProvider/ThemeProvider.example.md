All UI components are themable by a unique component ID. These themes can be nested.

```jsx
const { DEFAULT_THEME } = require('@zendeskgarden/react-theming/src');
const { css } = require('styled-components');

const ThemableDiv = styled.div`
  margin: ${props => props.theme.space.base * 3}px;

  :hover {
    color: ${props => getColor({ hue: '__warning', ...props })};
  }

  ${props => retrieveComponentStyles('unique_id', props)};
`;

const Container = styled.div`
  border: ${props => props.theme.borders.sm};
  border-color: ${props => getColor({ hue: '__neutral', ...props })}
  border-radius: ${props => props.theme.borderRadii.md};
  padding: ${props => props.theme.space.base * 5}px;
`;

const theme = {
  ...DEFAULT_THEME,
  components: {
    unique_id: css`
      color: ${props => getColor({ hue: '__danger', ...props })};
    `
  },
  space: {
    ...DEFAULT_THEME.space,
    base: 4
  }
};

const nestedTheme = {
  ...DEFAULT_THEME,
  borderRadii: {
    ...DEFAULT_THEME.borderRadii,
    md: 0
  },
  colors: {
    ...DEFAULT_THEME.colors,
    successHue: 'fuschia',
    neutralHue: 'purple'
  },
  components: {
    unique_id: css`
      color: ${props => getColor({ hue: '__success', ...props })};

      :hover {
        color: ${props => getColor({ hue: '__primary', ...props })};
      }
    `
  },
  space: {
    ...DEFAULT_THEME.space,
    base: 5
  }
};

<ThemeProvider theme={theme}>
  <Container>
    <ThemableDiv>Simple Theme</ThemableDiv>
    <ThemeProvider theme={nestedTheme}>
      <Container>
        <ThemableDiv>Nested Theme</ThemableDiv>
      </Container>
    </ThemeProvider>
  </Container>
</ThemeProvider>;
```
