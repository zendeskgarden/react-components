The `Multiselect` component renders a customizable "tag" for each selected item.

This can be any element, but the surrounding field is designed to work with
our standard `Tag` component.

```jsx static
<Dropdown>
  <Field>
    <Label>Example Multiselect</Label>
    <Multiselect
      renderItem={({ value, removeValue }) => (
        <Tag size="large">
          {value} <Close onClick={() => removeValue()} />
        </Tag>
      )}
    />
  </Field>
  <Menu>{/** customizable items **/}</Menu>
</Dropdown>
```

```js
const debounce = require('lodash.debounce');
const { Tag, Close } = require('@zendeskgarden/react-tags/src');

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
  const [selectedItems, setSelectedItems] = React.useState([
    options[0],
    options[1],
    options[2],
    options[3],
    options[4],
    options[5]
  ]);
  const [inputValue, setInputValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
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
      setIsLoading(false);
    }, 300)
  );

  React.useEffect(() => {
    setIsLoading(true);
    filterMatchingOptionsRef.current(inputValue);
  }, [inputValue]);

  const renderOptions = () => {
    if (isLoading) {
      return <Item disabled>Loading items...</Item>;
    }

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
      selectedItems={selectedItems}
      onSelect={items => setSelectedItems(items)}
      downshiftProps={{ defaultHighlightedIndex: 0 }}
      onStateChange={changes => {
        if (Object.prototype.hasOwnProperty.call(changes, 'inputValue')) {
          setInputValue(changes.inputValue);
        }
      }}
    >
      <Field>
        <Label>Multiselect with debounce</Label>
        <Hint>This example includes basic debounce logic</Hint>
        <Multiselect
          small
          renderItem={({ value, removeValue }) => (
            <Tag>
              {value} <Close onClick={() => removeValue()} />
            </Tag>
          )}
        />
      </Field>
      <Menu small>{renderOptions()}</Menu>
    </Dropdown>
  );
}

<ExampleAutocomplete />;
```
