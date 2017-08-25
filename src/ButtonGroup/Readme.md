The button group is a navigation element just like tabs but with no content
panel associated.

```
initialState = { active: 'two' };

<ButtonGroup
  active={ state.active }
  onChange={ (active) => setState({ active })}
>
  <ButtonGroup.Item id='one'>One</ButtonGroup.Item>
  <ButtonGroup.Item id='two'>Two</ButtonGroup.Item>
  <ButtonGroup.Item id='three'>Three</ButtonGroup.Item>
</ButtonGroup>
```

Sizes:

```
initialState = {
  activeSmall: null,
  activeMedium: null,
  activeLarge: null
};

<Grid columns={1}>
  <ButtonGroup
    active={ state.activeSmall }
    onChange={ (activeSmall) => setState({ activeSmall })}
    size='small'
  >
    <ButtonGroup.Item id='one'>One</ButtonGroup.Item>
    <ButtonGroup.Item id='two'>Two</ButtonGroup.Item>
    <ButtonGroup.Item id='three'>Three</ButtonGroup.Item>
  </ButtonGroup>
  <ButtonGroup
    active={ state.activeMedium }
    onChange={ (activeMedium) => setState({ activeMedium })}
    size='medium'
  >
    <ButtonGroup.Item id='one'>One</ButtonGroup.Item>
    <ButtonGroup.Item id='two'>Two</ButtonGroup.Item>
    <ButtonGroup.Item id='three'>Three</ButtonGroup.Item>
  </ButtonGroup>
  <ButtonGroup
    active={ state.activeLarge }
    onChange={ (activeLarge) => setState({ activeLarge })}
    size='large'
  >
    <ButtonGroup.Item id='one'>One</ButtonGroup.Item>
    <ButtonGroup.Item id='two'>Two</ButtonGroup.Item>
    <ButtonGroup.Item id='three'>Three</ButtonGroup.Item>
  </ButtonGroup>
</Grid>
```

Support for RTL:

```
initialState = { active: 'one' };

<ButtonGroup
  dir='rtl'
  active={ state.active }
  onChange={ (active) => setState({ active })}
>
  <ButtonGroup.Item id='one'>One</ButtonGroup.Item>
  <ButtonGroup.Item id='two'>Two</ButtonGroup.Item>
  <ButtonGroup.Item id='three'>Three</ButtonGroup.Item>
</ButtonGroup>
```
