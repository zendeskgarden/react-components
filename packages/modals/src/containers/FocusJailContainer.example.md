```jsx static
<FocusJailContainer>
  {({ getContainerProps, containerRef }) => (
    <div {...getContainerProps({ ref: containerRef })}>
      <p>Focus is locked within the parent element</p>
      <input />
      <button>Focusable Items</button>
    </div>
  )}
</FocusJailContainer>
```
