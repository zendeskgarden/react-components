Interactive:

```
initialState={ value: '' };

<TextArea
  onChangeText={ (value) => setState({ value }) }
  placeholder='Write something'
  value={ state.value }
/>
```

Resizable:

```
initialState={ value: '' };

<Grid columns={1} stretched>
  <TextArea
    onChangeText={ (value) => setState({ value }) }
    placeholder='Write something'
    value={ state.value }
    resizable
  />
</Grid>
```

Types:

```
<Grid columns={1} stretched>
  <TextArea
    placeholder='Write something'
  />
  <TextArea
    placeholder='Write something'
    type='basic'
  />
</Grid>
```
