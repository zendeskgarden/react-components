Interactive:

```
initialState={ value: '' };

<TextArea
  onChange={ (value) => setState({ value }) }
  hint="Don't be scared"
  label='Dump your brain here:'
  placeholder='Write something'
  value={ state.value }
/>
```

Sizes:

```
<Grid columns={1} stretched>
  <TextArea
    label='Small'
    placeholder='Write something'
    size='small'
  />
  <TextArea
    label='Medium'
    placeholder='Write something'
    size='medium'
  />
</Grid>
```

Resizable:

```
initialState={ value: '' };

<Grid columns={1} stretched>
  <TextArea
    onChange={ (value) => setState({ value }) }
    placeholder='Write something'
    value={ state.value }
    resizable
  />
</Grid>
```

Validation:

```
<Grid columns={1} stretched>
  <TextArea
    label='Error:'
    placeholder='Write something'
    validation='error'
    validationText='We crashed!'
  />
  <TextArea
    label='Warning:'
    placeholder='Write something'
    validation='warning'
    validationText='You may want to pull up now!'
  />
  <TextArea
    label='Success:'
    placeholder='Write something'
    validation='success'
    validationText='We have landed safely.'
  />
</Grid>
```

Disabled:

```
initialState={ value: '' };

<Grid columns={1} stretched>
  <TextArea
    disabled
    onChange={ (value) => setState({ value }) }
    placeholder='Write something'
    value={ state.value }
  />
</Grid>
```

### Uncontrolled component

By not providing a `value` prop, the component becomes "uncontrolled" (Read more [here](https://facebook.github.io/react/docs/uncontrolled-components.html)). To pass an
initial value, use `defaultValue`. You can access the underlying input ref through `ref.input`.

```
let node;
initialState={ value: 'Bob', uncontrolled: '' };

<Grid columns={ 3 }>
  <Text>Controlled</Text>
  <TextArea
    onChange={ (value) => setState({ value }) }
    value={ state.value }
  />
  <Text>Value: { state.value }</Text>

  <Text>Uncontrolled</Text>
  <TextArea
    defaultValue='Bob'
    ref={ (ref) => ref && (node = ref.input) }
  />
  <Text>Value: { state.uncontrolled }</Text>

  <Button onClick={ () => {
    setState({ uncontrolled: node.value })
  }}>Submit</Button>

</Grid>
```
