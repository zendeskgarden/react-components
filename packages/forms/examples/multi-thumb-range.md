```jsx
const { zdSpacingXs } = require('@zendeskgarden/css-variables');

const StyledHint = styled(Hint)`
  margin-bottom: ${zdSpacingXs};
`;

initialState = {
  minValue: 0,
  maxValue: 100
};

<Field>
  <Label>Default MultiThumb Range</Label>
  <StyledHint>
    Min Value: {state.minValue} | Max Value: {state.maxValue}
  </StyledHint>
  <MultiThumbRange
    minValue={state.minValue}
    maxValue={state.maxValue}
    onChange={({ minValue, maxValue }) => setState({ minValue, maxValue })}
  />
</Field>;
```

### Custom Step Size

```jsx
const { zdSpacingXs } = require('@zendeskgarden/css-variables');

const StyledHint = styled(Hint)`
  margin-bottom: ${zdSpacingXs};
`;

initialState = {
  minValue: 0,
  maxValue: 100
};

<Field>
  <Label>MultiThumb Range - Step Size (5)</Label>
  <StyledHint>
    Min Value: {state.minValue} | Max Value: {state.maxValue}
  </StyledHint>
  <MultiThumbRange
    minValue={state.minValue}
    maxValue={state.maxValue}
    onChange={({ minValue, maxValue }) => setState({ minValue, maxValue })}
    step={5}
  />
</Field>;
```

### Disabled State

```jsx
const { zdSpacingXs } = require('@zendeskgarden/css-variables');

const StyledHint = styled(Hint)`
  margin-bottom: ${zdSpacingXs};
`;

initialState = {
  minValue: 25,
  maxValue: 35
};

<Field>
  <Label>Disabled MultiThumb Range</Label>
  <StyledHint>
    Min Value: {state.minValue} | Max Value: {state.maxValue}
  </StyledHint>
  <MultiThumbRange
    disabled
    minValue={state.minValue}
    maxValue={state.maxValue}
    onChange={({ minValue, maxValue }) => setState({ minValue, maxValue })}
  />
</Field>;
```
