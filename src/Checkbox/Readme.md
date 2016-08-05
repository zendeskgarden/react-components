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
<Checkbox
  checked={ state.checked }
  onChange={ (checked) => setState({ checked }) }
>
  Click me!
</Checkbox>
```

Support for RTL:

```
<Checkbox
  checked={ state.checked }
  dir='rtl'
  onChange={ (checked) => setState({ checked }) }
>
  Click me
</Checkbox>
```
