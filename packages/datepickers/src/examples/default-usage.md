The `<Datepicker>` takes a native `Date()` object as its input. It is able to accept several
varieties of user input to parse it's date.

By default it allows the following [Unicode TR35 formats](https://date-fns.org/v2.0.0-beta.2/docs/format):

- `dateFormat` The `dateFormat` prop provided to the component
- `P` "09/04/1986"
- `PP` "Sep 4, 1986"
- `PPP` "September 4th, 1986"

These values are localized and will change their format based on the provided locale.
This logic may be customized with the `customParseDate` prop.

```jsx
const { Field, Label, Input } = require('@zendeskgarden/react-forms/src');

const enGbLocale = require('date-fns/locale/en-GB');

initialState = {
  value: new Date()
};

<Field>
  <Label>Select a date</Label>
  <Datepicker value={state.value} onChange={newDate => setState({ value: newDate })}>
    <Input />
  </Datepicker>
</Field>;
```
