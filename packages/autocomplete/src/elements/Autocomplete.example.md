### Basic Example

```jsx
initialState = {
  selectedValue: 'option-1'
};

<Autocomplete
  label="Basic Autocomplete"
  placeholder="Filter values"
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

const optionsMap = options.reduce((dictionary, option) => {
  dictionary[option.value] = option.label;
  return dictionary;
}, {});

initialState = {
  selectedValue: options[0].value,
  inputValue: '',
  placeholder: options[0].value
};

<Autocomplete
  label="Example Autocomplete"
  maxHeight="300px"
  placeholder={optionsMap[state.selectedValue]}
  selectedValue={state.selectedValue}
  onChange={selectedValue => setState({ selectedValue })}
  options={options}
/>;
```
