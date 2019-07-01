```jsx
const { Field, Label, Hint, Input, Message } = require('@zendeskgarden/react-forms/src');
const { isBefore, subDays } = require('date-fns');

initialState = {
  value: new Date(),
  minValue: new Date()
};

const dateFormatter = new Intl.DateTimeFormat({
  month: '2-digit',
  day: '2-digit',
  year: 'numeric'
});

const isInvalid = () => {
  return isBefore(state.value, subDays(state.minValue, 1));
};

<Field>
  <Label>Select a date</Label>
  <Hint>Minimum date of today</Hint>
  <Datepicker
    value={state.value}
    onChange={newDate => setState({ value: newDate })}
    minValue={state.minValue}
  >
    <Input validation={isInvalid() ? 'error' : undefined} />
  </Datepicker>
  {isInvalid() && (
    <Message validation="error">
      You must provide a date greater than {dateFormatter.format(state.minValue)}
    </Message>
  )}
</Field>;
```
