The component uses `===` to compare `selected` value with `RadioButton` values

```
initialState = { selected: 2 };
<RadioButtonGroup selected={ state.selected } onChange={ (value) => setState({ selected: value }) }>
  <RadioButton value={ 1 }>One</RadioButton>
  <RadioButton value={ 2 }>Two</RadioButton>
  <RadioButton value={ 3 }>Three</RadioButton>
</RadioButtonGroup>
```

Hints:

```
initialState = { selected: 0 };

<RadioButtonGroup selected={ state.selected } onChange={ (value) => setState({ selected: value }) }>
  <RadioButton
    value={ 0 }
    hint="Vim is my favourite text editor. I've been using it for years... I can't figure out how to exit."
  >
    Vim
  </RadioButton>
  <RadioButton
    value={ 1 }
    hint='Emacs is a very nice OS - It just needs a proper editor.'
  >
    Emacs
  </RadioButton>
</RadioButtonGroup>
```

Muted:

Radio buttons support being muted in order to logically display under a label heading.

```
initialState = { selected: 0 };
<Grid columns={1}>
  Your choice of editor:
  <Grid columns={ 1 }>
    <RadioButtonGroup muted selected={ state.selected } onChange={ (value) => setState({ selected: value }) }>
      <RadioButton value={ 0 }>Spacemacs</RadioButton>
      <RadioButton value={ 1 }>Vim</RadioButton>
      <RadioButton value={ 2 }>Emacs</RadioButton>
      <RadioButton value={ 3 }>Atom</RadioButton>
    </RadioButtonGroup>
  </Grid>
</Grid>
```

Disabled:
```
initialState = { selected: 2 };
<RadioButtonGroup disabled selected={ state.selected } onChange={ (value) => setState({ selected: value }) }>
  <RadioButton value={ 1 }>One</RadioButton>
  <RadioButton value={ 2 }>Two</RadioButton>
  <RadioButton value={ 3 }>Three</RadioButton>
</RadioButtonGroup>
```

Overwriting disabled:
```
initialState = { selected: 2 };
<RadioButtonGroup disabled selected={ state.selected } onChange={ (value) => setState({ selected: value }) }>
  <RadioButton value={ 1 }>One</RadioButton>
  <RadioButton disabled={ false } value={ 2 }>Two</RadioButton>
  <RadioButton value={ 3 }>Three</RadioButton>
</RadioButtonGroup>
```

```
initialState = { selected: 1 };
<RadioButtonGroup selected={ state.selected } onChange={ (value) => setState({ selected: value }) }>
  <RadioButton value={ 1 }>One</RadioButton>
  <RadioButton disabled value={ 2 }>Two</RadioButton>
  <RadioButton value={ 3 }>Three</RadioButton>
</RadioButtonGroup>
```

RTL:
```
initialState = { selected: 1 };
<RadioButtonGroup dir='rtl' selected={ state.selected } onChange={ (value) => setState({ selected: value }) }>
  <RadioButton value={ 1 }>One</RadioButton>
  <RadioButton value={ 2 }>Two</RadioButton>
  <RadioButton value={ 3 }>Three</RadioButton>
</RadioButtonGroup>
```
