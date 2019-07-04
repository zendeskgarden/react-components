### DEPRECATION WARNING

This container has been deprecated in favor of our new hook based container
[@zendeskgarden/container-field](https://garden.zendesk.com/react-containers/storybook/?path=/story/field-container--usefield).

This container will be removed in a future major release.

The `FieldContainer` component applies necessary accessibility attributes to a fields
label, input, hint, and message content.

```jsx
<FieldContainer>
  {({ getLabelProps, getInputProps, getHintProps }) => (
    <div>
      <div>
        <label {...getLabelProps()}>Accessible Native Input</label>
      </div>
      <div {...getHintProps()}>Optional Hint</div>
      <input {...getInputProps()} />
    </div>
  )}
</FieldContainer>
```
