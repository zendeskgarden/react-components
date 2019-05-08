```jsx
<Field>
  <Checkbox>
    <Label>Example checkbox</Label>
    <Hint>Hints are included</Hint>
  </Checkbox>
</Field>
```

### Validation States

```jsx
initialState = {
  isChecked: false
};

getValidationType = isChecked => (isChecked ? 'success' : 'error');
getValidationMessage = isChecked =>
  isChecked ? 'Thanks for checking that' : 'You must enable this checkbox';

<Field>
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
</Field>;
```

### Visual States

```jsx
<Grid>
  <Row>
    <Col md={3}>
      <Field>
        <Checkbox>
          <Label regular>Regular Label</Label>
        </Checkbox>
      </Field>
    </Col>
    <Col md={3}>
      <Field>
        <Checkbox>
          <Label checked>Checked Label</Label>
        </Checkbox>
      </Field>
    </Col>
    <Col md={3}>
      <Field>
        <Checkbox>
          <Label hidden>Hidden Label</Label>
        </Checkbox>
      </Field>
    </Col>
    <Col md={3}>
      <Field>
        <Checkbox>
          <Label indeterminate>Indeterminate Label</Label>
        </Checkbox>
      </Field>
    </Col>
    <Col md={3}>
      <Field>
        <Checkbox>
          <Label hovered>Hovered Label</Label>
        </Checkbox>
      </Field>
    </Col>
    <Col md={3}>
      <Field>
        <Checkbox>
          <Label focused>Focused Label</Label>
        </Checkbox>
      </Field>
    </Col>
    <Col md={3}>
      <Field>
        <Checkbox disabled>
          <Label>Disabled Label</Label>
        </Checkbox>
      </Field>
    </Col>
  </Row>
</Grid>
```
