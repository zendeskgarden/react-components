The `dateFormat` is customizable with any [Unicode TR35 format](https://date-fns.org/v2.0.0-beta.2/docs/format).
Some values support localization better than others,
so stick to the `P`, `PP`, and `PPP` formats when possible.

```jsx
const { Field, Label, Hint, Input } = require('@zendeskgarden/react-forms/src');

initialState = {
  value: new Date()
};

<Field>
  <Label>Formatted date</Label>
  <Hint>Uses the "P" localized format</Hint>
  <Datepicker value={state.value} onChange={newDate => setState({ value: newDate })} dateFormat="P">
    <Input />
  </Datepicker>
</Field>;
```
