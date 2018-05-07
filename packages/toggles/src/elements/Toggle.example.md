The `Toggle` component is an abstraction around a hidden `input` element
to enforce our custom styling. All props applied to the `Toggle` component are
mapped to that hidden `input` element.

All state interactions can be handled with the standard `<input type="checkbox">`
events and attributes including `checked` and `onChange()`

### Uncontrolled Usage

```jsx
<Toggle>
  <Label>Example Uncontrolled Toggle</Label>
  <Hint>Hinty Hint</Hint>
  <Message>Message goes here</Message>
</Toggle>
```

### Controlled Usage

```jsx
initialState = {
  isChecked: false
};

getValidationType = isChecked => (isChecked ? 'success' : 'error');
getValidationMessage = isChecked =>
  isChecked ? 'Thanks for toggling that' : 'You must enable this toggle';

<Toggle checked={state.isChecked} onChange={event => setState({ isChecked: event.target.checked })}>
  <Label>Example controlled Toggle</Label>
  <Hint>With some dynamic validation</Hint>
  <Message validation={getValidationType(state.isChecked)}>
    {getValidationMessage(state.isChecked)}
  </Message>
</Toggle>;
```
