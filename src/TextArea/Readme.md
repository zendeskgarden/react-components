Interactive:

```
initialState={ value: '' };

<TextArea
  onChangeText={ (value) => setState({ value }) }
  label='Dump your brain here:'
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

Disabled:

```
initialState={ value: '' };

<Grid columns={1} stretched>
  <TextArea
    disabled
    onChangeText={ (value) => setState({ value }) }
    placeholder='Write something'
    value={ state.value }
  />
</Grid>
```

### Uncontrolled component

By not providing a `value` prop, the component becomes "uncontrolled" (Read more [here](https://facebook.github.io/react/docs/uncontrolled-components.html)). To pass an
initial value, use `defaultValue`. You can access the underlying input ref through `ref.input`.

```
initialState={ value: 'Bob', uncontrolled: '' };

<Grid columns={ 3 }>
  <Text>Controlled</Text>
  <TextArea
    onChangeText={ (value) => setState({ value }) }
    value={ state.value }
  />
  <Text>Value: { state.value }</Text>

  <Text>Uncontrolled</Text>
  <TextArea
    defaultValue='Bob'
    ref={ (ref) => ref && (this.input = ref.input) }
  />
  <Text>Value: { state.uncontrolled }</Text>

  <Button onClick={ () => {
    setState({ uncontrolled: this.input.value })
  }}>Submit</Button>

</Grid>
```
