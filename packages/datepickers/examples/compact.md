```jsx
const { Field, Label, Input } = require('@zendeskgarden/react-forms/src');

initialState = {
  value: new Date()
};

<Field>
  <Label>Compact datepicker</Label>
  <Datepicker value={state.value} onChange={newDate => setState({ value: newDate })} isCompact>
    <Input small />
  </Datepicker>
</Field>;
```
