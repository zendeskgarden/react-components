The `Modal` component is implemented to the
[W3C modal accessibility design pattern](https://www.w3.org/TR/wai-aria-practices/#dialog_modal)
and applies the correct accessibility attributes to the views listed below.

### Default Usages

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

initialState = {
  isModalVisible: false,
  large: false,
  animate: true
};

const onModalClose = () => setState({ isModalVisible: false });

<div>
  <Grid>
    <Row>
      <Col md>
        <Button onClick={() => setState({ isModalVisible: true, large: false, animate: true })}>
          Open default Modal
        </Button>
      </Col>
      <Col md>
        <Button onClick={() => setState({ isModalVisible: true, large: true, animate: true })}>
          Open large Modal
        </Button>
      </Col>
      <Col md>
        <Button onClick={() => setState({ isModalVisible: true, large: false, animate: false })}>
          Open Modal with no animation
        </Button>
      </Col>
    </Row>
  </Grid>
  {state.isModalVisible && (
    <Modal onClose={onModalClose} large={state.large} animate={state.animate}>
      <Header>Example Header</Header>
      <Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </Body>
      <Footer>
        <Button onClick={onModalClose}>Cancel</Button>
        <Button onClick={onModalClose} primary>
          Confirm
        </Button>
      </Footer>
      <Close />
    </Modal>
  )}
</div>;
```

### Content Focus Jail

The `Modal` component uses the `FocusJailContainer` internally to limit focus
and keyboard navigation to the Modal content.

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');
const { TextField, Label, Input } = require('@zendeskgarden/react-textfields/src');

initialState = {
  isModalVisible: false
};

const onModalClose = () => setState({ isModalVisible: false });

<div>
  <Button onClick={() => setState({ isModalVisible: true })}>Open Modal</Button>
  {state.isModalVisible && (
    <Modal onClose={onModalClose}>
      <Header>Focus Jail Container</Header>
      <Body>
        <TextField>
          <Label>Input 1</Label>
          <Input
            placeholder="Focus will be locked in this modal"
            innerRef={ref => {
              setTimeout(() => {
                ref && ref.focus();
              }, 0);
            }}
          />
        </TextField>
        <TextField>
          <Label>Input 2</Label>
          <Input placeholder="Focus will be locked in this modal" />
        </TextField>
      </Body>
      <Footer>
        <Button onClick={onModalClose}>Cancel</Button>
        <Button primary onClick={onModalClose}>
          Confirm
        </Button>
      </Footer>
      <Close />
    </Modal>
  )}
</div>;
```

### Widths

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

initialState = {
  isModalVisible: false,
  width: '500px'
};

const onModalClose = () => setState({ isModalVisible: false });

<div>
  <Grid>
    <Row>
      <Col md>
        <Button onClick={() => setState({ isModalVisible: true, width: '50%' })}>
          Show 50% modal
        </Button>
      </Col>
      <Col md>
        <Button onClick={() => setState({ isModalVisible: true, width: '480px' })}>
          Show 480px modal
        </Button>
      </Col>
      <Col md>
        <Button onClick={() => setState({ isModalVisible: true, width: '900px' })}>
          Show 900px modal
        </Button>
      </Col>
    </Row>
  </Grid>
  {state.isModalVisible && (
    <Modal onClose={onModalClose} style={{ width: state.width }}>
      <Header>{state.width} Header</Header>
      <Body>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </Body>
      <Close />
    </Modal>
  )}
</div>;
```
