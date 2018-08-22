The `SplitButton` pattern is accomplished with:

- `ButtonGroupView` component as a containing wrapper
- `Button` component for the main action
- `ChevronButton` component for the secondary actions
- `Menu` component from [@zendeskgarden/react-menus](https://garden.zendesk.com/react-components/menus/)
  package for the secondary actions menu

```jsx
/**
 * Must use relative link to avoid circular dependency
 * between `react-menus` and `react-buttons` in lerna bootstrap
 **/
const { Menu, Item } = require('../../../menus/src');

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
        <Menu
          isOpen={state.isOpen}
          placement="top-end"
          onChange={selectedKey => {
            if (selectedKey === 'add-5') {
              increment(5);
            } else if (selectedKey === 'add-10') {
              increment(10);
            }
          }}
          onStateChange={newState => setState(newState)}
          trigger={({ ref }) => (
            <ChevronButton
              buttonRef={ref}
              rotated={state.isOpen}
              active={state.isOpen}
              aria-label="Other Options"
            />
          )}
        >
          <Item key="add-5">Add 5</Item>
          <Item key="add-10">Add 10</Item>
        </Menu>
      </ButtonGroupView>
    </Col>
    <Col sm={6}>Total Count: {state.count}</Col>
  </Row>
</Grid>;
```
