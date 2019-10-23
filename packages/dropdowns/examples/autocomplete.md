The `<Dropdown>` package does not include any filtering logic. The simplest way to
perform filtering is to control the `inputValue` and `onInputValueChange` props and
conditionally render `<Item>`s as necessary.

Due to a known issue caused by google translation extension, which replaces text node
with `<font>` while React keeps references to the text node.
Any conditionally rendered text node should be wrapped with `<span>`.
Read the [React issue](https://github.com/facebook/react/issues/11538#issuecomment-390386520)
for more information.

```js
const debounce = require('lodash.debounce');
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

function ExampleAutocomplete() {
  const [selectedItem, setSelectedItem] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');
  const [matchingOptions, setMatchingOptions] = React.useState(options);

  /**
   * Debounce filtering
   */
  const filterMatchingOptionsRef = React.useRef(
    debounce(value => {
      const matchingOptions = options.filter(option => {
        return (
          option
            .trim()
            .toLowerCase()
            .indexOf(value.trim().toLowerCase()) !== -1
        );
      });

      setMatchingOptions(matchingOptions);
    }, 300)
  );

  React.useEffect(() => {
    filterMatchingOptionsRef.current(inputValue);
  }, [inputValue]);

  const renderOptions = () => {
    if (matchingOptions.length === 0) {
      return <Item disabled>No matches found</Item>;
    }

    return matchingOptions.map(option => (
      <Item key={option} value={option}>
        <span>{option}</span>
      </Item>
    ));
  };

  return (
    <Dropdown
      inputValue={inputValue}
      selectedItem={selectedItem}
      onSelect={item => setSelectedItem(item)}
      onInputValueChange={inputValue => setInputValue(inputValue)}
      downshiftProps={{ defaultHighlightedIndex: 0 }}
    >
      <Field>
        <Label>Autocomplete with debounce</Label>
        <Hint>This example includes basic debounce logic using Hooks</Hint>
        <Autocomplete>
          <span aria-label="Garden emoji" role="img">
            🌱
          </span>
          <span>{selectedItem}</span>
        </Autocomplete>
      </Field>
      <Menu>{renderOptions()}</Menu>
    </Dropdown>
  );
}

<ExampleAutocomplete />;
```
