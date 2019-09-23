```jsx
initialState = {
  minValue: 0,
  maxValue: 100
};

<Field>
  <Label>Default MultiThumb Range</Label>
  <Hint>
    Min Value: {state.minValue} | Max Value: {state.maxValue}
  </Hint>
  <MultiThumbRange
    minValue={state.minValue}
    maxValue={state.maxValue}
    onChange={({ minValue, maxValue }) => setState({ minValue, maxValue })}
  />
</Field>;
```

### Custom Step Size

```jsx
initialState = {
  minValue: 0,
  maxValue: 100
};

<Field>
  <Label>MultiThumb Range - Step Size (5)</Label>
  <Hint>
    Min Value: {state.minValue} | Max Value: {state.maxValue}
  </Hint>
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
initialState = {
  minValue: 25,
  maxValue: 35
};

<Field>
  <Label>Disabled MultiThumb Range</Label>
  <Hint>
    Min Value: {state.minValue} | Max Value: {state.maxValue}
  </Hint>
  <MultiThumbRange
    disabled
    minValue={state.minValue}
    maxValue={state.maxValue}
    onChange={({ minValue, maxValue }) => setState({ minValue, maxValue })}
  />
</Field>;
```
