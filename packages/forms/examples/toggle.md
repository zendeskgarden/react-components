### Validation States

```jsx
initialState = {
  isChecked: false
};

getValidationType = isChecked => (isChecked ? 'success' : 'error');
getValidationMessage = isChecked =>
  isChecked ? 'Thanks for toggling that' : 'You must enable this toggle';

<Field>
  <Toggle
    checked={state.isChecked}
    onChange={event => setState({ isChecked: event.target.checked })}
  >
    <Label>Controlled toggle</Label>
    <Hint>With some dynamic validation</Hint>
    <Message validation={getValidationType(state.isChecked)}>
      {getValidationMessage(state.isChecked)}
    </Message>
  </Toggle>
</Field>;
```
