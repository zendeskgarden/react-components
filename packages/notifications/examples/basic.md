### Alert

All usages of `<Close />` must contain an `aria-label` or other assistive technique to have
discernible text.

```jsx
const { Field, Label, Radio } = require('@zendeskgarden/react-forms/src');
const { MD } = require('@zendeskgarden/react-typography/src');

const StyledMd = styled(MD)`
  ${props => `
    color: ${props.theme.colors.foreground};
    font-weight: ${props.theme.fontWeights.semibold}
  `}
`;

const alertTitles = {
  success: 'Success Alert',
  error: 'Error Alert',
  warning: 'Warning Alert',
  info: 'Info Alert'
};

const initialState = { type: 'success' };

<Grid>
  <Row>
    <Col md={4}>
      <Well isRecessed>
        <div role="group" aria-label="alert types radio">
          <StyledMd>Alert Types</StyledMd>
          <Field>
            <Radio
              name="alert-type"
              value="success"
              checked={state.type === 'success'}
              onChange={event => setState({ type: event.target.value })}
            >
              <Label isRegular>Success</Label>
            </Radio>
          </Field>
          <Field>
            <Radio
              name="alert-type"
              value="error"
              checked={state.type === 'error'}
              onChange={event => setState({ type: event.target.value })}
            >
              <Label isRegular>Error</Label>
            </Radio>
          </Field>
          <Field>
            <Radio
              name="alert-type"
              value="warning"
              checked={state.type === 'warning'}
              onChange={event => setState({ type: event.target.value })}
            >
              <Label isRegular>Warning</Label>
            </Radio>
          </Field>
          <Field>
            <Radio
              name="alert-type"
              value="info"
              checked={state.type === 'info'}
              onChange={event => setState({ type: event.target.value })}
            >
              <Label isRegular>Info</Label>
            </Radio>
          </Field>
        </div>
      </Well>
    </Col>
    <Col md={8}>
      <Alert type={state.type}>
        <Title>{alertTitles[state.type]}</Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna.
        <Close onClick={() => alert('closing alert')} aria-label="Close Alert" />
      </Alert>
    </Col>
  </Row>
</Grid>;
```

### Notification

The `<Paragraph>` component should be used to wrap multi-line content within a `<Notification>`.
Otherwise, no wrapper is necessary. Usage of `<Close />` must contain an `aria-label` or other
assistive technique to have discernible text.

```jsx
const { Field, Label, Radio, Toggle } = require('@zendeskgarden/react-forms/src');

const { MD } = require('@zendeskgarden/react-typography/src');

const StyledMd = styled(MD)`
  ${props => `
    color: ${props.theme.colors.foreground};
    font-weight: ${props.theme.fontWeights.semibold}
  `}
`;

const notificationTitles = {
  success: 'Success',
  error: 'Error',
  warning: 'Warning',
  info: 'Info'
};

const initialState = {
  type: 'success',
  isMultiLine: true
};

<Grid>
  <Row>
    <Col size={12}>
      <Well isRecessed>
        <div role="group" aria-label="alert types radio">
          <StyledMd>Alert Types</StyledMd>
          <Field>
            <Radio
              name="notification-type"
              value="success"
              checked={state.type === 'success'}
              onChange={event => setState({ type: event.target.value })}
            >
              <Label isRegular>Success</Label>
            </Radio>
          </Field>
          <Field>
            <Radio
              name="notification-type"
              value="error"
              checked={state.type === 'error'}
              onChange={event => setState({ type: event.target.value })}
            >
              <Label isRegular>Error</Label>
            </Radio>
          </Field>
          <Field>
            <Radio
              name="notification-type"
              value="warning"
              checked={state.type === 'warning'}
              onChange={event => setState({ type: event.target.value })}
            >
              <Label isRegular>Warning</Label>
            </Radio>
          </Field>
          <Field>
            <Radio
              name="notification-type"
              value="info"
              checked={state.type === 'info'}
              onChange={event => setState({ type: event.target.value })}
            >
              <Label isRegular>Info</Label>
            </Radio>
          </Field>
        </div>
      </Well>
    </Col>
    <Col>
      <Well isRecessed>
        <Field>
          <Toggle
            checked={state.isMultiLine}
            onChange={event => setState({ isMultiLine: event.target.checked })}
          >
            <Label>Multi-line</Label>
          </Toggle>
        </Field>
      </Well>
    </Col>
    <Col size={12}>
      <Notification type={state.type}>
        <Title>
          Notification: {notificationTitles[state.type]} {state.isMultiLine ? '(Multi-line)' : ''}
        </Title>
        {state.isMultiLine ? (
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Paragraph>
        ) : (
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna.`
        )}
        <Close onClick={() => alert('closing notification')} aria-label="Close Notification" />
      </Notification>
    </Col>
  </Row>
</Grid>;
```

## Well

The `<Paragraph>` component should be used to wrap multi-line content within a `<Well>`.
Otherwise, no wrapper is necessary.

```jsx
const { Field, Label, Radio, Toggle } = require('@zendeskgarden/react-forms/src');

const initialState = {
  isFloating: false,
  isRecessed: false,
  isMultiLine: false
};

<Grid>
  <Row>
    <Col>
      <Well isRecessed>
        <Field>
          <Toggle
            checked={state.isFloating}
            onChange={event => setState({ isFloating: event.target.checked })}
          >
            <Label>Floating</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle
            checked={state.isRecessed}
            onChange={event => setState({ isRecessed: event.target.checked })}
          >
            <Label>Recessed</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle
            checked={state.isMultiLine}
            onChange={event => setState({ isMultiLine: event.target.checked })}
          >
            <Label>Multi-line</Label>
          </Toggle>
        </Field>
      </Well>
    </Col>
  </Row>
  <Row className="u-mt-xs">
    <Col>
      <Well isRecessed={state.isRecessed} isFloating={state.isFloating}>
        <Title>Well (Multi-line)</Title>
        {state.isMultiLine ? (
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Paragraph>
        ) : (
          'Lorem ipsum dolor sit amet, consectetur adipiscing.'
        )}
      </Well>
    </Col>
  </Row>
</Grid>;
```
