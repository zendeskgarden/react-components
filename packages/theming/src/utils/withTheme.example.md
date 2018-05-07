The `withTheme` HOC allows you to interact with the `ThemeProvider` in
any child component.

```jsx
const LocalizedDiv = withTheme(({ theme, children }) => (
  <div
    style={{
      direction: theme.rtl ? 'rtl' : 'ltr',
      border: 'grey solid',
      padding: 16,
      marginTop: 16
    }}
  >
    {children}
  </div>
));

<State initialState={{ isRtl: true }}>
  {(state, setState) => (
    <ThemeProvider rtl={state.isRtl}>
      <div>
        <button onClick={() => setState({ isRtl: !state.isRtl })}>
          {state.isRtl ? 'Disable RTL' : 'Enable RTL'}
        </button>
        <LocalizedDiv>This content handles RTL localization asdfasdfasdf</LocalizedDiv>
      </div>
    </ThemeProvider>
  )}
</State>;
```
