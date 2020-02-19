The `<Select>` and `<Autocomplete>` components require a parent `<Field>` component.

This component provides additional styling and attributes necessary
for an accessible experience. If you do not provide a `<Label>` with your implementation
ensure that an `aria-label` is provided with your interactive element.

```js
const options = [
  { label: 'Item 1', value: 'item-1' },
  { label: 'Item 2', value: 'item-2' },
  { label: 'Item 3', value: 'item-3' }
];

initialState = {
  selectedItem: options[0]
};

<Dropdown
  selectedItem={state.selectedItem}
  onSelect={selectedItem => setState({ selectedItem })}
  downshiftProps={{ itemToString: item => item && item.label }}
>
  <Field>
    <Label>Default Layout</Label>
    <Hint>This is a basic Select</Hint>
    <Select>{state.selectedItem.label}</Select>
  </Field>
  <Menu>
    {options.map(option => (
      <Item key={option.value} value={option}>
        {option.label}
      </Item>
    ))}
  </Menu>
</Dropdown>;
```
