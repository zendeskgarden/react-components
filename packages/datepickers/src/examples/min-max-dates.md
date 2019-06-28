```jsx
const { Field, Label, Hint, Input, Message } = require('@zendeskgarden/react-forms/src');
const { isBefore, subDays, format } = require('date-fns');

initialState = {
  value: new Date(),
  minValue: new Date()
};

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
      You must provide a date greater than {format(state.minValue, 'PPP')}
    </Message>
  )}
</Field>;
```
