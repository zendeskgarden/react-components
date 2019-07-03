All UI components are themable by a unique component ID. These themes can be nested.

```jsx
const ThemableDiv = styled.div`
  margin: ${props => props.theme.space.base * 3}px;

  :hover {
    color: yellow;
  }

  ${props => retrieveComponentStyles('unique_id', props)};
`;

const Container = styled.div`
  border: grey solid;
  padding: ${props => props.theme.space.base * 5}px;
`;

const theme = {
  components: {
    unique_id: `color: red;`
  },
  space: {
    base: 4
  }
};

const nestedTheme = {
  components: {
    unique_id: `
      color: green;

      :hover {
        color: blue;
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
