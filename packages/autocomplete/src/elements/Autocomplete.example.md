### Basic Example

```jsx
initialState = {
  selectedValue: 'option-1'
};

<Autocomplete
  label="Basic Autocomplete"
  selectedValue={state.selectedValue}
  onChange={selectedValue => setState({ selectedValue })}
  options={[
    {
      value: 'option-1',
      label: 'Option 1'
    },
    {
      value: 'option-2',
      label: 'Option 2'
    },
    {
      value: 'option-3',
      label: 'Option 3'
    }
  ]}
/>;
```

### Advanced Example

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
const options = [];

for (let x = 0; x < phonetics.length; x++) {
  options.push({
    value: `value-${phonetics[x]}`,
    label: phonetics[x]
  });
}

initialState = {
  selectedValue: options[0].value
};

<Autocomplete
  label="Example Autocomplete"
  maxHeight="300px"
  selectedValue={state.selectedValue}
  onChange={selectedValue => setState({ selectedValue })}
  options={options}
/>;
```
