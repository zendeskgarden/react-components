`RangeField` is a high-abstraction component that applies
the accessibility properties found in [@zendesk/garden-react-selection/FieldContainer](https://garden.zendesk.com/react-components/selection/)
to the textfield related view components it's provided.

```jsx
<RangeField>
  <Label>Labely label</Label>
  <Hint>Hint hint</Hint>
  <Range />
  <Message>Example Message</Message>
</RangeField>
```

### Controlled

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

<RangeField>
  <Label>Dynamic Validation Example</Label>
  <Hint>Move range to view changes. [value="{state.value}"]</Hint>
  <Range
    value={state.textValue}
    onChange={event => setState({ value: event.target.value })}
    step={5}
  />
  <Message validation={getValidation(state.value)}>{getValidationMessage(state.value)}</Message>
</RangeField>;
```
