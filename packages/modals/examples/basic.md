The `Modal` component is implemented to the
[W3C modal accessibility design pattern](https://www.w3.org/TR/wai-aria-practices/#dialog_modal)
and applies the correct accessibility attributes to the views listed below.

### Default Usages

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

initialState = {
  isModalVisible: false,
  isDanger: false,
  isLarge: false,
  isAnimated: true
};

const onModalClose = () => setState({ isModalVisible: false });

<div>
  <Grid>
    <Row>
      <Col md>
        <Button
          onClick={() =>
            setState({
              isModalVisible: true,
              isDanger: false,
              isLarge: false,
              isAnimated: true
            })
          }
        >
          Open default Modal
        </Button>
      </Col>
      <Col md>
        <Button
          isDanger
          onClick={() =>
            setState({
              isModalVisible: true,
              isDanger: true,
              isLarge: false,
              isAnimated: true
            })
          }
        >
          Open danger Modal
        </Button>
      </Col>
      <Col md>
        <Button
          onClick={() =>
            setState({
              isModalVisible: true,
              isDanger: false,
              isLarge: true,
              isAnimated: true
            })
          }
        >
          Open large Modal
        </Button>
      </Col>
      <Col md>
        <Button
          onClick={() =>
            setState({
              isModalVisible: true,
              isDanger: false,
              isLarge: false,
              isAnimated: false
            })
          }
        >
          Open Modal with no animation
        </Button>
      </Col>
    </Row>
  </Grid>
  {state.isModalVisible && (
    <Modal onClose={onModalClose} isLarge={state.isLarge} isAnimated={state.isAnimated}>
      <Header isDanger={state.isDanger}>Example Header</Header>
      <Body>
        Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya es
        black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water
        chestnut eggplant winter purslane fennel azuki.
      </Body>
      <Footer>
        <FooterItem>
          <Button onClick={onModalClose} isBasic>
            Cancel
          </Button>
        </FooterItem>
        <FooterItem>
          <Button onClick={onModalClose} isPrimary isDanger={state.isDanger}>
            Confirm
          </Button>
        </FooterItem>
      </Footer>
      <Close aria-label="Close modal" />
    </Modal>
  )}
</div>;
```

### Content Focus Jail

The `Modal` component uses the [useFocusJail()](https://www.npmjs.com/package/@zendeskgarden/container-focusjail)
hook internally to limit focus and keyboard navigation
to the Modal content. The hook returns keyboard focus to the trigger element that opened the modal.
In some [cases](https://www.w3.org/TR/wai-aria-practices/#h-note-7) developers
may still need to manage keyboard focus.

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');
const { Field, Label, Input } = require('@zendeskgarden/react-forms/src');

initialState = {
  isModalVisible: false
};

const onModalClose = () => setState({ isModalVisible: false });

<div>
  <Button onClick={() => setState({ isModalVisible: true })}>Open Modal</Button>
  {state.isModalVisible && (
    <Modal onClose={onModalClose}>
      <Header>Focus will be locked in this modal</Header>
      <Body>
        <Field>
          <Label>Input 1</Label>
          <Input
            ref={ref => {
              setTimeout(() => {
                ref && ref.focus();
              }, 0);
            }}
          />
        </Field>
        <Field className="u-mt">
          <Label>Input 2</Label>
          <Input />
        </Field>
      </Body>
      <Footer>
        <FooterItem>
          <Button onClick={onModalClose} isBasic>
            Cancel
          </Button>
        </FooterItem>
        <FooterItem>
          <Button isPrimary onClick={onModalClose}>
            Confirm
          </Button>
        </FooterItem>
      </Footer>
      <Close aria-label="Close modal" />
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
    <Modal
      onClose={onModalClose}
      style={{ width: state.width, paddingBottom: DEFAULT_THEME.space.md }}
    >
      <Header>{state.width} Header</Header>
      <Body>
        Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth pea
        water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato
        desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize
        bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels
        sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot kale watercress.
        Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
        Nori grape silver kombu.
      </Body>
      <Close aria-label="Close modal" />
    </Modal>
  )}
</div>;
```
