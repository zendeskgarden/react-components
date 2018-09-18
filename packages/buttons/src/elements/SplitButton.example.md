The `SplitButton` pattern is accomplished with:

- `ButtonGroupView` component as a containing wrapper
- `Button` component for the main action
- `ChevronButton` component for the secondary actions
- `Menu` component from [@zendeskgarden/react-menus](https://garden.zendesk.com/react-components/menus/)
  package for the secondary actions menu

### React `16+`

The `react-menus` package uses the [React.Fragments](https://reactjs.org/docs/fragments.html)
API internally. For React <=15 support, use the example below.

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

### React `<=15`

Due the the `Fragment` usage in the `react-menus` component, a wrapping `<div>`
is visible in React versions `<= 15`.

This extra `<div>` can cause styling issues depending on where/how the
component is used. The most customizable approach, if you are using a
lower React version, is to use the `MenuContainer` component. This
customization allows you to spread the required attributes and events
onto the `ChevronButton`.

```jsx
/**
 * Must use relative link to avoid circular dependency
 * between `react-menus` and `react-buttons` in lerna bootstrap
 **/
const { MenuContainer, MenuView, Item } = require('../../../menus/src');

initialState = {
  count: 0,
  isOpen: false
};

const increment = (num = 0) => setState({ count: state.count + num });

<Grid>
  <Row>
    <Col sm={6}>
      <MenuContainer
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
        trigger={({ getTriggerProps, triggerRef }) => (
          <ButtonGroupView>
            <Button onClick={() => increment(1)}>Add 1</Button>
            <ChevronButton
              {...getTriggerProps({
                buttonRef: triggerRef,
                active: state.isOpen,
                rotated: state.isOpen,
                ['aria-label']: 'Other Options'
              })}
            />
          </ButtonGroupView>
        )}
      >
        {({ getMenuProps, menuRef, placement, getItemProps, focusedKey }) => (
          <MenuView {...getMenuProps({ placement, menuRef })}>
            <Item
              {...getItemProps({
                key: 'add-5',
                textValue: 'Add 5',
                focused: focusedKey === 'add-5'
              })}
            >
              Add 5
            </Item>
            <Item
              {...getItemProps({
                key: 'add-10',
                textValue: 'Add 10',
                focused: focusedKey === 'add-10'
              })}
            >
              Add 10
            </Item>
          </MenuView>
        )}
      </MenuContainer>
    </Col>
    <Col sm={6}>Total Count: {state.count}</Col>
  </Row>
</Grid>;
```
