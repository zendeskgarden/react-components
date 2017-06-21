```
initialState = { value: 1 };

<Grid columns={ 2 }>
  <RadioButton name="group1" checked={ state.value === 1 } value={ 1 } onChange={ (v) => setState({ value: v })}>One</RadioButton>
  <RadioButton name="group1" checked={ state.value === 2 } value={ 2 } onChange={ (v) => setState({ value: v })}>Two</RadioButton>
  <RadioButton disabled name="group1" checked={ state.value === 3 } value={ 3 } onChange={ (v) => setState({ value: v })}>Three</RadioButton>
  <RadioButton name="group1" checked={ state.value === 4 } value={ 4 } onChange={ (v) => setState({ value: v })}>Four</RadioButton>
</Grid>
```

RTL:
```
initialState = { value: 1 };

<Grid columns={ 1 } stretched>
  <RadioButton dir='rtl' name="group2" checked={ state.value === 1 } value={ 1 } onChange={ (v) => setState({ value: v })}>One</RadioButton>
  <RadioButton dir='rtl' name="group2" checked={ state.value === 2 } value={ 2 } onChange={ (v) => setState({ value: v })}>Two</RadioButton>
</Grid>
```

With a hint:
```
initialState = { value: 1 };

<Grid columns={ 1 } stretched>
  <RadioButton hint='Hint hint' name="group4" checked={ state.value === 1 } value={ 1 } onChange={ (v) => setState({ value: v })}>One</RadioButton>
  <RadioButton hint='Hint hint' name="group4" checked={ state.value === 2 } value={ 2 } onChange={ (v) => setState({ value: v })}>Two</RadioButton>
</Grid>
```

Muted:

Radio buttons support being muted in order to logically display under a label heading.

```
initialState = { value: 1 };

<Grid columns={1}>
  Your choice of editor:
  <Grid columns={ 1 }>
    <RadioButton muted name="group3" checked={ state.value === 1 } value={ 1 } onChange={ (v) => setState({ value: v })}>Spacemacs</RadioButton>
    <RadioButton muted name="group3" checked={ state.value === 2 } value={ 2 } onChange={ (v) => setState({ value: v })}>Vim</RadioButton>
    <RadioButton muted name="group3" checked={ state.value === 3 } value={ 3 } onChange={ (v) => setState({ value: v })}>Emacs</RadioButton>
    <RadioButton muted name="group3" checked={ state.value === 4 } value={ 4 } onChange={ (v) => setState({ value: v })}>Atom</RadioButton>
  </Grid>
</Grid>
```

Without labels:

```
initialState = { value: 1 };

<Grid columns={ 4 }>
  <FormLabel htmlFor='nolabel-1'>1</FormLabel>
  <FormLabel htmlFor='nolabel-2'>2</FormLabel>
  <FormLabel htmlFor='nolabel-3'>3</FormLabel>
  <FormLabel htmlFor='nolabel-4'>4</FormLabel>
  <RadioButton id='nolabel-1' name="nolabel" checked={ state.value === 1 } value={ 1 } onChange={ (v) => setState({ value: v })}/>
  <RadioButton id='nolabel-2' name="nolabel" checked={ state.value === 2 } value={ 2 } onChange={ (v) => setState({ value: v })}/>
  <RadioButton id='nolabel-3' disabled name="nolabel" checked={ state.value === 3 } value={ 3 } onChange={ (v) => setState({ value: v })}/>
  <RadioButton id='nolabel-4' name="nolabel" checked={ state.value === 4 } value={ 4 } onChange={ (v) => setState({ value: v })}/>
</Grid>
```

Uncontrolled:

```
initialState={ value: 1 };

<Grid columns={ 1 }>
  <RadioButton name="uncontrolled" value={ 1 }
    ref={ ref => ref && (this.radioOne = ref.input) }
  >
    One
  </RadioButton>
  <RadioButton name="uncontrolled" value={ 2 }
    ref={ ref => ref && (this.radioTwo = ref.input) }
  >
    Two
  </RadioButton>
  <Grid columns={ 2 }>
    <Button onClick={ () => {
      const name = this.radioOne.checked
        ? 'One'
        : this.radioTwo.checked
          ? 'Two'
          : 'None'

      setState({ value: name })
    }}>Click me</Button>

    <Text>Value: { state.value }</Text>
  </Grid>
</Grid>
```

Validation:

```
<Grid columns={ 1 }>
  <RadioButton
    validation='error'
    validationText='We crashed!'
  >Click me</RadioButton>
  <RadioButton
    validation='warning'
    validationText='You may want to pull up!'
  >Click me</RadioButton>
  <RadioButton
    validation='success'
    validationText='We have landed safely.'
  >Click me</RadioButton>
</Grid>
```
