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
  isCompact: false
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
      </Well>
    </Col>
    <Col>
      <Field>
        <Label>Input Group</Label>
        <InputGroup isCompact={state.isCompact}>
          <InputGroup.Prepend>
            <Button focusInset size={state.isCompact ? 'small' : undefined}>
              A
            </Button>
          </InputGroup.Prepend>
          <InputGroup.Prepend>
            <Button focusInset size={state.isCompact ? 'small' : undefined}>
              B
            </Button>
          </InputGroup.Prepend>
          <Input placeholder="Input content" />
          <InputGroup.Append>
            <Button focusInset isPrimary size={state.isCompact ? 'small' : undefined}>
              Copy
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <Message>Validation message</Message>
      </Field>
    </Col>
  </Row>
</Grid>;
```
