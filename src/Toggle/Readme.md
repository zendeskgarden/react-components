```
initialState = { checked: true };

<Toggle
  checked={ state.checked }
  onChange={ checked => setState({ checked }) }
/>
```

Use a label for the toggle:

```
initialState = { checked: false };

<Toggle
  checked={ state.checked }
  onChange={ checked => setState({ checked }) }
>
  Toggle me
</Toggle>
```

Support for RTL:

```
initialState = { checked: false };

<Toggle
  checked={ state.checked }
  dir='rtl'
  onChange={ checked => setState({ checked }) }
>
  Toggle me
</Toggle>
```

Uncontrolled:

```
initialState={ checked: false };

<Grid columns={ 1 } spacing='large'>
  <Toggle
    defaultChecked={ false }
    ref={ ref => ref && (this.input = ref.input)}
  >
    Click me
  </Toggle>

  <Grid columns={ 2 }>
    <Button onClick={ () => {
      setState({ checked: this.input.checked })
    }}>Click me</Button>

    <Text>Checked: { state.checked ? 'On' : 'Off' }</Text>
  </Grid>
</Grid>
```
