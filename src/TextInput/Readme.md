Interactive:

```
initialState={ value: '' };

<TextInput
  onChangeText={ (value) => setState({ value }) }
  placeholder='Write something'
  value={ state.value }
/>
```

Types:

```
<Grid columns={1} stretched>
  <TextInput
    placeholder='Write something'
  />
  <TextInput
    placeholder='Write something'
    type='basic'
  />
</Grid>
```

Sizes:

```
<Grid columns={1} stretched>
  <TextInput
    placeholder='Write something'
    size='small'
  />
  <TextInput
    placeholder='Write something'
    size='medium'
  />
</Grid>
```
