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
  hint='With some hint too'
>
  Toggle me
</Toggle>
```

Muted:

```
initialState = { checked: false };

<Toggle
  checked={ state.checked }
  onChange={ checked => setState({ checked }) }
  muted
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
