```jsx
const { zdSpacingXs } = require('@zendeskgarden/css-variables');

const StyledHint = styled(Hint)`
  margin-bottom: ${zdSpacingXs};
`;

<Field>
  <Label>Default Range</Label>
  <StyledHint>Supports all native props</StyledHint>
  <Range />
</Field>;
```

### Controlled Example

```jsx
const { zdSpacingXs } = require('@zendeskgarden/css-variables');

const StyledHint = styled(Hint)`
  margin-bottom: ${zdSpacingXs};
`;

const StyledMessage = styled(Message)`
  margin-top: ${zdSpacingXs};
`;

initialState = {
  value: 25
};

getValidation = value => (value < 25 ? 'error' : value < 50 ? 'warning' : 'success');

getValidationMessage = value =>
  value < 25
    ? 'Value must be greater than 25'
    : value < 50
    ? 'Value must be greater than 50'
    : "You're good!";

<Field>
  <Label>Dynamic Validation</Label>
  <StyledHint>
    Move range to view changes. [value="
    {state.value}
    "]
  </StyledHint>
  <Range
    value={state.textValue}
    onChange={event => setState({ value: event.target.value })}
    step={5}
  />
  <StyledMessage validation={getValidation(state.value)}>
    {getValidationMessage(state.value)}
  </StyledMessage>
</Field>;
```
