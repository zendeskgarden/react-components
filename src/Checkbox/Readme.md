```
<Grid columns={2}>
  <Checkbox>Unchecked</Checkbox>
  <Checkbox disabled>Unchecked</Checkbox>
  <Checkbox checked>Checked</Checkbox>
  <Checkbox disabled checked>Checked</Checkbox>
</Grid>
```

Add a change handler:

```
initialState = { checked: false };

<Checkbox
  checked={ state.checked }
  onChange={ (checked) => setState({ checked }) }
>
  Click me!
</Checkbox>
```

Muted:

```
initialState = { checked: false };

<Checkbox
  checked={ state.checked }
  muted
  onChange={ (checked) => setState({ checked }) }
>
  Click me
</Checkbox>
```

Support for RTL:

```
initialState = { checked: false };

<Checkbox
  checked={ state.checked }
  dir='rtl'
  onChange={ (checked) => setState({ checked }) }
>
  Click me
</Checkbox>
```

Uncontrolled:

```
let node;
initialState={ checked: false };

<Grid columns={ 1 } spacing='large'>
  <Checkbox
    defaultChecked={ false }
    ref={ ref => ref && (node = ref.input)}
  >
    Click me
  </Checkbox>

  <Grid columns={ 2 }>
    <Button onClick={ () => {
      setState({ checked: node.checked })
    }}>Click me</Button>

    <Text>Checked: { state.checked ? 'On' : 'Off' }</Text>
  </Grid>
</Grid>
```
