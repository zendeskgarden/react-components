All UI components are themable by a unique component ID. These themes can be nested.

```jsx
const { css } = require('styled-components');

const ThemableDiv = styled.div`
  margin: ${props => props.theme.space.base * 3}px;

  :hover {
    color: ${props => getColor({ hue: props.theme.colors.warningHue, theme: props.theme })};
  }

  ${props => retrieveComponentStyles('unique_id', props)};
`;

const Container = styled.div`
  border: ${props => props.theme.borders.sm};
  border-color: ${props => getColor({ hue: props.theme.colors.neutralHue, theme: props.theme })}
  border-radius: ${props => props.theme.borderRadii.md};
  padding: ${props => props.theme.space.base * 5}px;
`;

const theme = {
  components: {
    unique_id: css`
      color: ${props => getColor({ hue: props.theme.colors.dangerHue, theme: props.theme })};
    `
  },
  space: {
    base: 4
  }
};

const nestedTheme = {
  borderRadii: {
    md: 0
  },
  colors: {
    successHue: 'fuschia',
    neutralHue: 'purple'
  },
  components: {
    unique_id: css`
      color: ${props => getColor({ hue: props.theme.colors.successHue, theme: props.theme })};

      :hover {
        color: ${props => getColor({ hue: props.theme.colors.primaryHue, theme: props.theme })};
      }
    `
  },
  space: {
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
