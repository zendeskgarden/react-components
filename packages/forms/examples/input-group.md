### Components

- `InputGroup` Accepts all `div` attributes and the following props:
  - [`isCompact`] Apply compact styling
- `InputGroup.Prepend` Accepts all `div` attributes
- `InputGroup.Append` Accepts all `div` attributes

```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Code } = require('@zendeskgarden/react-typography/src');
const { Button } = require('@zendeskgarden/react-buttons/src');

initialState = {
  isCompact: false,
  isDisabled: false
};

<Grid>
  <Row>
    <Col>
      <Well isRecessed style={{ width: 300 }}>
        <Row>
          <Col>
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
          </Col>
          <Col>
            <Field>
              <Toggle
                checked={state.isDisabled}
                onChange={event => setState({ isDisabled: event.target.checked })}
              >
                <Label>
                  <Code>disabled</Code>
                </Label>
              </Toggle>
            </Field>
          </Col>
        </Row>
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
          <Input placeholder="Input content" />
          <Button
            focusInset
            disabled={state.isDisabled}
            isPrimary
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
