The button group is a navigation element just like tabs but with no content
panel associated.

```
initialState = { active: 'two' };

<ButtonGroup
  active={ state.active }
  onActivate={ (active) => setState({ active })}
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
    onActivate={ (activeSmall) => setState({ activeSmall })}
    size='small'
  >
    <ButtonGroup.Item id='one'>One</ButtonGroup.Item>
    <ButtonGroup.Item id='two'>Two</ButtonGroup.Item>
    <ButtonGroup.Item id='three'>Three</ButtonGroup.Item>
  </ButtonGroup>
  <ButtonGroup
    active={ state.activeMedium }
    onActivate={ (activeMedium) => setState({ activeMedium })}
    size='medium'
  >
    <ButtonGroup.Item id='one'>One</ButtonGroup.Item>
    <ButtonGroup.Item id='two'>Two</ButtonGroup.Item>
    <ButtonGroup.Item id='three'>Three</ButtonGroup.Item>
  </ButtonGroup>
  <ButtonGroup
    active={ state.activeLarge }
    onActivate={ (activeLarge) => setState({ activeLarge })}
    size='large'
  >
    <ButtonGroup.Item id='one'>One</ButtonGroup.Item>
    <ButtonGroup.Item id='two'>Two</ButtonGroup.Item>
    <ButtonGroup.Item id='three'>Three</ButtonGroup.Item>
  </ButtonGroup>
</Grid>
```

States:

```
initialState = { active: 'one' };

<ButtonGroup
  active={ state.active }
  onActivate={ (active) => setState({ active })}
>
  <ButtonGroup.Item id='one'>One</ButtonGroup.Item>
  <ButtonGroup.Item id='two'>Two</ButtonGroup.Item>
  <ButtonGroup.Item id='three'>Three</ButtonGroup.Item>
  <ButtonGroup.Item id='four' disabled>Four</ButtonGroup.Item>
  <ButtonGroup.Item id='five'>Five</ButtonGroup.Item>
</ButtonGroup>
```

Support for RTL:

```
initialState = { active: 'one' };

<ButtonGroup
  dir='rtl'
  active={ state.active }
  onActivate={ (active) => setState({ active })}
>
  <ButtonGroup.Item id='one'>One</ButtonGroup.Item>
  <ButtonGroup.Item id='two'>Two</ButtonGroup.Item>
  <ButtonGroup.Item id='three'>Three</ButtonGroup.Item>
  <ButtonGroup.Item id='four' disabled>Four</ButtonGroup.Item>
  <ButtonGroup.Item id='five'>Five</ButtonGroup.Item>
</ButtonGroup>
```
