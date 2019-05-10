## Basic Menu Layout

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');
const { IconButton, Icon } = require('@zendeskgarden/react-buttons/src');
const SettingsIcon = require('@zendeskgarden/svg-icons/src/16/gear-stroke.svg').default;

<Grid>
  <Row>
    <Col md>
      <Dropdown onSelect={item => alert(item)}>
        <Trigger>
          <Button>Default Menu</Button>
        </Trigger>
        <Menu>
          <Item value="option-1">Option 1</Item>
          <Item value="option-2">Option 2</Item>
          <Item value="option-3">Option 3</Item>
        </Menu>
      </Dropdown>
    </Col>
    <Col md>
      <Dropdown onSelect={item => alert(item)}>
        <Trigger>
          <IconButton aria-label="Settings" title="Settings">
            <Icon>
              <SettingsIcon />
            </Icon>
          </IconButton>
        </Trigger>
        <Menu placement="end" arrow>
          <Item value="option-1">Option 1</Item>
          <Item value="option-2">Option 2</Item>
          <Item value="option-3">Option 3</Item>
        </Menu>
      </Dropdown>
    </Col>
  </Row>
</Grid>;
```

## Advanced Layouts

All `Item` components are able to be wrapped and extended with styling libraries or
other layout divs. All necessary information is provided through the `Context` API.

All `Items` require a `value` prop that is provided with the `onSelect` callback.
Any object or value can be provided.

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');
const { zdColorGrey200 } = require('@zendeskgarden/css-variables');
const GroupIcon = require('@zendeskgarden/svg-icons/src/16/user-group-stroke.svg').default;
const ClipboardSvg = require('@zendeskgarden/svg-icons/src/12/clipboard-list-stroke.svg').default;
const BoxSvg = require('@zendeskgarden/svg-icons/src/12/box-3d-stroke.svg').default;
const DatabaseSvg = require('@zendeskgarden/svg-icons/src/12/database-stroke.svg').default;

const StyledItemWrapper = styled.div`
  display: flex;

  li:not(:last-child) {
    border-right: 1px solid ${zdColorGrey200};
  }
`;

initialState = {
  isOpen: false
};

<Dropdown
  isOpen={state.isOpen}
  onStateChange={changes => {
    if (Object.prototype.hasOwnProperty.call(changes, 'isOpen')) {
      setState({ isOpen: changes.isOpen });
    }
  }}
  onSelect={item => alert(item)}
>
  <Trigger>
    <Button active={state.isOpen}>Advanced Layout</Button>
  </Trigger>
  <Menu placement="end" arrow>
    <HeaderItem>Header Item</HeaderItem>
    <Separator />
    <Item value="profile">Option 1</Item>
    <Item value="settings">Option 2</Item>
    <Item disabled>Disabled item</Item>
    <Separator />
    <MediaItem value="image">
      <MediaFigure>
        <img src="images/amir.png" alt="Example Avatar" />
      </MediaFigure>
      <MediaBody>
        Image Media Item
        <ItemMeta>Meta info</ItemMeta>
      </MediaBody>
    </MediaItem>
    <MediaItem value="icon">
      <MediaFigure>
        <GroupIcon />
      </MediaFigure>
      <MediaBody>
        Icon Media Item
        <ItemMeta>Meta info</ItemMeta>
      </MediaBody>
    </MediaItem>
    <Separator />
    <StyledItemWrapper>
      <Item value="clipboard-action">
        <ClipboardSvg />
      </Item>
      <Item value="box-action">
        <BoxSvg />
      </Item>
      <Item value="database-action">
        <DatabaseSvg />
      </Item>
    </StyledItemWrapper>
  </Menu>
</Dropdown>;
```

## Async Loading

You may delay rendering of items if loading is asynchronous. Re-renders will
cause `Downshift` to reapply the required accessibility and interaction attributes.

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

initialState = {
  isOpen: false,
  isLoading: false
};

<Dropdown
  onSelect={item => alert(item)}
  isOpen={state.isOpen}
  onStateChange={changes => {
    if (Object.prototype.hasOwnProperty.call(changes, 'isOpen')) {
      setState({ isOpen: changes.isOpen }, () => {
        if (changes.isOpen) {
          setState({ isLoading: true }, () => {
            setTimeout(() => {
              setState({ isLoading: false });
            }, 2000);
          });
        }
      });
    }
  }}
>
  <Trigger>
    <Button active={state.isOpen}>Async Loading</Button>
  </Trigger>
  <Menu placement="end" arrow>
    {state.isLoading ? (
      <Item disabled>Loading...</Item>
    ) : (
      <>
        <Item value="option-1">Option 1</Item>
        <Item value="option-2">Option 2</Item>
        <Item value="option-3">Option 3</Item>
      </>
    )}
  </Menu>
</Dropdown>;
```

## Tree Layouts

The `NextItem` and `PreviousItem` components are wrappers around the
default `Item` component, but enable additional RTL-aware keyboard navigation.

To handle the open/close state based on selection you may control it
with the `isOpen` and `onOpen` props.

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');
const { zdColorBlue600 } = require('@zendeskgarden/css-variables');

initialState = {
  isOpen: false,
  tempSelectedItem: undefined
};

const renderItems = () => {
  if (state.tempSelectedItem === 'specific-settings') {
    return (
      <>
        <PreviousItem value="general-settings">Specific Settings</PreviousItem>
        <Separator />
        <Item value="cool-setting">Cool setting</Item>
        <Item value="uncool-setting">Uncool setting</Item>
        <Item value="another-setting">Another cool setting</Item>
      </>
    );
  }

  return (
    <>
      <HeaderItem>General Settings</HeaderItem>
      <Separator />
      <Item value="profile">Profile</Item>
      <Item value="settings">Settings</Item>
      <Item value="user-images">User Images</Item>
      <NextItem value="specific-settings">Specific Settings</NextItem>
      <Item value="theme-editor">Theme Editor</Item>
    </>
  );
};

<Dropdown
  isOpen={state.isOpen}
  onStateChange={(changes, stateAndHelpers) => {
    const updatedState = {};

    if (Object.prototype.hasOwnProperty.call(changes, 'isOpen')) {
      updatedState.isOpen =
        changes.selectedItem === 'specific-settings' ||
        changes.selectedItem === 'general-settings' ||
        changes.isOpen;
    }

    if (Object.prototype.hasOwnProperty.call(changes, 'selectedItem')) {
      updatedState.tempSelectedItem = changes.selectedItem;

      if (updatedState.tempSelectedItem === 'specific-settings') {
        stateAndHelpers.setHighlightedIndex(1);
      } else if (updatedState.tempSelectedItem === 'general-settings') {
        stateAndHelpers.setHighlightedIndex(3);
      }
    }

    setState(updatedState);
  }}
>
  <Trigger>
    <Button>Tree Layout</Button>
  </Trigger>
  <Menu placement="end" arrow style={{ width: 200, height: 270 }}>
    {renderItems()}
  </Menu>
</Dropdown>;
```
