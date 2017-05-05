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

With a hint:

```
<Checkbox hint='Hint hint'>
  Click me
</Checkbox>
```

Muted:

Checkboxes support being muted in order to logically display under a label heading.

```
<Grid columns={1} spacing='medium'>
  Article settings
  <Grid columns={1}>
    <Checkbox muted>
      Open for comments
    </Checkbox>
    <Checkbox muted>
      Promoted
    </Checkbox>
  </Grid>
</Grid>
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

Validation:

```
<Grid columns={ 1 } spacing='small'>
  <Checkbox validation='error' validationText='We crashed!'>
    Click me
  </Checkbox>
  <Checkbox validation='warning' validationText='You may want to pull up now!'>
    Click me
  </Checkbox>
  <Checkbox validation='success' validationText='We have landed safely!'>
    Click me
  </Checkbox>
</Grid>
```
