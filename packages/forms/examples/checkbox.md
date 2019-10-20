### Validation States

```jsx
initialState = {
  isChecked: false
};

getValidationType = isChecked => (isChecked ? 'success' : 'error');
getValidationMessage = isChecked =>
  isChecked ? 'Thanks for checking that' : 'You must enable this checkbox';

<Field>
  <Checkbox
    checked={state.isChecked}
    onChange={event => setState({ isChecked: event.target.checked })}
  >
    <Label>Controlled checkbox</Label>
    <Hint>With some dynamic validation</Hint>
    <Message validation={getValidationType(state.isChecked)}>
      {getValidationMessage(state.isChecked)}
    </Message>
  </Checkbox>
</Field>;
```
