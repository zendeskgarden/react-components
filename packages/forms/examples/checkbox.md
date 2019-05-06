```jsx
<FieldProvider>
  <Checkbox>
    <Label>Example checkbox</Label>
    <Hint>Hints are included</Hint>
  </Checkbox>
</FieldProvider>
```

### Validation States

```jsx
initialState = {
  isChecked: false
};

getValidationType = isChecked => (isChecked ? 'success' : 'error');
getValidationMessage = isChecked =>
  isChecked ? 'Thanks for checking that' : 'You must enable this checkbox';

<FieldProvider>
  <Checkbox
    checked={state.isChecked}
    onChange={event => setState({ isChecked: event.target.checked })}
  >
    <Label>Controlled checkbox</Label>
    <Hint>With some dynamic validation</Hint>
    <Message validation={getValidationType(state.isChecked)}>
      {getValidationMessage(state.isChecked)}
    </Message>
  </Checkbox>
</FieldProvider>;
```

### Visual States

```jsx
<Grid>
  <Row>
    <Col md={3}>
      <FieldProvider>
        <Checkbox>
          <Label regular>Regular Label</Label>
        </Checkbox>
      </FieldProvider>
    </Col>
    <Col md={3}>
      <FieldProvider>
        <Checkbox>
          <Label checked>Checked Label</Label>
        </Checkbox>
      </FieldProvider>
    </Col>
    <Col md={3}>
      <FieldProvider>
        <Checkbox>
          <Label hidden>Hidden Label</Label>
        </Checkbox>
      </FieldProvider>
    </Col>
    <Col md={3}>
      <FieldProvider>
        <Checkbox>
          <Label indeterminate>Indeterminate Label</Label>
        </Checkbox>
      </FieldProvider>
    </Col>
    <Col md={3}>
      <FieldProvider>
        <Checkbox>
          <Label hovered>Hovered Label</Label>
        </Checkbox>
      </FieldProvider>
    </Col>
    <Col md={3}>
      <FieldProvider>
        <Checkbox>
          <Label focused>Focused Label</Label>
        </Checkbox>
      </FieldProvider>
    </Col>
    <Col md={3}>
      <FieldProvider>
        <Checkbox disabled>
          <Label>Disabled Label</Label>
        </Checkbox>
      </FieldProvider>
    </Col>
  </Row>
</Grid>
```
