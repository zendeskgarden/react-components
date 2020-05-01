The `NextItem` and `PreviousItem` components are wrappers around the
default `Item` component, but enable additional RTL-aware keyboard navigation.

To handle the open/close state based on selection you may control it
with the `isOpen` and `onOpen` props.

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

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
      <Item value="profile">Profile</Item>
      <Item value="settings">Settings</Item>
      <Item value="user-images">User Images</Item>
      <NextItem value="specific-settings">Specific Settings</NextItem>
      <Item value="theme-editor">Theme Editor</Item>
    </>
  );
};

<Dropdown
  role="menu"
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
  <Menu placement="end" hasArrow>
    {renderItems()}
  </Menu>
</Dropdown>;
```
