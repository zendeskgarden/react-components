### Split button

The split button pattern is composed of:

- `SplitButton` component as a container
- `Button` component for the main action
- `ChevronButton` component for the secondary actions
- `Dropdown/Menu/Trigger` components from [@zendeskgarden/react-dropdowns](https://zendeskgarden.github.io/react-components/dropdowns/)
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
      <SplitButton>
        <Button onClick={() => increment(1)} key="primary">
          Add 1
        </Button>
        <Dropdown
          onStateChange={changes => {
            if (Object.prototype.hasOwnProperty.call(changes, 'isOpen')) {
              setState({ isOpen: changes.isOpen });
            }
          }}
          onSelect={value => increment(value)}
        >
          <Trigger>
            <ChevronButton key="secondary" isRotated={state.isOpen} aria-label="Other Options" />
          </Trigger>
          <Menu placement="bottom-end">
            <Item value={5}>Add 5</Item>
            <Item value={10}>Add 10</Item>
          </Menu>
        </Dropdown>
      </SplitButton>
    </Col>
    <Col sm={6}>Total Count: {state.count}</Col>
  </Row>
</Grid>;
```

### Button group

The `ButtonGroup` component requires the following structure. `Button`
components require a unique `value`. All components accept attributes and
events for their native DOM elements.

```jsx static
<ButtonGroup>
  <Button value="button-1">Item 1</Button>
  ...
</ButtonGroup>
```

This example demonstrates controlled state and custom `onClick` events for
each button.

```jsx
const ExampleButtonGroup = ({ children, initialItem, ...props }) => {
  const [selectedItem, setSelectedItem] = React.useState(initialItem);

  const stateChange = newItem => {
    if (newItem) {
      alert(`Button "${newItem}" selected`);
      setSelectedItem(newItem);
    }
  };

  return (
    <ButtonGroup selectedItem={selectedItem} onSelect={stateChange} {...props}>
      {children}
    </ButtonGroup>
  );
};

<ExampleButtonGroup initialItem="button-2">
  <Button value="button-1" onClick={() => console.log('clicked')}>
    Item 1
  </Button>
  <Button value="button-2" onClick={() => console.log('clicked')}>
    Item 2
  </Button>
  <Button value="button-3" onClick={() => console.log('clicked')}>
    Item 3
  </Button>
</ExampleButtonGroup>;
```
