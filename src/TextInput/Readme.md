```
initialState={ value: '' };

<TextInput
  onChangeText={ (value) => setState({ value }) }
  label='Dump your brain here:'
  placeholder='Write something'
  value={ state.value }
/>
```

Disabled

```
initialState={ value: '' };

<TextInput
  onChangeText={ (value) => setState({ value }) }
  placeholder='Write something'
  disabled
  value={ state.value }
/>
```

### Uncontrolled component

By not providing a `value` prop, the component becomes "uncontrolled" (Read more [here](https://facebook.github.io/react/docs/uncontrolled-components.html)). To pass an
initial value, use `defaultValue`.

```
initialState={ value: 'Bob', uncontrolled: '' };

<Grid columns={ 3 }>
  <Text>Controlled</Text>
  <TextInput
    onChangeText={ (value) => setState({ value }) }
    value={ state.value }
  />
  <Text>Value: { state.value }</Text>

  <Text>Uncontrolled</Text>
  <TextInput
    defaultValue='Bob'
    inputRef={ (input) => this.input = input }
  />
  <Text>Value: { state.uncontrolled }</Text>

  <Button onClick={ () => {
    setState({ uncontrolled: this.input.value })
  }}>Submit</Button>

</Grid>
```
