## DEPRECATION WARNING

This component has been deprecated in favor of the API provided in the
[@zendeskgarden/container-focusjail](https://www.npmjs.com/package/@zendeskgarden/container-focusjail)
package.

This component will be removed in a future major release.

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
