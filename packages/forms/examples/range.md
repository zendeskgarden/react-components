```jsx
<Field>
  <Label>Default Range</Label>
  <Hint>Supports all native props</Hint>
  <Range />
</Field>
```

### Controlled Example

```jsx
initialState = {
  value: 25
};

getValidation = value => (value < 25 ? 'error' : value < 50 ? 'warning' : 'success');

getValidationMessage = value =>
  value < 25
    ? 'Value must be greater than 25'
    : value < 50
    ? 'Value must be greater than 50'
    : 'Youre good!';

<Field>
  <Label>Dynamic Validation</Label>
  <Hint>
    Move range to view changes. [value="
    {state.value}
    "]
  </Hint>
  <Range
    value={state.textValue}
    onChange={event => setState({ value: event.target.value })}
    step={5}
  />
  <Message validation={getValidation(state.value)}>{getValidationMessage(state.value)}</Message>
</Field>;
```
