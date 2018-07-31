### Dots

```jsx
const { RangeField, Label, Range } = require('@zendeskgarden/react-ranges/src');

initialState = {
  width: 50
};

<div>
  <RangeField>
    <Label>{`Width (${state.width}px)`}</Label>
    <Range
      value={state.width}
      onChange={event => setState({ width: event.target.value })}
    />
  </RangeField>
  <Loader />
</div>
```
