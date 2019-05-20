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
      <ButtonGroupView>
        <Button onClick={() => increment(1)}>Add 1</Button>
        <Dropdown
          onStateChange={({ isOpen }) => setState({ isOpen })}
          onSelect={value => increment(value)}
        >
          <Trigger>
            <ChevronButton rotated={state.isOpen} aria-label="Other Options" />
          </Trigger>
          <Menu placement="bottom-end">
            <Item value={5}>Add 5</Item>
            <Item value={10}>Add 10</Item>
          </Menu>
        </Dropdown>
      </ButtonGroupView>
    </Col>
    <Col sm={6}>Total Count: {state.count}</Col>
  </Row>
</Grid>;
```
