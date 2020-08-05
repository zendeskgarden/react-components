```jsx
<Field>
  <Label>Default Input</Label>
  <Hint>All fields support optional hints</Hint>
  <Input />
  <Message>Additional messages are also available</Message>
</Field>
```

### Validation

All form fields allow validation messages to be shown with
the `Message` component.

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

<Field>
  <Label>Dynamic Validation Example</Label>
  <Hint>Enter text to see validation states</Hint>
  <Textarea
    value={state.textValue}
    onChange={event => setState({ textValue: event.target.value })}
    validation={getValidation(state.textValue)}
    minRows={2}
  />
  <Message validation={getValidation(state.textValue)}>
    {getValidationMessage(state.textValue)}
  </Message>
</Field>;
```
