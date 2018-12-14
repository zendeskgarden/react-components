### Basic Example

```jsx
const items = ['Option 1', 'Option 2', 'Option 3'];
const options = [];

for (let x = 0; x < items.length; x++) {
  options.push({
    value: `value-${x}`,
    label: items[x]
  });
}

const optionsMap = options.reduce((dictionary, option) => {
  dictionary[option.value] = option.label;
  return dictionary;
}, {});

initialState = {
  selectedValue: options[0].value
};

<Autocomplete
  label="Basic Autocomplete"
  placeholder={optionsMap[state.selectedValue]}
  selectedValue={state.selectedValue}
  onChange={selectedValue => setState({ selectedValue })}
  options={options}
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
  selectedValue: options[0].value
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
