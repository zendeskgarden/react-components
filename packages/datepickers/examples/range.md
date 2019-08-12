```jsx
const { Field, Label, Input, Message } = require('@zendeskgarden/react-forms/src');
const { addDays, compareAsc } = require('date-fns');

initialState = {
  startValue: new Date(),
  endValue: addDays(new Date(), 16)
};

const isInvalid = () => compareAsc(state.startValue, state.endValue) === 1;

<DatepickerRange
  startValue={state.startValue}
  endValue={state.endValue}
  onChange={changes => setState({ startValue: changes.startValue, endValue: changes.endValue })}
>
  <Grid>
    <Row>
      <Col md>
        <Field>
          <Label>Start</Label>
          <DatepickerRange.Start>
            <Input />
          </DatepickerRange.Start>
        </Field>
      </Col>
      <Col md>
        <Field>
          <Label>End</Label>
          <DatepickerRange.End>
            <Input validation={isInvalid() ? 'error' : undefined} />
          </DatepickerRange.End>
          {isInvalid() && (
            <Message validation="error">End date must occur after the Start date</Message>
          )}
        </Field>
      </Col>
    </Row>
    <Row>
      <Col>
        <DatepickerRange.Calendar />
      </Col>
    </Row>
  </Grid>
</DatepickerRange>;
```
