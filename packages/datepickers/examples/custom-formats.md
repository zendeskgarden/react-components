By default we use the [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat)
localization utility to format our dates.

This logic is customizable with the `formatDate` prop where you may use
other date formatting libraries like [momentjs](https://momentjs.com/) or
[date-fns](https://date-fns.org/).

```jsx
const { Field, Label, Hint, Input } = require('@zendeskgarden/react-forms/src');

initialState = {
  value: new Date()
};

const dateFormatter = new Intl.DateTimeFormat({
  month: '2-digit',
  day: '2-digit',
  year: 'numeric'
});

<Field>
  <Label>Formatted date</Label>
  <Hint>Uses the "Intl.DateTimeFormat" localization utility</Hint>
  <Datepicker
    value={state.value}
    onChange={newDate => setState({ value: newDate })}
    formatDate={date => dateFormatter.format(date)}
  >
    <Input />
  </Datepicker>
</Field>;
```
