```jsx
<FieldProvider>
  <Toggle>
    <Label>Example toggle</Label>
    <Hint>Hints are included</Hint>
  </Toggle>
</FieldProvider>
```

### Validation States

```jsx
initialState = {
  isChecked: false
};

getValidationType = isChecked => (isChecked ? 'success' : 'error');
getValidationMessage = isChecked =>
  isChecked ? 'Thanks for toggling that' : 'You must enable this toggle';

<FieldProvider>
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
</FieldProvider>;
```

### Visual States

```jsx
<Grid>
  <Row>
    <Col md={3}>
      <FieldProvider>
        <Toggle>
          <Label regular>Regular Label</Label>
        </Toggle>
      </FieldProvider>
    </Col>
    <Col md={3}>
      <FieldProvider>
        <Toggle>
          <Label checked>Checked Label</Label>
        </Toggle>
      </FieldProvider>
    </Col>
    <Col md={3}>
      <FieldProvider>
        <Toggle>
          <Label hidden>Hidden Label</Label>
        </Toggle>
      </FieldProvider>
    </Col>
    <Col md={3}>
      <FieldProvider>
        <Toggle>
          <Label indeterminate>Indeterminate Label</Label>
        </Toggle>
      </FieldProvider>
    </Col>
    <Col md={3}>
      <FieldProvider>
        <Toggle>
          <Label hovered>Hovered Label</Label>
        </Toggle>
      </FieldProvider>
    </Col>
    <Col md={3}>
      <FieldProvider>
        <Toggle>
          <Label focused>Focused Label</Label>
        </Toggle>
      </FieldProvider>
    </Col>
    <Col md={3}>
      <FieldProvider>
        <Toggle disabled>
          <Label>Disabled Label</Label>
        </Toggle>
      </FieldProvider>
    </Col>
  </Row>
</Grid>
```
