```
initialState={ value: '' };

<TextInput
  onChangeText={ (value) => setState({ value }) }
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
