The `<Dropdown>` package does not include any filtering logic. The simplest way to
perform filtering is to control the `inputValue` and `onInputValueChange` props and
conditionally render `<Item>`s as necessary.

```js
const options = [
  'Aster',
  "Bachelor's button",
  'Celosia',
  'Dusty miller',
  'Everlasting winged',
  "Four o'clock",
  'Geranium',
  'Honesty',
  'Impatiens',
  'Johnny jump-up',
  'Kale',
  'Lobelia',
  'Marigold',
  'Nasturtium',
  'Ocimum (basil)',
  'Petunia',
  'Quaking grass',
  'Rose moss',
  'Salvia',
  'Torenia',
  'Ursinia',
  'Verbena',
  'Wax begonia',
  'Xeranthemum',
  'Yellow cosmos',
  'Zinnia'
];

initialState = {
  selectedItem: options[0],
  inputValue: ''
};

const filterOptions = () => {
  const matchingOptions = options.filter(option => {
    return option.toLowerCase().indexOf(state.inputValue.toLowerCase()) !== -1;
  });

  if (matchingOptions.length === 0) {
    return <Item disabled>No matches found</Item>;
  }

  return matchingOptions.map(option => (
    <Item key={option} value={option}>
      {option}
    </Item>
  ));
};

<Dropdown
  inputValue={state.inputValue}
  selectedItem={state.selectedItem}
  onInputValueChange={inputValue => setState({ inputValue })}
  onSelect={selectedItem => setState({ selectedItem })}
  downshiftProps={{ defaultHighlightedIndex: 0 }}
>
  <Field>
    <Label>Test Label</Label>
    <Hint>This is a sample hint</Hint>
    <Autocomplete>
      <span aria-label="Garden emoji">🌱</span>
      {state.selectedItem}
    </Autocomplete>
  </Field>
  <Menu>{filterOptions()}</Menu>
</Dropdown>;
```
