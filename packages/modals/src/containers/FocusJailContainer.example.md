```jsx static
<FocusJailContainer>
  {({ getContainerProps }) => (
    <div {...getContainerProps()}>
      <p>Focus is locked within the parent element</p>
      <input />
      <button>Focusable Items</button>
    </div>
  )}
</FocusJailContainer>
```
