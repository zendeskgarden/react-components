#### WARNING

Theming of styles affects all usages of a component within the `ThemeProvider`. Try extending one of our Presentation components and see if that fits your specific usage.

All UI components are themable by an unique component ID. These themes can be nested.

```jsx
const ThemableButton = styled.div`
  margin: 12px;

  :hover {
    color: yellow;
  }

  ${props => retrieveTheme('button', props)}
`;

const Container = styled.div`
  border: grey solid;
  padding: 24px;
`;

const theme = {
  'button': `color: red;`
};

const nestedTheme = {
  'button': `
    color: green;
    :hover {
      color: blue;
    }
  `
};

<ThemeProvider theme={theme}>
    <Container>
        <ThemableButton>Simple Theme</ThemableButton>
        <Container>
            <ThemeProvider theme={nestedTheme}>
                <ThemableButton>Nested Theme</ThemableButton>
            </ThemeProvider>
        </Container>
    </Container>
</ThemeProvider>
```
