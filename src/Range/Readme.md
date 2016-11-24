Various settings:

```
initialState = { value: 50 };

<Range
  label='How satisfied are you?'
  value={ state.value }
  title={ `${state.value}` }
  onChange={ (value) => setState({ value }) }
/>
```

```
initialState = { value: 10 };

<Range
  min={0}
  max={100}
  step={1}
  value={ state.value }
  title={ `${state.value}` }
  onChange={ (value) => setState({ value }) }
/>
```

```
initialState = { value: 0 };

<Range
  min={-100}
  max={100}
  step={20}
  value={ state.value }
  title={ `${state.value}` }
  onChange={ (value) => setState({ value }) }
/>
```

```
initialState = { value: 612.5 };

<Range
  min={123}
  max={789}
  step={0.1}
  value={ state.value }
  title={ `${state.value}` }
  onChange={ (value) => setState({ value }) }
/>
```

Disabled:
```
initialState = { value: 21 };

<Range
  disabled
  min={0}
  max={100}
  step={1}
  value={ state.value }
  onChange={ (value) => setState({ value }) }
/>
```
