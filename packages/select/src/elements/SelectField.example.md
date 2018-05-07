The `SelectField` component adds accessibility and mouse interactions
between the `Label`, `Hint`, and `Message` components with the `Select`.

```jsx
initialState = {
  selectedKey: 'item-1'
};

<SelectField>
  <Label>Label</Label>
  <Hint>Hint</Hint>
  <Select
    selectedKey={state.selectedKey}
    onChange={selectedKey => setState({ selectedKey })}
    options={[
      <Item key="item-1">Item 1</Item>,
      <Item key="item-2">Item 2</Item>,
      <Item key="item-3">Item 3</Item>
    ]}
  >
    {state.selectedKey} is currently selected
  </Select>
  <Message>Sample message</Message>
</SelectField>;
```

### Validation

You can handle the validation of a field `validation` prop in
the `Message` and `Select` components.

```jsx
initialState = {
  selectedKey: 'item-1'
};

getValidation = selectedKey => {
  if (selectedKey === 'invalid-item') {
    return 'error';
  }

  return 'success';
}

getMessage = selectedKey => {
  if (selectedKey === 'invalid-item') {
    return <Message validation="error">Choose a different option</Message>;
  }

  return <Message validation="success">Good choice</Message>;
}

<SelectField>
  <Label>Some Options are Invalid</Label>
  <Select
    selectedKey={state.selectedKey}
    onChange={selectedKey => setState({ selectedKey })}
    validation={getValidation(state.selectedKey)}
    options={[
      <Item key="item-1">Item 1</Item>,
      <Item key="item-2">Item 2</Item>,
      <Item key="item-3">Item 3</Item>,
      <Item key="invalid-item">Invalid Item</Item>
    ]}
  >
    {state.selectedKey}
  </Select>
  {getMessage(state.selectedKey)}
</SelectField>;
```
