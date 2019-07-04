### DEPRECATION WARNING

This container has been deprecated in favor of our new hook based container
[@zendeskgarden/container-focusjail](https://garden.zendesk.com/react-containers/storybook/?path=/story/focusjail-container--usefocusjail).

This container will be removed in a future major release.

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
