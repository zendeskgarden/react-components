All UI components are themable by a unique component ID. These themes can be nested.

```jsx
const { css } = require('styled-components');

const ThemableDiv = styled.div`
  margin: ${props => props.theme.space.base * 3}px;

  :hover {
    color: ${props => getColor('warningHue', undefined, props.theme)};
  }

  ${props => retrieveComponentStyles('unique_id', props)};
`;

const Container = styled.div`
  border: ${props => props.theme.borders.sm};
  border-color: ${props => getColor('neutralHue', undefined, props.theme)}
  border-radius: ${props => props.theme.borderRadii.md};
  padding: ${props => props.theme.space.base * 5}px;
`;

const theme = {
  ...DEFAULT_THEME,
  components: {
    unique_id: css`
      color: ${props => getColor('dangerHue', undefined, props.theme)};
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
      color: ${props => getColor('successHue', undefined, props.theme)};

      :hover {
        color: ${props => getColor('primaryHue', undefined, props.theme)};
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
