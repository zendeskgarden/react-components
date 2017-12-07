```
initialState = { hidden: true, selectedFruit: "Banana" };

<RelativePositionedPopup
  anchor={<Button onClick={() => setState({ hidden: false })}>Show</Button>}
  hidden={state.hidden}
  marginBottom={2}
  marginTop={2}
  onClickOutside={() => setState({ hidden: true })}
  positioning={["bottom", "top"]}
>
  {position =>
    <Menu.Container>
      <Grid columns={1} spacing="large" style={{ padding: 16 }}>
        <Text>You can place anything inside a popup.</Text>
        <TextInput
          placeholder="Tab an type something here"
          onChangeText={value => setState({ value })}
          value={state.value}
        />
        <Select
          label="Fruits"
          selected={state.selectedFruit}
          onChange={selectedFruit => setState({ selectedFruit })}
        >
          <Menu.Item value="Apple">Apple</Menu.Item>
          <Menu.Item value="Banana">Banana</Menu.Item>
          <Menu.Item value="Pear">Pear</Menu.Item>
        </Select>
        <Button onClick={() => setState({ hidden: true })}>Close</Button>
      </Grid>
    </Menu.Container>}
</RelativePositionedPopup>;
```

You can use the `trapFocus` property to cycle focus within the popup:


```
initialState={ hidden: true };

<RelativePositionedPopup
  anchor={
    <Button onClick={ () => setState({ hidden: false })}>
      Show
    </Button>
  }
  hidden={ state.hidden }
  marginBottom={2}
  marginTop={2}
  onClickOutside={ () => setState({ hidden: true }) }
  positioning={ ['bottom', 'top'] }
  trapFocus
>
  { position => (
    <Menu.Container>
      <Grid columns={1} spacing='large'>
        <Text>You can place anything inside a popup.</Text>
        <TextInput
          placeholder='Tab an type something here'
          onChangeText={ (value) => setState({ value }) }
          value={ state.value }
        />
        <Button onClick={ () => setState({ hidden: true }) }>
          Close
        </Button>
      </Grid>
    </Menu.Container>
  )}
</RelativePositionedPopup>
```
