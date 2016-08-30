```
initialState = { clicked: null };

<Grid columns={1}>
  <ButtonGroup>
    <Button onClick={ () => setState({ clicked: 'One' }) }>One</Button>
    <Button onClick={ () => setState({ clicked: 'Two' }) }>Two</Button>
    <Button onClick={ () => setState({ clicked: 'Three' }) }>Three</Button>
  </ButtonGroup>

  <Text>
    { state.clicked ? `You clicked: ${state.clicked}` : 'Click a button'}
  </Text>
</Grid>
```

Sizes:

```
<Grid columns={1}>
  <ButtonGroup>
    <Button size='small'>One</Button>
    <Button size='small'>Two</Button>
    <Button size='small'>Three</Button>
  </ButtonGroup>
  <ButtonGroup>
    <Button size='medium'>One</Button>
    <Button size='medium'>Two</Button>
    <Button size='medium'>Three</Button>
  </ButtonGroup>
  <ButtonGroup>
    <Button size='large'>One</Button>
    <Button size='large'>Two</Button>
    <Button size='large'>Three</Button>
  </ButtonGroup>
</Grid>
```

States:

```
<ButtonGroup>
  <Button>One</Button>
  <Button disabled>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
```

Types:

```
<Grid columns={1}>
  <ButtonGroup>
    <Button type='default'>One</Button>
    <Button type='default'>Two</Button>
    <Button type='default'>Three</Button>
  </ButtonGroup>
  <ButtonGroup>
    <Button>One</Button>
    <Button>Two</Button>
    <Button type='primary'>Three</Button>
  </ButtonGroup>
  <ButtonGroup>
    <Button type='basic'>One</Button>
    <Button type='basic'>Two</Button>
    <Button type='basic'>Three</Button>
  </ButtonGroup>
</Grid>
```
