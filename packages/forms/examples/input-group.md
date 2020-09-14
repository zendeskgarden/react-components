```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Code } = require('@zendeskgarden/react-typography/src');
const { Button } = require('@zendeskgarden/react-buttons/src');

initialState = {
  isCompact: false,
  isDisabled: false,
  isReadOnly: false
};

<Grid>
  <Row>
    <Col>
      <Well isRecessed style={{ width: 300 }}>
        <Field>
          <Toggle
            checked={state.isCompact}
            onChange={event => setState({ isCompact: event.target.checked })}
          >
            <Label>
              <Code>isCompact</Code>
            </Label>
          </Toggle>
        </Field>
        <Field className="u-mt-sm">
          <Toggle
            checked={state.isReadOnly}
            onChange={event => setState({ isReadOnly: event.target.checked })}
          >
            <Label>
              <Code>readonly</Code>
            </Label>
          </Toggle>
        </Field>
        <Field className="u-mt-sm">
          <Toggle
            checked={state.isDisabled}
            onChange={event => setState({ isDisabled: event.target.checked })}
          >
            <Label>
              <Code>disabled</Code>
            </Label>
          </Toggle>
        </Field>
      </Well>
    </Col>
    <Col>
      <Field>
        <Label>Input Group</Label>
        <InputGroup isCompact={state.isCompact}>
          <Button
            focusInset
            disabled={state.isDisabled}
            size={state.isCompact ? 'small' : undefined}
          >
            A
          </Button>
          <Button
            focusInset
            disabled={state.isDisabled}
            size={state.isCompact ? 'small' : undefined}
          >
            B
          </Button>
          <Input
            placeholder="Input content"
            readOnly={state.isReadOnly}
            disabled={state.isDisabled}
          />
          <Button
            focusInset
            disabled={state.isDisabled}
            size={state.isCompact ? 'small' : undefined}
          >
            Copy
          </Button>
        </InputGroup>
        <Message>Validation message</Message>
      </Field>
    </Col>
  </Row>
</Grid>;
```
