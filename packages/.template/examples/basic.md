```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Toggle, Field, Input, Label } = require('@zendeskgarden/react-forms/src');

initialState = {
  compact: false,
  text: 'Example Component'
};

<Grid>
  <Row>
    <Col>
      <Well isRecessed style={{ width: 300 }}>
        <Field>
          <Label>Text</Label>
          <Input
            isCompact
            value={state.text}
            onChange={event => setState({ text: event.target.value })}
          />
        </Field>
        <Field className="u-mt-xs">
          <Toggle
            checked={state.compact}
            onChange={event => setState({ compact: event.target.checked })}
          >
            <Label>Compact</Label>
          </Toggle>
        </Field>
      </Well>
    </Col>
    <Col>
      <Example isCompact={state.compact}>
        <span>{state.text}</span>
      </Example>
    </Col>
  </Row>
</Grid>;
```
