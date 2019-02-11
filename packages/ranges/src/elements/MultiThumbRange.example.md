### Default MultiThumb Range

```jsx
initialState = {
  minValue: 0,
  maxValue: 100
};

<RangeField>
  <Label>Default MultiThumb Range</Label>
  <Hint>
    Min Value: {state.minValue} | Max Value: {state.maxValue}
  </Hint>
  <MultiThumbRange
    minValue={state.minValue}
    maxValue={state.maxValue}
    onChange={({ minValue, maxValue }) => setState({ minValue, maxValue })}
  />
</RangeField>;
```

### Custom Step Size

```jsx
initialState = {
  minValue: 0,
  maxValue: 100
};

<RangeField>
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
</RangeField>;
```

### Disabled State

```jsx
initialState = {
  minValue: 25,
  maxValue: 35
};

<RangeField>
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
</RangeField>;
```
