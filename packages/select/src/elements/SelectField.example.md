The `SelectField` component adds accessibility and mouse interactions
between the `Label`, `Hint`, and `Message` components with the `Select`.

#### WARNING

The `Select` component leverages [React Fragments](https://reactjs.org/docs/fragments.html)
to allow dropdown placement. If you are using `React v15.X`, an additional `<div>` is placed
around the `Select`. This can cause some styling quirks when used with `Hint` and `Message`
as siblings. If you are on `React v15.X`, you may need to apply some custom styling depending
on your needs.

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
const DATA = {
  'item-1': 'Item 1',
  'item-2': 'Item 2',
  'item-3': 'Item 3',
  'invalid-item': 'Invalid Item'
};

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
      <Item key="item-1">{DATA['item-1']}</Item>,
      <Item key="item-2">{DATA['item-2']}</Item>,
      <Item key="item-3">{DATA['item-3']}</Item>,
      <Item key="invalid-item">{DATA['invalid-item']}</Item>
    ]}
  >
    {DATA[state.selectedKey]}
  </Select>
  {getMessage(state.selectedKey)}
</SelectField>;
```
