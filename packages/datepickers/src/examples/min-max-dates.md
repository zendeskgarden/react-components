```jsx
const { Field, Label, Hint, Input, Message } = require('@zendeskgarden/react-forms/src');
const { isBefore, isAfter, subDays, addDays } = require('date-fns');

initialState = {
  value: new Date(),
  minValue: new Date(),
  maxValue: addDays(new Date(), 7)
};

const dateFormatter = new Intl.DateTimeFormat({
  month: '2-digit',
  day: '2-digit',
  year: 'numeric'
});

const isInvalid = () => {
  return isBefore(state.value, subDays(state.minValue, 1)) || isAfter(state.value, state.maxValue);
};

<Field>
  <Label>Select a date</Label>
  <Hint>Limited to the next 7 days</Hint>
  <Datepicker
    value={state.value}
    onChange={newDate => setState({ value: newDate })}
    minValue={state.minValue}
    maxValue={state.maxValue}
  >
    <Input validation={isInvalid() ? 'error' : undefined} />
  </Datepicker>
  {isInvalid() && (
    <Message validation="error">
      You must provide a date between {dateFormatter.format(state.minValue)}
      and {dateFormatter.format(state.maxValue)}
    </Message>
  )}
</Field>;
```
