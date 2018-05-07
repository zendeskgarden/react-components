The `Checkbox` component is an abstraction around a hidden `input` element
to enforce our custom styling. All props applied to the `Checkbox` component are
mapped to that hidden `input` element.

All state interactions can be handled with the standard `<input type="checkbox">`
events and attributes including `checked` and `onChange()`

### Uncontrolled Usage

```jsx
<Checkbox>
  <Label>Example Uncontrolled Checkbox</Label>
  <Hint>Hinty Hint</Hint>
  <Message>Message goes here</Message>
</Checkbox>
```

### Controlled Usage

```jsx
initialState = {
  isChecked: false
};

getValidationType = isChecked => (isChecked ? 'success' : 'error');
getValidationMessage = isChecked =>
  isChecked ? 'Thanks for checking that' : 'You must enable this checkbox';

<Checkbox
  checked={state.isChecked}
  onChange={event => setState({ isChecked: event.target.checked })}
>
  <Label>Example controlled Checkbox</Label>
  <Hint>With some dynamic validation</Hint>
  <Message validation={getValidationType(state.isChecked)}>
    {getValidationMessage(state.isChecked)}
  </Message>
</Checkbox>;
```
