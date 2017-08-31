Floating callouts:
```
initialState = { callouts: [], selectedType: 'default' };
<Grid columns={1} stretched>
  <Select
    label='Type of callout'
    onChange={ value => setState({ selectedType: value })}
    selected={state.selectedType}
  >
    <Select.Item value='default'>Default</Select.Item>
    <Select.Item value='success'>Success</Select.Item>
    <Select.Item value='warning'>Warning</Select.Item>
    <Select.Item value='error'>Error</Select.Item>
  </Select>

  <Button
    onClick={() => {
      setState({ callouts: state.callouts.concat(
        <Callout title='Title!' type={state.selectedType} key={`${state.callouts.length + 1}`}>
          This is a floating callout
          </Callout>
        )}
      )}
    }
    >
      Show notification
    </Button>

    <Button onClick={() => { setState({ callouts: [] })}}>
        Dismiss all notifications
    </Button>

    <Callouts floating>
      {state.callouts}
    </Callouts>
</Grid>
```

Floating callouts RTL:
```
initialState = { callouts: [], selectedType: 'default' };
<Grid columns={1} stretched>
  <Select
    label='Type of callout'
    onChange={ value => setState({ selectedType: value })}
    selected={state.selectedType}
  >
    <Select.Item value='default'>Default</Select.Item>
    <Select.Item value='success'>Success</Select.Item>
    <Select.Item value='warning'>Warning</Select.Item>
    <Select.Item value='error'>Error</Select.Item>
  </Select>

  <Button
    onClick={() => {
      setState({ callouts: state.callouts.concat(
        <Callout title='Title!' type={state.selectedType} key={`${state.callouts.length + 1}`}>
          This is a floating callout
          </Callout>
        )}
      )}
    }
    >
      Show notification
    </Button>

    <Button onClick={() => { setState({ callouts: [] })}}>
        Dismiss all notifications
    </Button>

    <Callouts floating dir='rtl'>
      {state.callouts}
    </Callouts>
</Grid>
```
