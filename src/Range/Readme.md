Various settings:

```
initialState = { value: 50 };

<Range
  label='How satisfied are you?'
  hint='Not very satisfied to the left and very satisfied to the right'
  value={ state.value }
  title={ `${state.value}` }
  onChange={ (value) => setState({ value }) }
/>
```

```
initialState = { value: 10 };

<Range
  min={0}
  max={100}
  step={1}
  value={ state.value }
  title={ `${state.value}` }
  onChange={ (value) => setState({ value }) }
/>
```

```
initialState = { value: 0 };

<Range
  min={-100}
  max={100}
  step={20}
  value={ state.value }
  title={ `${state.value}` }
  onChange={ (value) => setState({ value }) }
/>
```

```
initialState = { value: 612.5 };

<Range
  min={123}
  max={789}
  step={0.1}
  value={ state.value }
  title={ `${state.value}` }
  onChange={ (value) => setState({ value }) }
/>
```

Disabled:
```
initialState = { value: 21 };

<Range
  disabled
  min={0}
  max={100}
  step={1}
  value={ state.value }
  onChange={ (value) => setState({ value }) }
/>
```

Validation:
```
<Grid columns={1} stretched>
  <Range
    min={0}
    max={100}
    step={1}
    validation='error'
    validationText='We crashed!'
  />

  <Range
    min={0}
    max={100}
    step={1}
    validation='warning'
    validationText='You may want to pull up now!'
  />

  <Range
    min={0}
    max={100}
    step={1}
    validation='success'
    validationText='We have landed safely.'
  />
</Grid>
```

Uncontrolled:
```
let node;
initialState = { value: 25 };

<Grid columns={1} stretched>
  <Range
    label='How satisfied are you?'
    title={ `Value: ${(node && node.value) || 25}` }
    defaultValue={ 25 }
    ref={ (ref) => ref && (node = ref.input) }
  />

  <Grid columns={ 2 }>
    <Button onClick={ () => {
      setState({ value: node.value })
    }}>
      Click me
    </Button>
    <Text>Value: {state.value}</Text>
  </Grid>
</Grid>
```
