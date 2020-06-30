### Alert

`<Alert>` components have an `role="alert"` by default and are announced by assistive
technologies when they appear. The `role` attribute may be modified or removed if desired.
All usages of `<Close />` must contain an `aria-label` or other assistive technique to have
discernible text.

```jsx
const { Field, Label, Radio, Toggle } = require('@zendeskgarden/react-forms/src');
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

const initialState = { type: 'success', showClose: true, isRegular: false };

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

        <Field className="u-mt-xs">
          <Toggle
            checked={state.showClose}
            onChange={event => setState({ showClose: event.target.checked })}
          >
            <Label>Show Close</Label>
          </Toggle>
        </Field>

        <Field className="u-mt-xs">
          <Toggle
            checked={state.isRegular}
            onChange={event => setState({ isRegular: event.target.checked })}
          >
            <Label>Regular Weight Title</Label>
          </Toggle>
        </Field>
      </Well>
    </Col>
    <Col md={8}>
      <Alert type={state.type}>
        <Title isRegular={state.isRegular}>{alertTitles[state.type]}</Title>
        Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth
        tatsoi tomatillo melon.
        {state.showClose && (
          <Close onClick={() => alert('closing alert')} aria-label="Close Alert" />
        )}
      </Alert>
    </Col>
  </Row>
</Grid>;
```

### Notification

`<Notification>` components have an `role="status"` by default and are announced by assistive
technologies when they appear. The `role` attribute may be modified or removed if desired.

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
  type: undefined,
  isMultiLine: false,
  isRegular: false
};

<Grid>
  <Row>
    <Col md={4}>
      <Well isRecessed>
        <div role="group" aria-label="notification types radio">
          <StyledMd>Notification Types</StyledMd>
          <Field>
            <Radio
              name="notification-type"
              value={undefined}
              checked={state.type === undefined}
              onChange={event => setState({ type: undefined })}
            >
              <Label isRegular>Default</Label>
            </Radio>
          </Field>
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
        <Field className="u-mt-xs">
          <Toggle
            checked={state.isMultiLine}
            onChange={event => setState({ isMultiLine: event.target.checked })}
          >
            <Label>Show Multi-line</Label>
          </Toggle>
        </Field>

        <Field className="u-mt-xs">
          <Toggle
            checked={state.isRegular}
            onChange={event => setState({ isRegular: event.target.checked })}
          >
            <Label>Regular Weight Title</Label>
          </Toggle>
        </Field>
      </Well>
    </Col>
    <Col md={8}>
      <Notification type={state.type}>
        <Title isRegular={state.isRegular}>
          Notification{notificationTitles[state.type] ? `: ${notificationTitles[state.type]}` : ''}
          {state.isMultiLine ? ' (Multi-line)' : ''}
        </Title>
        {state.isMultiLine ? (
          <Paragraph>
            Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
            Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce
            lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra
            leone bologi leek soko chicory celtuce parsley jícama salsify black-eyed pea quandong.
          </Paragraph>
        ) : (
          `Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon
           amaranth tatsoi tomatillo melon.`
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
  isMultiLine: false,
  isRegular: false
};

<Grid>
  <Row>
    <Col md={4}>
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
            <Label>Show Multi-line</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Toggle
            checked={state.isRegular}
            onChange={event => setState({ isRegular: event.target.checked })}
          >
            <Label>Regular Weight Title</Label>
          </Toggle>
        </Field>
      </Well>
    </Col>
    <Col md={8}>
      <Well isRecessed={state.isRecessed} isFloating={state.isFloating}>
        <Title isRegular={state.isRegular}>Well {state.isMultiLine && '(Multi-line)'}</Title>
        {state.isMultiLine ? (
          <Paragraph>
            Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
            Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce
            lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra
            leone bologi leek soko chicory celtuce parsley jícama salsify black-eyed pea quandong.
          </Paragraph>
        ) : (
          `Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon
          amaranth tatsoi tomatillo melon.`
        )}
      </Well>
    </Col>
  </Row>
</Grid>;
```
