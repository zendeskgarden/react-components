```
initialState = { checked: true };

<Toggle
  checked={ state.checked }
  onChange={ checked => setState({ checked }) }
/>
```

With a hint:

```
initialState = { checked: false };

<Toggle hint='Hint hint'>
  Toggle me
</Toggle>
```

Muted:

Toggles support being muted in order to logically display under a label heading.

```
<Grid columns={1} spacing='medium'>
  Article settings
  <Toggle muted>
    Open for comments
  </Toggle>
  <Toggle muted>
    Promoted
  </Toggle>
</Grid>
```

Support for RTL:

```
<Toggle dir='rtl'>
  Toggle me
</Toggle>
```

Uncontrolled:

```
let node;
initialState={ checked: false };

<Grid columns={ 1 } spacing='large'>
  <Toggle
    defaultChecked={ false }
    ref={ ref => ref && (node = ref.input)}
  >
    Click me
  </Toggle>

  <Grid columns={ 2 }>
    <Button onClick={ () => {
      setState({ checked: node.checked })
    }}>Click me</Button>

    <Text>Checked: { state.checked ? 'On' : 'Off' }</Text>
  </Grid>
</Grid>
```

Validation:

```
<Grid columns={ 1 } spacing='small'>
  <Toggle
    validation='error'
    validationText='We crashed!'
  >
    Toggle me
  </Toggle>
  <Toggle
    validation='warning'
    validationText='You may want to pull up now!'
  >
    Toggle me
  </Toggle>
  <Toggle
    validation='success'
    validationText='We landed safely.'
  >
    Toggle me
  </Toggle>
</Grid>
```
