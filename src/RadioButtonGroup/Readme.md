The component uses `===` to compare `selected` value with `RadioButton` values

```
initialState = { selected: 2 };
<RadioButtonGroup selected={ state.selected } onSelect={ (value) => setState({ selected: value }) }>
  <RadioButton value={ 1 }>One</RadioButton>
  <RadioButton value={ 2 }>Two</RadioButton>
  <RadioButton value={ 3 }>Three</RadioButton>
</RadioButtonGroup>
```

Disabled:
```
initialState = { selected: 2 };
<RadioButtonGroup disabled selected={ state.selected } onSelect={ (value) => setState({ selected: value }) }>
  <RadioButton value={ 1 }>One</RadioButton>
  <RadioButton value={ 2 }>Two</RadioButton>
  <RadioButton value={ 3 }>Three</RadioButton>
</RadioButtonGroup>
```

Overwriting disabled:
```
initialState = { selected: 2 };
<RadioButtonGroup disabled selected={ state.selected } onSelect={ (value) => setState({ selected: value }) }>
  <RadioButton value={ 1 }>One</RadioButton>
  <RadioButton disabled={ false } value={ 2 }>Two</RadioButton>
  <RadioButton value={ 3 }>Three</RadioButton>
</RadioButtonGroup>
```

```
initialState = { selected: 1 };
<RadioButtonGroup selected={ state.selected } onSelect={ (value) => setState({ selected: value }) }>
  <RadioButton value={ 1 }>One</RadioButton>
  <RadioButton disabled value={ 2 }>Two</RadioButton>
  <RadioButton value={ 3 }>Three</RadioButton>
</RadioButtonGroup>
```

RTL:
```
initialState = { selected: 1 };
<RadioButtonGroup dir='rtl' selected={ state.selected } onSelect={ (value) => setState({ selected: value }) }>
  <RadioButton value={ 1 }>One</RadioButton>
  <RadioButton value={ 2 }>Two</RadioButton>
  <RadioButton value={ 3 }>Three</RadioButton>
</RadioButtonGroup>
```
