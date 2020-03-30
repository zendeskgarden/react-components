Each of the following fields demonstrate how the underlying native form
element may be managed as a controlled component.

```jsx
const { Code } = require('@zendeskgarden/react-typography/src');
const StartIcon = require('@zendeskgarden/svg-icons/src/16/globe-stroke.svg').default;
const EndIcon = require('@zendeskgarden/svg-icons/src/16/filter-stroke.svg').default;

initialState = {
  inputValue: '',
  fauxInputValue: '',
  mediaInputValue: '',
  textareaValue: '',
  checkboxChecked: false,
  toggleChecked: false,
  radioValue: 'error',
  rangeValue: 0
};

const getCheckedMessage = (checked, indeterminate = false) =>
  indeterminate ? 'undetermined' : checked ? 'valid' : 'invalid';

const getCheckedValidation = (checked, indeterminate = false) =>
  indeterminate ? 'warning' : checked ? 'success' : 'error';

const getRangeValidation = (value, minimum = 50) =>
  value === 0 ? 'error' : value < minimum ? 'warning' : 'success';

const getRadioMessage = value => (value === 'success' ? 'valid' : 'invalid');

const getRangeMessage = (value, minimum = 50) =>
  value === 0 ? 'cannot be 0' : value < minimum ? 'less than minimum' : 'valid value';

const getTextMessage = (value, minimum = 10) =>
  value.length === 0
    ? 'cannot be blank'
    : value.length < minimum
    ? 'not enough characters'
    : 'valid entry';

const getTextValidation = (value, minimum = 10) =>
  value.length === 0 ? 'error' : value.length < minimum ? 'warning' : 'success';

<>
  <Field>
    <Label>Controlled text input</Label>
    <Hint>Entry must contain at least 10 characters</Hint>
    <Input
      value={state.inputValue}
      onChange={event => setState({ inputValue: event.target.value })}
    />
    <Message validation={getTextValidation(state.inputValue)}>
      {getTextMessage(state.inputValue)}
    </Message>
  </Field>
  <Field className="u-mt">
    <Label>Controlled textarea</Label>
    <Hint>Entry must contain at least 20 characters</Hint>
    <Textarea
      value={state.textareaValue}
      onChange={event => setState({ textareaValue: event.target.value })}
    />
    <Message validation={getTextValidation(state.textareaValue, 20)}>
      {getTextMessage(state.textareaValue, 20)}
    </Message>
  </Field>
  <Field className="u-mt">
    <Label>Controlled media input</Label>
    <Hint>Entry must contain at least 5 characters</Hint>
    <MediaInput
      value={state.mediaInputValue}
      onChange={event => setState({ mediaInputValue: event.target.value })}
      start={<StartIcon />}
      end={<EndIcon />}
    />
    <Message validation={getTextValidation(state.mediaInputValue, 5)}>
      {getTextMessage(state.mediaInputValue, 5)}
    </Message>
  </Field>
  <Field className="u-mt">
    <Label>Controlled faux input</Label>
    <Hint>Entry must contain at least 3 characters</Hint>
    <FauxInput>
      <Input
        isBare
        value={state.fauxInputValue}
        onChange={event => setState({ fauxInputValue: event.target.value })}
      />
    </FauxInput>
    <Message validation={getTextValidation(state.fauxInputValue, 3)}>
      {getTextMessage(state.fauxInputValue, 3)}
    </Message>
  </Field>
  <div className="u-mt" role="group" aria-label="controlled radio">
    <Field>
      <Label>Controlled radio</Label>
    </Field>
    <Field>
      <Radio
        name="controlled-example"
        value="error"
        checked={state.radioValue === 'error'}
        onChange={event => setState({ radioValue: event.target.value })}
      >
        <Label isRegular>Error</Label>
      </Radio>
    </Field>
    <Field>
      <Radio
        name="controlled-example"
        value="warning"
        checked={state.radioValue === 'warning'}
        onChange={event => setState({ radioValue: event.target.value })}
      >
        <Label isRegular>Warning</Label>
      </Radio>
    </Field>
    <Field>
      <Radio
        name="controlled-example"
        value="success"
        checked={state.radioValue === 'success'}
        onChange={event => setState({ radioValue: event.target.value })}
      >
        <Label isRegular>Success</Label>
      </Radio>
      <Message validation={state.radioValue}>{getRadioMessage(state.radioValue)}</Message>
    </Field>
  </div>
  <Field className="u-mt">
    <Checkbox
      checked={state.checkboxChecked}
      indeterminate={state.checkboxIndeterminate}
      onChange={event =>
        setState({
          checkboxChecked: event.target.checked,
          checkboxIndeterminate: event.nativeEvent.shiftKey
        })
      }
    >
      <Label>Controlled checkbox</Label>
      <Hint>
        Must be checked (hold shift key for <Code>indeterminate</Code>)
      </Hint>
      <Message
        validation={getCheckedValidation(state.checkboxChecked, state.checkboxIndeterminate)}
      >
        {getCheckedMessage(state.checkboxChecked, state.checkboxIndeterminate)}
      </Message>
    </Checkbox>
  </Field>
  <Field className="u-mt">
    <Toggle
      checked={state.toggleChecked}
      onChange={event => setState({ toggleChecked: event.target.checked })}
    >
      <Label>Controlled toggle</Label>
      <Hint>Must be toggled</Hint>
      <Message validation={getCheckedValidation(state.toggleChecked)}>
        {getCheckedMessage(state.toggleChecked)}
      </Message>
    </Toggle>
  </Field>
  <Field className="u-mt">
    <Label>Controlled range</Label>
    <Hint>Must be 50 or greater</Hint>
    <Range
      step={10}
      value={state.rangeValue}
      onChange={event => setState({ rangeValue: event.target.value })}
    />
    <Message validation={getRangeValidation(parseInt(state.rangeValue, 10))}>
      {getRangeMessage(parseInt(state.rangeValue, 10))}
    </Message>
  </Field>
</>;
```
