```
initialState={ value: '' };

<TextInput
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
  <TextInput
    label='Small'
    placeholder='Write something'
    size='small'
  />
  <TextInput
    label='Medium'
    placeholder='Write something'
    size='medium'
  />
</Grid>
```

RTL:

```
<TextInput
  dir='rtl'
  label='RTL Support'
  placeholder='Write something'
  size='small' 
/>
```

Input Type Style:

```
<Grid columns={1} stretched>
  <TextInput
    label='Normal Style'
    placeholder='Default styling'
    size='small'
  />
  <TextInput
    label='Bare Style'
    type='bare'
    placeholder='Bare styling'
    size='medium'
  />
</Grid>
```

Validation:

```
<Grid columns={1} stretched>
  <TextInput
    label='Error:'
    placeholder='Write something'
    validation='error'
    validationText='We crashed!'
  />
  <TextInput
    label='Warning:'
    placeholder='Write something'
    validation='warning'
    validationText='You may want to pull up now!'
  />
  <TextInput
    label='Success:'
    placeholder='Write something'
    validation='success'
    validationText='We have landed safely.'
  />
</Grid>
```

Value types:

```
<Grid columns={3} stretched>
  <TextInput label='Email' valueType='email' defaultValue='bob@example.com' />
  <TextInput label='Password' valueType='password' />
  <TextInput label='Telephone' valueType='tel' />
</Grid>
```

Disabled

```
initialState={ value: '' };

<TextInput
  onChange={ (value) => setState({ value }) }
  placeholder='Write something'
  disabled
  value={ state.value }
/>
```

### Uncontrolled component

By not providing a `value` prop, the component becomes "uncontrolled" (Read more [here](https://facebook.github.io/react/docs/uncontrolled-components.html)). To pass an
initial value, use `defaultValue`. You can access the underlying input ref through `ref.input`.

```
let node;
initialState={ value: 'Bob', uncontrolled: '' };

<Grid columns={ 3 }>
  <Text>Controlled</Text>
  <TextInput
    onChange={ (value) => setState({ value }) }
    value={ state.value }
  />
  <Text>Value: { state.value }</Text>

  <Text>Uncontrolled</Text>
  <TextInput
    defaultValue='Bob'
    ref={ (ref) => ref && (node = ref.input) }
  />
  <Text>Value: { state.uncontrolled }</Text>

  <Button onClick={ () => {
    setState({ uncontrolled: node.value })
  }}>Submit</Button>

</Grid>
```
