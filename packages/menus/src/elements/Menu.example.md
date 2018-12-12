### Basic Usage

With the high abstraction `Menu` component it will make all children menu
items selectable by default.

All menus items must have a unique `key` prop. This is passed to the
`onChange` prop when an item is selected by mouse and/or keyboard.

For the `trigger` prop ensure that you supply the `ref` callback to your trigger.
This helps ensure an accessible experience for users that are navigating
with a keyboard.

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

<Grid>
  <Row>
    <Col md>
      <Menu
        onChange={selectedKey => alert(selectedKey)}
        trigger={({ ref, isOpen }) => (
          <Button ref={ref} active={isOpen}>
            Default Menu
          </Button>
        )}
      >
        <Item key="item-1">1 - Item</Item>
        <Item key="item-2">2 - Item</Item>
        <Item key="item-3">3 - Item</Item>
      </Menu>
    </Col>
    <Col md>
      <Menu
        small
        onChange={selectedKey => alert(selectedKey)}
        trigger={({ ref, isOpen }) => (
          <Button ref={ref} size="small" active={isOpen}>
            Small Menu
          </Button>
        )}
      >
        <Item key="item-1">1 - Item</Item>
        <Item key="item-2">2 - Item</Item>
        <Item key="item-3">3 - Item</Item>
      </Menu>
    </Col>
  </Row>
</Grid>;
```

### Disabled

Any child menu item with the `disabled` prop will not be selectable.

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

<Menu
  onChange={selectedKey => alert(selectedKey)}
  trigger={({ ref, isOpen }) => (
    <Button ref={ref} active={isOpen}>
      Disabled items
    </Button>
  )}
>
  <Item key="item-1">Item 1</Item>
  <Item key="item-2">Item 2</Item>
  <Item disabled>Disabled Item</Item>
  <Item key="item-3">Item 3</Item>
</Menu>;
```

### Controlled Usage

Similarly to the `MenuContainer` component, the `isOpen` and `focusedKey` states
are controllable with the `onStateChange` prop if needed.

This can be useful if you need to show a visualization of your trigger based on the
state of the Menu.

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

initialState = {
  isOpen: false,
  focusedKey: undefined
};

const getButtonText = isOpen => {
  return `Controlled Menu - ${isOpen ? 'Opened' : 'Closed'}`;
};

<Menu
  isOpen={state.isOpen}
  focusedKey={state.focusedKey}
  onStateChange={setState}
  onChange={selectedKey => alert(selectedKey)}
  trigger={({ ref, isOpen }) => (
    <Button ref={ref} active={isOpen}>
      {getButtonText(state.isOpen)}
    </Button>
  )}
>
  <Item key="item-1">Item 1</Item>
  <Item key="item-2">Item 2</Item>
  <Item disabled>Disabled Item</Item>
  <Item key="item-3">Item 3</Item>
</Menu>;
```

### Advanced Layouts

Example with disabled items, headers, and separators.

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

<Menu
  arrow
  placement="end"
  onChange={selectedKey => alert(`Item selected "${selectedKey}"`)}
  trigger={({ ref, isOpen }) => (
    <Button ref={ref} active={isOpen}>
      Advanced Layout
    </Button>
  )}
>
  <HeaderItem>Header Item Text</HeaderItem>
  <Separator />
  <Item key="profile">Profile</Item>
  <Item key="settings">Settings</Item>
  <Item disabled>Theme Editor</Item>
  <Separator />
  <Item key="article-editor">Article Editor</Item>
  <Item key="logout">Logout</Item>
</Menu>;
```

### Tree Layout with Async Loading

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

const Loader = styled.div`
  text-align: center;
  margin-top: 16px;
`;

initialState = {
  selectedKey: undefined,
  focusedKey: undefined,
  isLoading: false,
  isOpen: false
};

retrieveMenuItems = (selectedKey, isLoading) => {
  if (isLoading) {
    return <Loader>Simulate loading for 1 second...</Loader>;
  }

  if (selectedKey === 'specific-settings') {
    return [
      <PreviousItem key="root">Specific Settings</PreviousItem>,
      <Separator key="separator" />,
      <Item key="cool-setting">Cool Setting</Item>,
      <Item key="uncool-setting">Uncool Setting</Item>,
      <Item key="another-cool-setting">Another Cool Setting</Item>
    ];
  }

  return [
    <HeaderItem key="general-settings">General Settings</HeaderItem>,
    <Separator key="separator" />,
    <Item key="profile">Profile</Item>,
    <Item key="settings">Settings</Item>,
    <Item key="user-images">User Images</Item>,
    <NextItem key="specific-settings">Specific Settings</NextItem>,
    <Item key="theme-editor">Theme Editor</Item>
  ];
};

<Menu
  arrow
  isOpen={state.isOpen}
  focusedKey={state.focusedKey}
  onStateChange={newState => {
    // If menu is being closed, reset focused item
    if (state.isOpen && typeof newState.isOpen !== 'undefined' && !newState.isOpen) {
      newState.selectedKey = undefined;
    }

    setState(newState);
  }}
  onChange={selectedKey => {
    let focusedKey = 'profile';
    let isLoading = false;

    if (selectedKey === 'specific-settings') {
      focusedKey = 'cool-setting';
      isLoading = true;

      setTimeout(() => {
        setState({ isLoading: false });
      }, 1000);
    } else if (selectedKey === 'root') {
      focusedKey = 'specific-settings';
    }

    setState({ selectedKey, focusedKey, isLoading });
  }}
  trigger={({ ref, isOpen }) => (
    <Button ref={ref} active={isOpen}>
      Tree Layout
    </Button>
  )}
  style={{ width: 350, height: 260 }}
>
  {retrieveMenuItems(state.selectedKey, state.isLoading)}
</Menu>;
```

### Scrollable Menu

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

const menuItems = [];

for (let x = 0; x < 150; x++) {
  menuItems.push({
    id: x,
    text: `${x + 1} - Item`
  });
}

<Menu
  maxHeight="250px"
  onChange={selectedKey => alert(selectedKey)}
  trigger={({ ref, isOpen }) => (
    <Button ref={ref} active={isOpen}>
      Scrollable Menu
    </Button>
  )}
>
  {menuItems.map(item => (
    <Item key={item.id}>{item.text}</Item>
  ))}
</Menu>;
```
