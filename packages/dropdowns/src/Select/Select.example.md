```jsx
initialState = {
  selectedItem: 'item-1'
};

<Dropdown selectedItem={state.selectedItem} onSelect={selectedItem => setState({ selectedItem })}>
  <Select>{state.selectedItem}</Select>
  <Menu>
    <Item value="item-1">Item 1</Item>
    <Item value="item-2">Item 2</Item>
    <Item value="item-3">Item 3</Item>
  </Menu>
</Dropdown>;
```
