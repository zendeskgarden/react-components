Sizes:

```
const { Component } = require('react')

class ModalExample extends Component {
  render () {
    const { size } = this.props
    const { hidden } = this.state || { hidden: true }

    return (
      <View>
        <Button onClick={ () => this.setState({ hidden: false })}>
          { `Show ${size} modal` }
        </Button>

        <Modal
          hidden={ hidden }
          onClose={ () => this.setState({ hidden: true }) }
          size={ size }
        >
          <Modal.Header>
            <Modal.Title>A { size } size modal</Modal.Title>
            <Modal.CloseButton
              onClick={ () => this.setState({ hidden: true }) }
            />
          </Modal.Header>
          <Modal.Body>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={ () => this.setState({ hidden: true }) } size='medium' type='basic'>Cancel</Button>
            <Button autoFocus size='medium' type='primary'>Ok</Button>
          </Modal.Footer>
        </Modal>
      </View>
    )
  }
};

<Grid>
  <ModalExample size='medium'/>
  <ModalExample size='large'/>
</Grid>
```

Widths:

```
const { Component } = require('react')

class ModalExample extends Component {
  render () {
    const { width } = this.props
    const { hidden } = this.state || { hidden: true }

    return (
      <View>
        <Button onClick={ () => this.setState({ hidden: false })}>
          { `Show ${width} modal` }
        </Button>

        <Modal
          hidden={ hidden }
          onClose={ () => this.setState({ hidden: true }) }
          width={ width }
        >
        <Modal.Header>
          <Modal.Title>{ width } modal</Modal.Title>
          <Modal.CloseButton
            onClick={ () => this.setState({ hidden: true }) }
          />
        </Modal.Header>
        <Modal.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </Modal.Body>
       </Modal>
      </View>
    )
  }
};

<Grid>
  <ModalExample width='50%'/>
  <ModalExample width='480px'/>
  <ModalExample width='900px'/>
</Grid>
```
Any content may be placed within a modal container:

```
initialState = { hidden: true }
const onClose = () => setState({ hidden: true })
const onOpen = () => setState({ hidden: false });

<View>
  <Button onClick={ onOpen }>
    Show modal
  </Button>

  <Modal
    hidden={ state.hidden }
    onClose={ onClose }
  >
    <State initialState={{ value: '' }}>
      {
        (state, setState) => (
          <Grid columns={1} spacing='medium'>
            <Text>You can place anything inside a modal.</Text>

            <Menu
              trigger={ <Button>Click me</Button> }
              onChange={ (value) => console.log(value) }
            >
              <Menu.Item value='profile'>Profile</Menu.Item>
              <Menu.Item value='settings'>Settings</Menu.Item>
              <Menu.Item value='theme editor' disabled>Theme Editor</Menu.Item>
              <Menu.Separator/>
              <Menu.Item value='article editor'>Article Editor</Menu.Item>
              <Menu.Item value='sign out'>Sign Out</Menu.Item>
            </Menu>

            <Checkbox
              checked={ state.checked }
              onChange={ checked => setState({ checked }) }
            >
              are you happy?
            </Checkbox>

            <TextInput
              onChange={ (value) => setState({ value }) }
              placeholder='Write something here'
              value={ state.value }
            />
          </Grid>
        )
      }
    </State>
  </Modal>
</View>
```

Support for RTL:

```
initialState = { hidden: true }
const onClose = () => setState({ hidden: true })
const onOpen = () => setState({ hidden: false });

<View>
  <Button onClick={ onOpen }>
    Show modal
  </Button>

  <Modal
    dir='rtl'
    hidden={ state.hidden }
    onClose={ onClose }
  >
    <Modal.Header>
      <Modal.Title>Dialog Title</Modal.Title>
      <Modal.CloseButton
        onClick={ onClose }
      />
    </Modal.Header>
    <Modal.Body>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry's standard dummy text ever since the 1500s, when an
      unknown printer took a galley of type and scrambled it to make a type specimen
      book. It has survived not only five centuries, but also the leap into electronic
      typesetting, remaining essentially unchanged. It was popularised in the 1960s
      with the release of Letraset sheets containing Lorem Ipsum passages, and more
      recently with desktop publishing software like Aldus PageMaker including
      versions of Lorem Ipsum.
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={ onClose } size='medium' type='basic'>Cancel</Button>
      <Button size='medium' type='primary' autoFocus>Ok</Button>
    </Modal.Footer>
  </Modal>
</View>
```
