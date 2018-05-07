`TextField` is a high-abstraction component that applies
the accessibility properties found in [@zendesk/garden-react-selection/FieldContainer](https://garden.zendesk.com/react-components/selection/)
to the textfield related view components it's provided.

```jsx
<TextField>
  <Label>Labely label</Label>
  <Hint>Hint hint</Hint>
  <Input />
  <Message>Example Message</Message>
</TextField>
```

### Controlled

```jsx
initialState = {
  textValue: ''
};

getValidation = value => (value.length === 0 ? 'error' : value.length < 10 ? 'warning' : 'success');

getValidationMessage = value =>
  value.length === 0
    ? 'Text must be greater than 0 characters'
    : value.length < 10
      ? 'Text must be greater than 10 characters'
      : 'You have enough characters';

<TextField>
  <Label>Dynamic Validation Example</Label>
  <Hint>Enter text to see validation states</Hint>
  <Textarea
    value={state.textValue}
    onChange={event => setState({ textValue: event.target.value })}
    validation={getValidation(state.textValue)}
    resizable
  />
  <Message validation={getValidation(state.textValue)}>
    {getValidationMessage(state.textValue)}
  </Message>
</TextField>;
```

### Inline Styling

```jsx
<TextField inline>
  <Label>Labely label</Label>
  <Input style={{ marginLeft: 8, marginRight: 8 }} />
  <Message>Example Message</Message>
</TextField>
```
