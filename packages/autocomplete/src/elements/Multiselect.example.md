### Basic Example

```jsx
const phonetics = [
  'Alfa',
  'Bravo',
  'Charlie',
  'Delta',
  'Echo',
  'Foxtrot',
  'Golf',
  'Hotel',
  'India',
  'Juliett',
  'Kilo',
  'Lima',
  'Mike',
  'November',
  'Oscar',
  'Papa',
  'Quebec',
  'Romeo',
  'Sierra',
  'Tango',
  'Uniform',
  'Victor',
  'Whiskey',
  'X-ray',
  'Yankee',
  'Zulu'
];

initialState = {
  selectedValues: [
    'Alfa',
    'Bravo',
    'Hotel',
    'India',
    'Juliett',
    'November',
    'Sierra',
    'Yankee',
    'Zulu'
  ]
};

<div style={{ maxWidth: 500, minHeight: 300 }}>
  <Multiselect
    label="Phonetics Multiselect"
    maxHeight="300px"
    selectedValues={state.selectedValues}
    onChange={selectedValues => setState({ selectedValues })}
    options={phonetics.map(option => ({ value: option, label: option }))}
  />
</div>;
```
