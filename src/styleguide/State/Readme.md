This component is internal to the styleguide, it is used create examples where
you need the focus to stay in place while updating the state.

```
<State initialState={{ value: 'This is some text' }}>
  { (state, setState) => (
    <TextInput
      value={ state.value }
      onChangeText={ (value) => setState({ value }) }
    />
  ) }
</State>
```
