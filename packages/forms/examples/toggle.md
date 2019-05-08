```jsx
<Field>
  <Toggle>
    <Label>Example toggle</Label>
    <Hint>Hints are included</Hint>
  </Toggle>
</Field>
```

### Validation States

```jsx
initialState = {
  isChecked: false
};

getValidationType = isChecked => (isChecked ? 'success' : 'error');
getValidationMessage = isChecked =>
  isChecked ? 'Thanks for toggling that' : 'You must enable this toggle';

<Field>
  <Toggle
    checked={state.isChecked}
    onChange={event => setState({ isChecked: event.target.checked })}
  >
    <Label>Controlled toggle</Label>
    <Hint>With some dynamic validation</Hint>
    <Message validation={getValidationType(state.isChecked)}>
      {getValidationMessage(state.isChecked)}
    </Message>
  </Toggle>
</Field>;
```

### Visual States

```jsx
<Grid>
  <Row>
    <Col md={3}>
      <Field>
        <Toggle>
          <Label regular>Regular Label</Label>
        </Toggle>
      </Field>
    </Col>
    <Col md={3}>
      <Field>
        <Toggle>
          <Label checked>Checked Label</Label>
        </Toggle>
      </Field>
    </Col>
    <Col md={3}>
      <Field>
        <Toggle>
          <Label hidden>Hidden Label</Label>
        </Toggle>
      </Field>
    </Col>
    <Col md={3}>
      <Field>
        <Toggle>
          <Label indeterminate>Indeterminate Label</Label>
        </Toggle>
      </Field>
    </Col>
    <Col md={3}>
      <Field>
        <Toggle>
          <Label hovered>Hovered Label</Label>
        </Toggle>
      </Field>
    </Col>
    <Col md={3}>
      <Field>
        <Toggle>
          <Label focused>Focused Label</Label>
        </Toggle>
      </Field>
    </Col>
    <Col md={3}>
      <Field>
        <Toggle disabled>
          <Label>Disabled Label</Label>
        </Toggle>
      </Field>
    </Col>
  </Row>
</Grid>
```
