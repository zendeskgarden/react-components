The `ButtonGroup` component requires the following structure. All `Button`
components require a unique `key`. All elements proxy the props of their
native DOM representations. If this abstraction is not able to handle your
use-case use the [ButtonGroupContainer](#buttongroupcontainer) component with
our styled presentation components.

```jsx static
<ButtonGroup>
  <Button key="button-1">Item 1</Button>
  ...
</ButtonGroup>
```

### Uncontrolled Usage

```jsx
<ButtonGroup>
  <Button key="button-1">Item 1</Button>
  <Button key="button-2">Item 2</Button>
  <Button key="button-3">Item 3</Button>
</ButtonGroup>
```

### Controlled Usage

All elements proxy their events and attributes. This example uses controlled
state as well as custom `onClick` events for each button.

```jsx
initialState = { selectedKey: 'button-2' };

<ButtonGroup
  selectedKey={state.selectedKey}
  onStateChange={newState => {
    if (newState.selectedKey) {
      alert(`Button "${newState.selectedKey}" selected`);
    }

    setState(newState);
  }}
>
  <Button key="button-1" onClick={() => console.log('clicked')}>
    Item 1
  </Button>
  <Button key="button-2" onClick={() => console.log('clicked')}>
    Item 2
  </Button>
  <Button disabled>Disabled item</Button>
  <Button key="button-3" onClick={() => console.log('clicked')}>
    Item 3
  </Button>
</ButtonGroup>;
```

The `SplitButton` pattern is accomplished with:

- `ButtonGroupView` component as a containing wrapper
- `Button` component for the main action
- `ChevronButton` component for the secondary actions
- `Dropdown/Menu/Trigger` components from [@zendeskgarden/react-dropdowns](https://garden.zendesk.com/react-components/dropdowns/)
  package for the secondary actions menu

```jsx
const { Dropdown, Trigger, Menu, Item } = require('@zendeskgarden/react-dropdowns/src');

initialState = {
  count: 0,
  isOpen: false
};

const increment = (num = 0) => setState({ count: state.count + num });

<Grid>
  <Row>
    <Col sm={6}>
      <ButtonGroup>
        <Button onClick={() => increment(1)} key="primary" selected={false}>
          Add 1
        </Button>
        <Dropdown
          onStateChange={({ isOpen }) => setState({ isOpen })}
          onSelect={value => increment(value)}
        >
          <Trigger>
            <ChevronButton key="secondary" rotated={state.isOpen} aria-label="Other Options" />
          </Trigger>
          <Menu placement="bottom-end">
            <Item value={5}>Add 5</Item>
            <Item value={10}>Add 10</Item>
          </Menu>
        </Dropdown>
      </ButtonGroup>
    </Col>
    <Col sm={6}>Total Count: {state.count}</Col>
  </Row>
</Grid>;
```
